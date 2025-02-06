import React from 'react';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';

export default function ItineraryPage() {
    return(
        <div>
            <NavBar/>
            <div className='w-full h-screen bg-black itinerary-background flex flex-col justify-center pb-3 items-center'> 
            <p className='font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white '>
                    Itinerary 
            </p>
            <p className='font-Andika text-white min-[1440px]:text-xl text-center text-lg py-3 w-[55%]'>
                "Discover a land where ancient history, stunning landscapes, and vibrant culture come together to create unforgettable experiences!!"  
            </p>    
        </div>
        <FooterElement/>
        </div>
    )
}