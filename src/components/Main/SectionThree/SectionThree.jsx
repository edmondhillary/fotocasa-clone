import React from "react";
import "./SectionThree.scss";
import ButtonLightblue from "../../Button/ButtonLightblue";
import Button from "../../Button/Button";
const SectionThree = () => {
  return (
    <>
    <div className='section-three-container'>
      <div className='text-container-section-three'>
        <h1
          style={{
              wordWrap: "break-word",
              flex: "1",
              fontSize: "48px",
              paddingBottom: "3rem",
            }}
            >
          Proyecto Vivienda de Fotocasa
        </h1>

        <p
          style={{
              wordWrap: "break-word",
              flex: "1",
              fontSize: "24px",
              marginRight: "3rem",
            }}
            >
          Entre todos tenemos que darle la vuelta a la situación del acceso a la
          vivienda. Por eso, lanzamos una iniciativa para ayudar a quienes más
          lo necesitan.
        </p>
        <Button
          width={"fit-content"}
          fontWeight={"600"}
          border={"1px transparent"}
          color={"#303AB2"}
          backgroundColor={"#1CDBCF"}
          className='button-lightblue-container section-three-blueButton'
          text={
              <span
              style={{
                  display: "flex",
                  borderRadius: "1rem",
                  padding: "0.5rem",
                }}
                >
              <p>Descubre el proyecto vivienda</p>
            </span>
          }
          />
      </div>
      <img
        className='img-section-three'
        src='https://frtassets.fotocasa.es/statics/img/home_house_project_campaign_image1.webp'
        alt='señora leyendo mail'
        />
    </div>
    <img style={{margin: '0 18.25rem'}} src="https://frtassets.fotocasa.es/statics/img/home_fotocasa_life_logo.svg" alt="fotoo"  width={'160px'}/>
        </>
  );
};

export default SectionThree;
