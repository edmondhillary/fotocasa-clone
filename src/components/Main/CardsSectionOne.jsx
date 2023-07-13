import React from "react";
import Card from "./Card";
import img1 from '../../assets/price.svg'
import img2 from '../../assets/guide.svg'
import img3 from '../../assets/tag.svg'
import img4 from '../../assets/calculadora.svg'
import img5 from '../../assets/hogar.svg'

const CardsSectionOne = () => {
  const cardsLabels = [
    {
      text: "Precios de tu zona",
      imgSource:
        img1,
    },
    {
        text: "Guía de barrios",
        imgSource:
         img2,
      },
      {
        text: "Valora tu casa",
        imgSource:
         img3,
      },
      {
        text: "Calcula tu hipoteca",
        imgSource:
         img4,
      },
      {
        text: " Asegura tu hogar",
        imgSource:
         img5,
      },

  ];

  return (
    <div className="card-wrapper-cards-sectionOne" >
      {cardsLabels.map((card) => (
        <span >
            
            <Card  text={card.text} imgSource={card.imgSource} />
        
        </span>
      ))}
    </div>
  );
};

export default CardsSectionOne;
