import React from 'react';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import assets from '../../constants/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import cards from '../../constants/cards';
import CardComponent from '../card.js/CardComponent';
import { useState } from 'react';
import HiddenCards from '../card.js/HiddenCard';

const placeData = [
    { id: 1, name: "Chennai", image: "chennai.jpg" },
    { id: 2, name: "Coimbatore", image: "coimbatore.jpg" },
    { id: 3, name: "Kodaikanal", image: "kodaikanal.jpg" },
    { id: 4, name: "Coonor", image: "coonor.jpg" },
  ];

const places = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Thiruchi",
    "Kodaikanal",
    "Nagarcovil",
    "Kanyakumari",
    "Coonor",
  ];

export default function DestinationPage() {
    const navigate = useNavigate()

    const [filteredPlaces, setFilteredPlaces] = useState(placeData);

  const filterPlaces = (place) => {
    if (place === "All") {
      setFilteredPlaces(placeData);
    } else {
      setFilteredPlaces(placeData.filter((p) => p.name === place));
    }
  };
    return(
        <div>
            <NavBar/>
            <div className='w-full h-screen bg-black destination-background flex flex-col justify-center pb-3 items-center'> 
                <p className='font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white '>
                        Destination
                </p>
                <p className='font-Andika text-white min-[1440px]:text-xl text-center text-lg py-3 w-[55%]'>
                    "Discover a land where ancient history, stunning landscapes, and vibrant culture come together to create unforgettable experiences!!"  
                </p> 
                <div className=' w-[684px] px-5 text-xs font-mono rounded-[28px] bg-white flex flex-row justify-between items-center'>
                <input type='text' placeholder='Search...' className='p-3 w-full py-[16px] text-base px-5 font-mono rounded-[28px] focus:outline-none'/>
                <img src={assets.search} className='w-[30px] h-[30px] cursor-pointer'/>
                </div>   
            </div>
            {/*Destination card component*/}
            <div className='w-full bg-black p-16'>
            <div className="flex flex-wrap gap-3 justify-center w-full mb-6">
                <button
                onClick={() => filterPlaces("All")}
                className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200"
                >
                All
                </button>
                {places.map((place) => (
                <button
                    key={place}
                    onClick={() => filterPlaces(place)}
                    className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200"
                >
                    {place}
                </button>
                ))}
            </div>
            {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{place.name}</h3>
          </div>
        ))}
      </div>*/}
                <CardComponent/>
            </div>
            {/*hidden spots*/}
            <div className='w-full bg-black'>
            
            <div className='flex flex-col items-center justify-center '>
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
                    <a>
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