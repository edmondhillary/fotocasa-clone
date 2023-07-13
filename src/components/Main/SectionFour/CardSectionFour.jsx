import React from "react";
import "./CardSectionFour.scss";
import { data } from "./data.js";
import FlechaSvg from "./FlechaSvg";
const CardSectionFour = () => {
  return (
    <>
      {data.map((card, index) => (
        <div key={index+1} className='card-container-section-four'>
          <img src={card.img} alt={card.title} />
          <div>
            <h4>{card.title}</h4>
            <p>
              <b>{card.question}</b>
            </p>
            <a href={"#"}>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignContent: "space-around",
                }}
              >
                {card.link} <FlechaSvg width='12px' fill={"#303ab2"} />
              </span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSectionFour;
