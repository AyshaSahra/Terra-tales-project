import React from 'react';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import assets from '../../constants/assets';

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
                <div className=' w-[684px] px-5 text-xs font-mono rounded-[28px] bg-white flex flex-row justify-between items-center'>
                    <input type='text' placeholder='Search...' className='p-3 w-full py-[16px] text-base px-5 font-mono rounded-[28px] focus:outline-none'/>
                    <img src={assets.search} className='w-[30px] h-[30px] cursor-pointer'/>
                </div>   
            </div>
            
        <FooterElement/>
        </div>
    )
}