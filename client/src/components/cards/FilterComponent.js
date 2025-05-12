import React from "react";

const filters = ["Region", "Interest", "Days"];
const filterOptions = {
  Region: ["North", "South", "East", "West"],
  Interest: ["Adventure", "Relaxation", "Cultural", "Wildlife"],
  Days: ["1 day", "2 days", "3 days", "4 days"]
};

const FilterComponent = ({ selectedFilters, handleSelection }) => {
  const [openFilter, setOpenFilter] = React.useState(null);

  // Toggle filter dropdown
  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  return (
    <div className="p-6 w-full flex flex-row text-white">
      <div className="flex flex-row justify-center items-center w-full gap-6 mb-2">
        {filters.map((filter) => (
          <div key={filter} className="relative">
            <button
              onClick={() => toggleFilter(filter)}
              className="bg-white text-black font-AndikaBold text-lg px-20 py-2 rounded-lg shadow-md hover:bg-gray-200"
            >
              {filter} {openFilter === filter ? "▲" : "▼"}
            </button>
            {openFilter === filter && (
              <div className="absolute mt-2 w-full bg-white text-black font-Salsa text-lg p-4 rounded-lg shadow-lg z-50">
                {filterOptions[filter].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type={filter === "Days" ? "radio" : "checkbox"}
                      name={filter === "Days" ? "days" : undefined}
                      checked={
                        filter === "Days"
                          ? selectedFilters[filter] === option
                          : selectedFilters[filter].includes(option)
                      }
                      onChange={() => handleSelection(filter, option)}
                      className="mr-2"
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;