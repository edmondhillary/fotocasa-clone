import React from "react";
import "./SectionFive.scss";
import Article from "./Article";


const SectionFive = () => {
  return (
    <div style={{marginBottom:'0'}} className='section-five-container'>
      <h2 style={{textAlign: 'center',
   alignSelf: 'center',padding: '1rem'}}>Te acompañamos con servicios a tu medida</h2>
      <p style={{textAlign: 'center',
   alignSelf: 'center',paddingBottom: '0.41rem',lineHeight: '33.6px', fontSize:'24px'}}>
        Para ayudarte, en cada paso, a elegir bien y tomar la mejor decisión
      </p>
      <span style={{padding: '1.5rem'}}>
        <hr className='main-hr' />
      </span>
      <Article />
    </div>
  );
};

export default SectionFive;
