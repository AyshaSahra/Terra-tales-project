import React from 'react';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import CardComponent from '../card.js/CardComponent';
import { useState } from 'react';
import assets from '../../constants/assets';

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

  const placeData = [
    { id: 1, name: "Chennai", image: "chennai.jpg" },
    { id: 2, name: "Coimbatore", image: "coimbatore.jpg" },
    { id: 3, name: "Kodaikanal", image: "kodaikanal.jpg" },
    { id: 4, name: "Coonor", image: "coonor.jpg" },
  ];
export default function HiddenSpot() {
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
            <div className='w-full h-screen bg-black hidden-background flex flex-col justify-center pb-3 items-center'> 
            <p className='font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white '>
                    Hidden Spots
            </p>
            <p className='font-Andika text-white min-[1440px]:text-xl text-center text-lg py-3 w-[55%]'>
                "Discover a land where ancient history, stunning landscapes, and vibrant culture come together to create unforgettable experiences!!"  
            </p>
            <div className=' w-[684px] px-5 text-xs font-mono rounded-[28px] bg-white flex flex-row justify-between items-center'>
                <input type='text' placeholder='Search...' className='p-3 w-full py-[16px] text-base px-5 font-mono rounded-[28px] focus:outline-none'/>
                <img src={assets.search} className='w-[30px] h-[30px] cursor-pointer'/>
                </div>    
        </div>
        {/*Cards component*/}
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
        <FooterElement/>
        </div>
    )
}