import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../navbar/NavBar";
import FooterElement from "../footer/FooterElement";
import assets from "../../constants/assets";
import cards from "../../constants/cards";
import CardComponent from "../card.js/CardComponent";
import HiddenCards from "../card.js/HiddenCard";

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
  "Trichy",
  "Kodaikanal",
  "Nagercoil",
  "Kanniyakumari",
  "Coonor",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Kodaikanal",
  "Nagercoil",
  "Kanniyakumari",
  "Coonor",
];

export default function DestinationPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPlaces, setFilteredPlaces] = useState(placeData);

  const filterPlaces = (place) => {
    setSelectedCategory(place);
    setFilteredPlaces(
      place === "All" ? placeData : placeData.filter((p) => p.name === place)
    );
  };

  return (
    <div>
      <NavBar />
      {/* Hero Section */}
      <div className="w-full h-screen bg-black destination-background flex flex-col justify-center pb-3 items-center">
        <p className="font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white">
          Destination
        </p>
        <p className="font-Andika text-white min-[1440px]:text-xl text-center text-lg py-3 w-[55%]">
          "Discover a land where ancient history, stunning landscapes, and
          vibrant culture come together to create unforgettable experiences!!"
        </p>
        <div className="w-[684px] px-5 text-xs font-mono rounded-[28px] bg-white flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-3 w-full py-[16px] text-base px-5 font-mono rounded-[28px] focus:outline-none"
          />
          <img
            src={assets.search}
            className="w-[30px] h-[30px] cursor-pointer"
            alt="search icon"
          />
        </div>
      </div>

      {/* Destination Filters & Cards */}
      <div className="w-full flex justify-center flex-col bg-black p-16">
        {/* Filter Buttons */}
        <div className="flex flex-row flex-nowrap gap-4 p-9 mx-5 w-full justify-start items-center overflow-y-scroll h-auto mb-6">
          <button
            onClick={() => filterPlaces("All")}
            className={`bg-white text-black over px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 ${
              selectedCategory === "All" ? "font-bold" : ""
            }`}
          >
            All
          </button>
          {places.map((place) => (
            <button
              key={place}
              onClick={() => filterPlaces(place)}
              className={`bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 ${
                selectedCategory === place ? "font-bold" : ""
              }`}
            >
              {place}
            </button>
          ))}
        </div>

        {/* Destination Cards */}

        {/* Dynamic Cards Component */}
        <CardComponent selectedCategory={selectedCategory} />
      </div>

      {/* Hidden Gems Section */}
      <div className="w-full bg-black">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-4xl font-McLaren text-center pt-6">
            Hidden Gems
          </p>
          <p className="font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-[45%]">
            "Unlock the unknown"
          </p>
        </div>

        {/* Hidden Gems Cards */}
        <div className="w-full bg-black">
          <HiddenCards cards={cards} />
          <div className="w-full flex justify-center pb-8">
            <button
              className="bg-white text-black font-Andika font-semibold content-center text-m w-fit rounded-full px-6 py-2 pt-1"
              onClick={() => navigate("/explore-hidden-gems")}
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterElement />
    </div>
  );
}
