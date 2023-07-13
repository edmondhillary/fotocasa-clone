import React from "react";
import "./SectionFour.scss";
import MainButton from "../../MainButton/MainButton";
import CardSectionFour from "./CardSectionFour";

const SectionFour = () => {
  return (
    <div className='section-four-container'>
      <div className="container-button-text">
        <div className="wrap-text-container">
          <h2>Te acompañamos para encontrar tu casa de alquiler o compra</h2>
          <p style={{textAlign:'left'}}>Toda la ayuda que necesitas con consejos y herramientas</p>
        </div>
        <div>
          <MainButton className={'button-main-section-four'} text={"Mostrar más actualidad"} />
        </div>
      </div>
      <hr className='main-hr' />
      <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
        <CardSectionFour/>
      </div>
    </div>
  );
};

export default SectionFour;
