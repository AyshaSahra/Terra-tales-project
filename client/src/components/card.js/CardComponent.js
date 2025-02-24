import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import assets from '../../constants/assets'; // For heart_icon and location_icon

export default function CardComponent() {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]); // Stores fetched data
    const [likedCards, setLikedCards] = useState({}); // Tracks liked state

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cards');
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };
        fetchCards();
    }, []);

    const toggleLike = (index) => {
        setLikedCards((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle like state
        }));
    };

    return (
        <div>
            <div className='w-full h-[1450px] z-10 overflow-y-scroll px-7 gap-6 py-9 flex flex-wrap items-start justify-center'>
                {cards.map((card, index) => (
                    <motion.div
                        key={card._id}
                        className='bg-black w-[330px] h-[450px] rounded-[37px] bg-cover group bg-center opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[315px] hover:py-2 transition-all duration-500'
                        style={{ backgroundImage: `url(${card.imageURL})` }}
                    >
                        <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                            <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>{card.title}</p>
                                <img 
                                    src={likedCards[index] 
                                        ? assets.heart_icon_filled // Filled heart 
                                        : assets.heart_icon // Outlined heart
                                    } 
                                    alt='heart' 
                                    className='w-6 h-6 ml-auto mx-2 cursor-pointer transition-all duration-300' 
                                    onClick={() => toggleLike(index)}
                                />
                            </div>
                            <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                <img src={assets.location_icon} className='w-[18px] h-[18px]'/>
                                <p className='text-white text-sm font-Andika mx-1'>{card.author}</p>
                            </div>
                            <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                {card.description}
                            </p>
                            <button className='bg-white text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                Explore more
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className='w-full flex justify-center pb-1 pt-3'>
                <button className='bg-white text-black font-Andika font-semibold content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={() => navigate("/destination")}>Explore</a>
                </button>
            </div>
        </div>
    );
}
