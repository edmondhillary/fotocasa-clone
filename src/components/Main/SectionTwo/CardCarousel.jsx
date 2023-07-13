import React from "react";
import "./Cardrousel.scss";
import LogoAppleDownload from "../../Footer/LogoAppleDownload";
import LogoPlayStore from "../../Footer/LogoPlayStore";
import TelefonoSvg from "../../TelefonoSvg";
import EmailSvg from "../../EmailSvg";
import LikeSvg from "../../LikeSvg";

const CardCarousel = ({ data }) => (
  <div className='card-carousel-container'>
    <div className='card-carousel'>
      <img src={data.image} alt='Card Image' className='card-carousel-image' />
      <h2 className='card-carousel-price'>{data.price}</h2>
      <p className='card-carousel-direction'>{data.direction}</p>
      <p className='card-carousel-info'>
        Habitaciones: {data.rooms} | Baños: {data.bathrooms} | m²:{" "}
        {data.squareMeters}
      </p>
      <div className='card-carousel-icons' style={{ display: 'flex', justifyContent:'flex-start', alignItems:'center'}} >
        <span style={{ width: '2rem', margin:'0.1rem'}}>
          <EmailSvg fill={'#303AB2 '}width={'22px'}  />
        </span>
        <span style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '2rem', margin:'0.1rem'}}>
          <TelefonoSvg fill={'#303AB2 '} width={'22px'}  />
        </span>
        <span style={{ width: '2rem', marginBottom:'0.1rem', marginLeft:'0.4rem'}}>
          <LikeSvg fill={'#E3165B '} width={'22px'}  />
        </span>
      </div>
    </div>
  </div>
);

export default CardCarousel;
