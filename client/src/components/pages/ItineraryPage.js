import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import assets from '../../constants/assets';
import { useNavigate } from 'react-router-dom';
import cards from '../../constants/cards';
import FilterComponent from '../card.js/FilterComponent';
import HiddenCards from '../card.js/HiddenCard';
import ItineraryCard from '../card.js/ItineraryCard';

export default function ItineraryPage() {
    const navigate = useNavigate();
    const [itineraryCards, setItineraryCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch itinerary cards from MongoDB
    useEffect(() => {
        const fetchItineraryCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/itinerary-cards');
                setItineraryCards(response.data);
            } catch (error) {
                console.error('Error fetching itinerary cards:', error);
            }
        };
        fetchItineraryCards();
    }, []);

    // Filter cards based on search term
    const filteredCards = itineraryCards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <NavBar />
            <div className='w-full h-screen bg-black itinerary-background flex flex-col justify-center pb-3 items-center'>
                <p className='font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white '>
                    Itinerary 
                </p>
                <p className='font-Andika text-white min-[1440px]:text-xl text-center text-lg py-3 w-[55%]'>
                    "Discover a land where ancient history, stunning landscapes, and vibrant culture come together to create unforgettable experiences!!"  
                </p>  
                <div className='w-[684px] px-5 text-xs font-mono rounded-[28px] bg-white flex flex-row justify-between items-center'>
                    <input 
                        type='text' 
                        placeholder='Search...' 
                        className='p-3 w-full py-[16px] text-base px-5 font-mono rounded-[28px] focus:outline-none'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img src={assets.search} className='w-[30px] h-[30px] cursor-pointer'/>
                </div>   
            </div>

            {/* Card Section */}
            <div className="w-full bg-black p-16">
                {/* Filter Buttons */}
                <FilterComponent />

                {/* Pass filtered itinerary cards to ItineraryCard */}
                <ItineraryCard itineraryCards={filteredCards} />
            </div>

            {/* Hidden Gems Section */}
            <div className='w-full bg-black'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-6'>
                        Hidden Gems
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-[45%]'>
                        "Unlock the unknown"
                    </p>
                </div>
                <HiddenCards cards={cards} />
            </div>
            
            <FooterElement />
        </div>
    );
}
