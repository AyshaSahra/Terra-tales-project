import React, { useEffect, useState } from 'react';
import assets from '../../constants/assets';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import cards from '../../constants/cards';
import { useNavigate } from 'react-router-dom';
import HiddenCard from '../cards/HiddenCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItineraryLanding() {
  const [selectedDay, setSelectedDay] = useState("day1");
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itinerary, setItinerary] = useState({});  // ✅ Default to empty object to avoid errors
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const images = itinerary.days || {};  // ✅ Use the fetched itinerary days dynamically

  // Function to split cards into days dynamically
const distributeCards = (cards, limit) => {
  let daysData = {};
  let dayCount = 1;
  let currentDayCards = [];

  cards.forEach((card) => {
    if (currentDayCards.length < limit) {
      currentDayCards.push(card);
    } else {
      daysData[`day${dayCount}`] = [...currentDayCards]; // Store previous day's data
      currentDayCards = [card]; // Start a new day
      dayCount++;
    }
  });

  if (currentDayCards.length > 0) {
    daysData[`day${dayCount}`] = currentDayCards; // Add last day's cards
  }

  return daysData;
};
  // Filter cards based on itinerary title
 const filteredCards = cards.filter(card => card.location === itinerary.title);
 const cardsPerDay = 3; // Max 3 cards per day
 const daysData = distributeCards(filteredCards, cardsPerDay);
const availableDays = Object.keys(daysData); // Get only available days
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  useEffect(() => {
    const fetchItinerary = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/itinerary-cards/${id}`);
            setItinerary(response.data);
        } catch (error) {
            console.error("Error fetching itinerary:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCards = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/cards');
            setCards(response.data);
        } catch (error) {
            console.error('Error fetching cards:', error);
        }
    };

    fetchItinerary();
    fetchCards();
}, [id]);
 // ✅ Ensures useEffect runs when id changes


  // Calculate image transform based on scroll
  const calculateImageStyle = () => {
    const startTransform = window.innerHeight * 0.5;
    const endTransform = window.innerHeight * 1.5;
    const progress = Math.max(0, Math.min((scrollPosition - startTransform) / (endTransform - startTransform), 1));
    
    // Calculate final position
    const finalTop = 64;
    const finalRight = window.innerWidth - (window.innerWidth * 0.000051) + 320;
    
    // Transform calculations
    const scale = 1 - (progress * 0.5);
    const translateY = progress * finalTop;
    const translateX = progress * finalRight;
    
    // Final dimensions
    const finalWidth = window.innerWidth * 0.35;
    const finalHeight = window.innerHeight * 0.6;

    // Determine if we should lock the image in place
    const isLocked = scrollPosition > endTransform;
    
    return {
      transform: isLocked 
        ? `translate(${finalRight}px, ${finalTop}px) scale(0.5)`
        : `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 1,
      width: progress === 0 ? '100vw' : '482px',
      height: progress === 0 ? '100vh' : '594px',
      backgroundImage: `url(${itinerary.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      transition: isLocked ? 'none' : 'all 300ms ease-out',
      zIndex: 4, // Keep a consistent z-index that's above the background but below the text
    };
  };

  return (
    <div className="relative">
      {/* First Section with Parallax Image */}
      <div className="h-screen relative bg-black overflow-hidden">
        <div style={calculateImageStyle()} />
        <NavBar/>
        <div className="relative h-full flex items-end justify-start">
          <div className="text-white text-center p-8 bg-opacity-30 rounded-lg" style={{ zIndex: 20 }}>
            <p className='font-Pottaone min-[1440px]:text-7xl text-5xl pb-3 text-white'>
                {itinerary.title}
            </p>
            <div className='flex flex-row items-center'>
            <img src={assets.location} className='w-[18px] h-[18px]'/>
            <p className='font-Ubuntu min-[1440px]:text-5xl pl-1 text-2xl text-white'>
                {itinerary.location}
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-screen  bg-black backdrop-blur-sm p-12 relative" style={{ zIndex: 2 }}>
        <div className="max-w-[50%] py-10 ml-8 h-fit text-white p-8">
        <div className="text-white p-8 bg-opacity-30 rounded-lg" style={{ zIndex: 20 }}>
            <div className='flex flex-col justify-start w-full'>
            <p className='font-Pottaone min-[1440px]:text-7xl text-5xl pb-3 text-white'>
                {itinerary.title}
            </p>
            <div className='flex flex-row items-center'>
                <img src={assets.location} className='w-[18px] h-[18px]'/>
                <p className='font-Ubuntu min-[1440px]:text-5xl pl-1 text-2xl text-white'>
                    {itinerary.location}
                </p>
            </div>
            </div>
        </div>
          <p className="font-Ubuntu text-2xl text-white" >
            {itinerary.itinerarydescription}
          </p>
        </div>
      </div>
      {/*Section 3 */}
      <div className='bg-black h-screen w-full justify-center flex flex-col items-center p-2' >
      <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-2'>
                        Itierary for {itinerary.title}
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-full'>
                        Plan your journey
                    </p>
            </div> 
      <div className="flex flex-col items-center w-full justify-center p-6 bg-black h-full">
    <div className="relative w-full max-w-4xl">
      {/* Day Selector - Shows only available days */}
      <div className="absolute -top-10 left-4 flex space-x-4 z-10">
        {availableDays.map((day, index) => (
          <div
            key={index}
            onClick={() => setSelectedDay(day)}
            className={`px-6 pb-24 hover:cursor-pointer pt-2 z-20 flex items-start justify-center text-white rounded-t-md transition-all duration-300 ${
              selectedDay === day ? "bg-[#252525f5] text-lg scale-110" : "linear-weather glass-effect text-sm"
            }`}
          >
            <p>
              Day <span>{index + 1}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Cards Section - Displays only the available day's cards */}
      <div className="linear-weather glass-effect p-5 rounded-lg w-full relative z-20">
        {daysData[selectedDay]?.map((card, index) => (
          <div
            key={index}
            className="relative bg-center bg-cover w-full h-32 rounded-3xl my-5"
            style={{ backgroundImage: `url(${card.imageURL})` }}
          >
            <div className="w-full h-full bg-opacity-50 bg-black rounded-3xl flex flex-row justify-stretch items-center gap-24 p-5">
              <div className='flex flex-col h-full w-full gap-2'>
                <p className=" flex items-center justify-between text-white font-McLaren text-xl font-semibold">
                  {card.title}
                </p>
                <p className='flex items-center justify-between pl-5 text-white text-lg font-Andika'>
                  {card.description}
                </p>
                </div>

              <button 
                className='bg-white text-black font-Andika font-semibold text-nowrap h-fit content-center text-m rounded-full px-3 py-2 pt-1'
                onClick={() => navigate(`/destination/${card._id}`)}
                 >
                  Explore more
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

      </div>
      {/* Section 4*/}
      <div className='w-full bg-black'>
            
            <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-2'>
                        Hidden Gems
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-[45%]'>
                        "Unlock the unknown"
                    </p>
            </div>

                {/*Hidden gems cards*/}
                <HiddenCard/>
                <div className="w-full flex justify-center pb-8">
            <button
              className="bg-white text-black font-Andika font-semibold content-center text-m w-fit rounded-full px-6 py-2 pt-1"
              onClick={() => {
                window.scrollTo(0, 0); // Scroll to top
                navigate("/hidden-spot");
            }}
            >
              Explore
            </button>
          </div>
            </div>
      <FooterElement/>
    </div>
  );
}