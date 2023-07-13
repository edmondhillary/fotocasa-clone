import React from "react";
import "./SectionTwo.scss";

import MainButton from "../../MainButton/MainButton";
import Carousel from "./Carousel";
const SectionTwo = () => {
  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
        // alignItems:'center',
        flexDirection: "row",
  
      }}
    >
      <div className='main-container-section-two'>
        <h2 className='h2-sectionTwo'>
          <b>Sigue con tu última busqueda</b>
        </h2>
        <p className='h3-sectionTwo'>Viviendas en Valencia.</p>
        <span>
          <hr className='main-hr' />
        </span>
        <Carousel/>
      </div>
      <MainButton className={'main-button'} text='Mostrar todos los inmuebles'/>
    </div>
  );
};

export default SectionTwo;
