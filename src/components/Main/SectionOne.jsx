import React from "react";
import SearchSectionOne from "./SearchSectionOne";
import imageFamily from "../../assets/imgppal.jpg";
import CardsSectionOne from "./CardsSectionOne";
const SectionOne = () => {
  return (
    <>
      <div className='section-one-top-container'>
        <img
          style={{ objectFit: "cover" }}
          src={imageFamily}
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div className='section-one-bottom-container'>
    
<div className="wrap-bottom-sectionOne-container "></div>
        <SearchSectionOne />
      </div>
    </>
  );
};

export default SectionOne;
