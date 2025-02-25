import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ExtendableCard() {
    const [cards, setCards] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/itinerary-cards');
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching itinerary cards:', error);
            }
        };
        fetchCards();
    }, []);

    return (
        <div className="flex flex-col flex-wrap gap-4 p-9 mx-24 w-full justify-center items-center overflow-x-hidden h-[420px]">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="relative rounded-[50px] overflow-hidden cursor-pointer"
                    animate={{ width: selected === index ? "375px" : "117px", height: '376px' }}
                    transition={{ type: 'tween', stiffness: 0, damping: 20 }}
                    onClick={() => setSelected(index)}
                >
                    <img src={card.src} alt={card.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 text-white ${selected === index ? "text-lg flex flex-col justify-center items-center px-16 text-left" : ""}`}>
                        <motion.p
                            transition={{ type: 'inertia', duration: 0.5 }}
                            className={`text-xl font-Salsa text-white w-full text-nowrap ${selected === index ? "flex flex-col justify-center items-center rotate-[0deg] transition-transform duration-200" : "rotate-[-90deg] pl-[340px] h-fit"}`}
                        >
                            {card.title}
                        </motion.p>
                        {selected === index && (
                            <motion.p
                                initial={{ display: 'hidden', opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: 'easeInOut', duration: 0.5 }}
                                className="text-base mt-2 font-Andika text-white w-full h-fit ease-in-out duration-200"
                            >
                                {card.text}
                            </motion.p>
                        )}
                        {selected === index && (
                            <button className="bg-white text-black font-Andika font-medium my-4 content-center w-1/2 rounded-full px-3 py-2 pt-1">
                                Explore
                            </button>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
