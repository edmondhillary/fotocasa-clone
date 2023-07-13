import React from "react";
import "./Main.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from "./SectionFive/SectionFive";
import SectionSix from "./SectionSix/SectionSix";
import SectinPic from "./SectionPic/SectinPic";

const Main = () => {
  return (
    <div className='main-container' style={{ marginTop: "3.5rem" }}>
      <SectionOne />
 
        <SectionTwo />
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectinPic/>
        <SectionSix/>
      

      
    </div>
  );
};

export default Main;
