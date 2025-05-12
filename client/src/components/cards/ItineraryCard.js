import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import assets from '../../constants/assets';

const ItineraryCard = ({ selectedFilters }) => {
  const navigate = useNavigate();
  const [likedCards, setLikedCards] = useState({});
  const [itineraryCards, setItineraryCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef(null);

  // Fetch data from MongoDB
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/itinerary-cards');
        console.log("Fetched cards:", response.data); // Log fetched data
        setItineraryCards(response.data);
        setFilteredCards(response.data); // Initialize filteredCards with all data
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);

  // Filter cards based on selectedFilters
  useEffect(() => {
    const filterCards = () => {
      if (!selectedFilters) return; // Ensure selectedFilters is defined

      let filtered = itineraryCards;

      // Filter by Region
      if (selectedFilters.Region && selectedFilters.Region.length > 0) {
        filtered = filtered.filter(card => selectedFilters.Region.includes(card.region));
      }

      // Filter by Interest
      if (selectedFilters.Interest && selectedFilters.Interest.length > 0) {
        filtered = filtered.filter(card => selectedFilters.Interest.includes(card.interest));
      }

      // Filter by Days
      if (selectedFilters.Days) {
        filtered = filtered.filter(card => card.days === selectedFilters.Days);
      }

      setFilteredCards(filtered);
    };

    filterCards();
  }, [selectedFilters, itineraryCards]);

  // Toggle like for a card
  const toggleLike = (card) => {
    setLikedCards((prev) => {
      const updatedLikes = { ...prev };
      if (updatedLikes[card._id]) {
        delete updatedLikes[card._id];
      } else {
        updatedLikes[card._id] = card;
      }
      localStorage.setItem("likedItineraryPlaces", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  // Toggle show all cards
  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='w-full h-auto z-10 overflow-hidden px-7 gap-6 py-9 flex flex-wrap items-start justify-center'>
        <AnimatePresence>
          {(showAll ? filteredCards : filteredCards.slice(0, 9)).map((card) => (
            <motion.div
              key={card._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='bg-black w-[330px] h-[450px] rounded-[37px] bg-cover group bg-center opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[305px] hover:py-2 transition-all duration-500'
              style={{ backgroundImage: `url(${card.src})` }}
            >
              <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-2 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                  <p className='text-white text-2xl font-Salsa'>{card.title}</p>
                  <img 
                    src={likedCards[card._id] ? assets.heartfill : assets.heart} 
                    alt='heart' 
                    className='w-6 h-6 ml-auto mx-2 cursor-pointer transition-all duration-300' 
                    onClick={() => toggleLike(card)}
                  />
                </div>
                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                  <img src={assets.location} className='w-[18px] h-[18px]'/>
                  <p className='text-white text-sm font-Andika mx-1'>{card.location}</p>
                </div>
                <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  {card.text}
                </p>
                <button 
                  className='bg-white text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'
                  onClick={() =>{ 
                    window.scrollTo(0, 0);
                    navigate(`/itinerary/${card._id}`);
                  }}
                >
                  Explore more
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className='w-full flex justify-center pb-1 pt-3'>
        <motion.button 
          ref={buttonRef}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className='bg-white text-black font-Andika font-semibold content-center text-m w-fit rounded-full px-6 py-2 pt-1 transition-all duration-300' 
          onClick={handleToggleShowAll}
        >
          {showAll ? 'Show Less' : 'Explore More'}
        </motion.button>
      </div>
    </div>
  );
};

export default ItineraryCard;