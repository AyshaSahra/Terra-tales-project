import { useRef, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import assets from "../../constants/assets";
import { useNavigate } from "react-router-dom";

const HiddenCard = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [hiddenspot, setHiddenSpot] = useState([]);
  const [likedCards, setLikedCards] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  // Fetch data from API
  useEffect(() => {
    const fetchHiddenSpots = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hidden-spots");
        setHiddenSpot(response.data);
      } catch (error) {
        console.error("Error fetching hidden spots:", error);
      }
    };
    fetchHiddenSpots();
  }, []);

  // Load liked spots from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedHiddenSpots")) || {};
    setLikedCards(savedLikes);
  }, []);

  // Function to handle like/unlike
  const toggleFavourite = (spot) => {
    const updatedLikes = { ...likedCards };

    if (updatedLikes[spot._id]) {
      delete updatedLikes[spot._id]; // Remove if already liked
    } else {
      updatedLikes[spot._id] = spot; // Add to favourites
    }

    setLikedCards(updatedLikes);
    localStorage.setItem("likedHiddenSpots", JSON.stringify(updatedLikes));
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || hiddenspot.length === 0) return;

    let scrollInterval;

    const startScrolling = () => {
      if (isPaused) return;
      scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 1;
      }, 20);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
      setTimeout(() => {
        setIsPaused(false);
        startScrolling();
      }, 2000);
    };

    startScrolling();

    const handleScroll = () => {
      setIsPaused(true);
      clearInterval(scrollInterval);
      stopScrolling();

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [isPaused, hiddenspot]);

  return (
    <div className="flex overflow-hidden px-7 py-3 mx-14">
      <div
        ref={scrollRef}
        className="flex gap-8 flex-row items-center overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth"
      >
        {hiddenspot.length > 0 &&
          [...hiddenspot, ...hiddenspot, ...hiddenspot].map((spot, index) => (
            <div key={index} className="shrink-0">
              <div
                className="w-[350px] h-[470px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[245px] hover:py-2 transition-all duration-500"
                style={{ backgroundImage: `url(${spot.src})` }}
              >
                <div className="w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden">
                  <div className="flex flex-row h-fit w-full justify-evenly items-center px-2 pt-3">
                    <p className="text-white text-2xl font-Salsa break-words whitespace-normal h-fit w-60">{spot.title}</p>
                    <img
                      src={likedCards[spot._id] ? assets.heartfill : assets.heart}
                      alt="heart"
                      className="w-6 h-6 ml-auto mx-2 cursor-pointer transition-all duration-300"
                      onClick={() => toggleFavourite(spot)}
                    />
                  </div>
                  <div className="flex flex-row h-fit w-full items-center px-1 pt-2">
                    <img src={assets.location} className="w-[18px] h-[18px]" />
                    <p className="text-white text-sm font-Andika mx-1">{spot.location}</p>
                  </div>
                  <p className="text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {spot.text}
                  </p>
                  <button className="bg-white text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1"
                  onClick={() => navigate(`/hidden-spot/${spot._id}`)}>
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HiddenCard;
