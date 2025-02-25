import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import assets from '../../constants/assets';
import { useNavigate } from 'react-router-dom';
import cards from '../../constants/cards';
import CardComponent from '../card.js/CardComponent';
import FilterComponent from '../card.js/FilterComponent';
import HiddenCards from '../card.js/HiddenCard'
import ItineraryCard from '../card.js/ItineraryCard';

export const placeData = [
    { id: 1, name: "Chennai", image: "/assets/chennai.jpg" },
    { id: 2, name: "Coimbatore", image: "/assets/coimbatore.jpg" },
    { id: 3, name: "Kodaikanal", image: "/assets/kodaikanal.jpg" },
    { id: 4, name: "Coonor", image: "/assets/coonor.jpg" },
  ];

  export const places = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Thiruchi",
    "Kodaikanal",
    "Nagarcovil",
    "Kanyakumari",
    "Coonor",
  ];
export default function ItineraryPage() {
    const navigate = useNavigate();
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
                <div className=' w-[684px] px-5 text-xs font-mono rounded-[28px] bg-white flex flex-row justify-between items-center'>
                    <input type='text' placeholder='Search...' className='p-3 w-full py-[16px] text-base px-5 font-mono rounded-[28px] focus:outline-none'/>
                    <img src={assets.search} className='w-[30px] h-[30px] cursor-pointer'/>
                </div>   
            </div>
            {/*card component */}
            <div className="w-full bg-black p-16">
        {/* Filter Buttons */}
            <FilterComponent/>
        {/* Dynamic Cards Component */}
        <ItineraryCard/>
      </div>

        <div className='w-full bg-black'>
            
            <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-6'>
                        Hidden Gems
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-[45%]'>
                        "Unlock the unknown"
                    </p>
            </div>

                {/*Hidden gems cards*/}
                <div className='w-full bg-black'>
                <HiddenCards cards={cards}/>
                <div className='w-full flex justify-center pb-8'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/hidden-spot");
                        }}>
                            Explore
                        </a>
                    </button>
                </div>
            </div>
            </div>
        <FooterElement/>
        </div>
    )
}