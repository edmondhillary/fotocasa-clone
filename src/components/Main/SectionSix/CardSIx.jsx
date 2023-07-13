import React from "react";
import './CardSix.scss'
import FlechaSvg from "../SectionFour/FlechaSvg";
import { dataSectionSix } from "./dataSix";


const CardSIx = () => {
    return (
      <div style={{display:'flex', flexDirection:'row', margin:'1rem 18rem',}}>
        {dataSectionSix.map((item, index) => (
          <div className='card-sectionSix-container' key={index}>
            <h2  style={{
                 marginBottom:'0.47rem'
                }}>{item.textH2}</h2>
            <p style={{
                 marginBottom:'0.47rem',fontWeight:'100'
                }}>{item.paragraph}</p>
            <a href="#">
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignContent: "space-around",
                }}
              >
                Ver inmuebles a la venta
                <FlechaSvg width='12px' fill={"#303ab2"} />
              </span>
            </a>
          </div>
        ))}
      </div>
    );
  };
  

export default CardSIx;
