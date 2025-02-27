import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import assets from '../../constants/assets';
import ExampleCard from '../card.js/ExtendableCard';

export default function FavouritePage() {
    const navigate = useNavigate();
    const [likedHiddenCards, setLikedHiddenCards] = useState([]);
    const [likedDestinations, setLikedDestinations] = useState([]);

    // Load favourite hidden cards from localStorage
    useEffect(() => {
        const savedHiddenLikes = JSON.parse(localStorage.getItem("likedHiddenSpots")) || {};
        setLikedHiddenCards(Object.values(savedHiddenLikes));

        const savedDestinations = JSON.parse(localStorage.getItem("likedDestinations")) || {};
        setLikedDestinations(Object.values(savedDestinations));
    }, []);

    // Remove a hidden spot from favourites
    const removeFromFavourites = (spotId) => {
        const updatedLikes = likedHiddenCards.filter(spot => spot._id !== spotId);
        setLikedHiddenCards(updatedLikes);
        localStorage.setItem("likedHiddenSpots", JSON.stringify(updatedLikes.reduce((acc, spot) => ({ ...acc, [spot._id]: spot }), {})));
    };

    // Remove a destination from favourites
    const removeFromFavouriteDestinations = (destinationId) => {
        const updatedDestinations = likedDestinations.filter(dest => dest._id !== destinationId);
        setLikedDestinations(updatedDestinations);
        localStorage.setItem("likedDestinations", JSON.stringify(updatedDestinations.reduce((acc, dest) => ({ ...acc, [dest._id]: dest }), {})));
    };

    return (
        <div>
            <NavBar />
            <div className='w-full h-screen bg-black favourite-background flex flex-col justify-center pb-3 items-center'>
                <p className='font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white '>
                    Favourite
                </p>
                <p className='font-Andika text-white min-[1440px]:text-xl text-center text-lg py-3 w-[55%]'>
                    "Explore your saved hidden gems and plan your next adventure!"
                </p>
            </div>

            {/* Favourite Hidden Spots */}
            <div className='w-full bg-black p-14'>
            <p className='text-white text-3xl font-Salsa text-center pb-4'>Favourite Hidden Spots</p>
                <div className='w-full min-h-[500px] px-7 gap-6 py-9 flex flex-wrap items-start justify-center'>
                    {likedHiddenCards.length > 0 ? (
                        likedHiddenCards.map((spot) => (
                            <motion.div
                                key={spot._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='bg-black w-[350px] h-[470px] rounded-[37px] bg-cover group bg-center opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[315px] hover:py-2 transition-all duration-500'
                                style={{ backgroundImage: `url(${spot.src})` }}
                            >
                                <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                    <div className='flex flex-row h-fit w-full items-center px-2 pt-3'>
                                        <p className='text-white text-2xl font-Salsa'>{spot.title}</p>
                                        <img 
                                            src={assets.heartfill} 
                                            alt='heart' 
                                            className='w-6 h-6 ml-auto mx-2 cursor-pointer transition-all duration-300' 
                                            onClick={() => removeFromFavourites(spot._id)}
                                        />
                                    </div>
                                    <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                        <img src={assets.location} className='w-[18px] h-[18px]' />
                                        <p className='text-white text-sm font-Andika mx-1'>{spot.location}</p>
                                    </div>
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        {spot.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-white text-lg font-Andika text-center w-full">
                            No favourites added yet.
                        </p>
                    )}
                </div>
            </div>

            {/* Favourite Destinations */}
            <div className='w-full bg-black p-14'>
                <p className='text-white text-3xl font-Salsa text-center pb-4'>Favourite Destinations</p>
                <div className='w-full min-h-[500px] px-7 gap-6 py-9 flex flex-wrap items-start justify-center'>
                    {likedDestinations.length > 0 ? (
                        likedDestinations.map((destination) => (
                            <motion.div
                                key={destination._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='bg-black w-[350px] h-[470px] rounded-[37px] bg-cover group bg-center opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[315px] hover:py-2 transition-all duration-500'
                                style={{ backgroundImage: `url(${destination.imageURL})` }}
                            >
                                <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                    <div className='flex flex-row h-fit w-full items-center px-2 pt-3'>
                                        <p className='text-white text-2xl font-Salsa'>{destination.title}</p>
                                        <img 
                                            src={assets.heartfill} 
                                            alt='heart' 
                                            className='w-6 h-6 ml-auto mx-2 cursor-pointer transition-all duration-300' 
                                            onClick={() => removeFromFavouriteDestinations(destination._id)}
                                        />
                                    </div>
                                    <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                        <img src={assets.location} className='w-[18px] h-[18px]' />
                                        <p className='text-white text-sm font-Andika mx-1'>{destination.location}</p>
                                    </div>
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        {destination.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-white text-lg font-Andika text-center w-full">
                            No favourite destinations added yet.
                        </p>
                    )}
                </div>
            </div>
            
            <FooterElement />
        </div>
    );
}
