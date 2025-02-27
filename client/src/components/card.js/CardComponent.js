import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import assets from '../../constants/assets';

export default function CardComponent({ selectedCategory, searchResults }) {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [likedCards, setLikedCards] = useState({});
    const [showAll, setShowAll] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cards');
                setCards(response.data);
                setFilteredCards(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };
        fetchCards();
    }, []);

    useEffect(() => {
        if (searchResults) {
            setFilteredCards(searchResults);
        } else if (selectedCategory === "All") {
            setFilteredCards(cards);
        } else {
            setFilteredCards(cards.filter(card => card.location === selectedCategory));
        }
    }, [selectedCategory, searchResults, cards]);

    useEffect(() => {
        const savedLikes = JSON.parse(localStorage.getItem("likedDestinations")) || {};
        setLikedCards(savedLikes);
    }, []);

    const toggleLike = (index) => {
        setLikedCards((prev) => {
            const updatedLikes = { ...prev };
            const cardId = cards[index]._id;

            if (updatedLikes[cardId]) {
                delete updatedLikes[cardId];
            } else {
                updatedLikes[cardId] = cards[index];
            }

            localStorage.setItem("likedDestinations", JSON.stringify(updatedLikes));
            return updatedLikes;
        });
    };

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
                    {(showAll ? filteredCards : filteredCards.slice(0, 9)).map((card, index) => (
                        <motion.div
                            key={card._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='bg-black w-[330px] h-[450px] rounded-[37px] bg-cover group bg-center opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[305px] hover:py-2 transition-all duration-500'
                            style={{ backgroundImage: `url(${card.imageURL})` }}
                        >
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-2 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                    <p className='text-white text-2xl font-Salsa'>{card.title}</p>
                                    <img 
                                        src={likedCards[card._id] 
                                            ? assets.heartfill 
                                            : assets.heart
                                        } 
                                        alt='heart' 
                                        className='w-6 h-6 ml-auto mx-2 cursor-pointer transition-all duration-300' 
                                        onClick={() => toggleLike(index)}
                                    />
                                </div>
                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>{card.location}</p>
                                </div>
                                <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    {card.description}
                                </p>
                                <button 
                                    className='bg-white text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'
                                    onClick={() => navigate(`/destination/${card._id}`)}
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
}
