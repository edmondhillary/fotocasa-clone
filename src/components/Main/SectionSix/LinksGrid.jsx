import React from "react";
import "./LinksGrid.scss";

const LinksGrid = () => {
  const links = [
    "Pisos de bancos",
    "Casas en venta",
    "Pisos en venta",
    "Terrenos en venta",
    "Pisos y casas baratas",
    "Chalets en venta",
    "Pisos reformados",
    "Obra nueva",
    "Apartamentos en venta",
    "Locales en venta",
    "Casas con piscina en venta",
    "Casas de lujo en venta",
    "Pisos de alquiler",
    "Casas en alquiler",
    "Alquiler con opción a compra",
    "Pisos en alquiler baratos",
    "Apartamentos en alquiler",
    "Alquiler casa rural",
    "Chalets en alquiler",
    "Estudios en alquiler",
    "Alquiler habitación",
    "Alquiler plaza de garaje",
    "Venta de pisos en Madrid capital",
    "Obra nueva Madrid",
    "Obra nueva Barcelona",
    "Pisos en venta Barcelona capital",
    "Pisos en venta en Valencia",
    "Pisos en venta en Zaragoza capital",
    "Pisos en venta en Gijón",
    "Pisos en venta en Málaga",
    "Pisos en venta en Santander",
    "Pisos en venta en Coruña",
    "Pisos en venta en Sevilla capital",
    "Pisos en venta en Valladolid",
    "Pisos en venta en Bilbao",
    "Pisos en venta en Fuenlabrada",
    "Pisos en venta en Móstoles",
    "Pisos en venta en Pamplona",
    "Pisos en venta en Alcalá de Henares",
    "Pisos en venta en Granada capital",
    "Pisos en venta en Oviedo",
    "Pisos en venta en Vigo",
    "Pisos en venta en Logroño",
    "Pisos en venta en Sabadell",
    "Pisos alquiler Madrid",
    "Pisos alquiler Madrid baratos",
    "Pisos alquiler Barcelona",
    "Pisos alquiler Barcelona baratos",
    "Pisos alquiler Valencia",
    "Pisos alquiler Zaragoza",
    "Pisos alquiler Sevilla",
    "Pisos alquiler Alicante",
    "Pisos alquiler Málaga",
    "Pisos alquiler Coruña",
    "Pisos alquiler Vigo",
    "Pisos alquiler Granada",
    "Pisos alquiler Pamplona",
    "Pisos alquiler Valladolid",
    "Pisos alquiler Murcia",
    "Pisos alquiler Santiago de Compostela",
    "Pisos alquiler Bilbao",
    "Pisos alquiler Gijón",
    "Pisos alquiler Vitoria",
    "Pisos alquiler Terrassa",
    "Pisos alquiler Tarragona",
    "Casas de campo en alquiler",
    "Pisos alquiler Martorell",
    "Pisos alquiler Lugo",
    "Pisos en venta en Terrassa",
    "Alquiler oficinas",
    "Terrenos en venta Barcelona",
    "Casas con piscina privada",
    "Casas prefabricadas baratas",
    "Casas pasivas",
    "Casas en la playa",
    "Casas de pueblo",
    "Viviendas de particulares España",
    "Viviendas de particulares Madrid",
    "Viviendas de particulares Barcelona",
  ];

  return (
    
    <div style={{margin: '0 17.3rem', marginBottom:'3rem'}}>
      <div className='links-grid'>
        {links.map((link) => (
          <a href='#' key={link} className='link'>
            {link}
          </a>
        ))}
      </div>
      </div>
    
  );
};

export default LinksGrid;
