import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

import SearchInput from "../SearchInput/SearchInput";
import CardsSectionOne from "./CardsSectionOne";

const SearchSectionOne = () => {
  const options = ["Comprar", "Alquilar", "Obra Nueva", "Compartir"];
  const [selectedOption, setSelectedOption] = useState("Comprar");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='superimposed-div'>
      <h3
        style={{
          fontWeight: "600",
          color: "#fff",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        Todos tenemos un sitio
      </h3>
      <div
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {options.map((option) => (
          <span
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "12px",
              padding: "0.8rem",
              borderBottom:
                selectedOption === option
                  ? "2px solid #fff"
                  : "1px solid transparent",
            }}
          >
            {option}
          </span>
        ))}
      </div>
      <div className='select-search-inputs-container'>
        <CustomSelect />

        <SearchInput />
        
      </div>
      <h3 style={{fontSize:'14px', marginTop:'2.8rem', marginLeft:'0.1rem' }}>Te acompañamos en todo el proceso</h3>
      <div className="card-wrapper-cards-sectionOne">
          <CardsSectionOne />
        </div>
    </div>
  );
};

export default SearchSectionOne;
