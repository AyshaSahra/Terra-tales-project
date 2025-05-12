import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import ItineraryCard from "./ItineraryCard";

const FilterParent = () => {
  // Initialize selectedFilters state
  const [selectedFilters, setSelectedFilters] = useState({
    Region: [],
    Interest: [],
    Days: ""
  });

  // Handle selection of filters
  const handleSelection = (category, option) => {
    setSelectedFilters((prev) => {
      if (category === "Days") {
        return { ...prev, [category]: prev[category] === option ? "" : option };
      }
      const isSelected = prev[category].includes(option);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== option)
          : [...prev[category], option]
      };
    });
  };

  return (
    <div>
      {/* Pass selectedFilters and handleSelection to FilterComponent */}
      <FilterComponent 
        selectedFilters={selectedFilters} 
        handleSelection={handleSelection} 
      />
      {/* Pass selectedFilters to ItineraryCard */}
      <ItineraryCard 
        selectedFilters={selectedFilters} 
      />
    </div>
  );
};

export default FilterParent;