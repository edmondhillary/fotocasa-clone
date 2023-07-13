import React from "react";

const MainFooter = () => {
  const footerColumns = [
    {
      title: "Sobre Fotocasa",
      links: [
        "¿Quiénes somos?",
        "Mapa web",
        "Sala de prensa",
        "Trabaja con nosotros",
        "Preguntas frecuentes - FAQ",
        "Política de privacidad",
        "Gestionar cookies",
      ],
    },
    {
      title: "Encuentra en Fotocasa",
      links: [
        "Pisos de segunda mano",
        "Pisos de obra nueva",
        "Alquiler de pisos",
        "Índice de precios",
        "Guía de barrios",
        "Buscador de Inmobiliarias",
        "Tasación online",
        "Comparador de hipotecas",
        "Actualidad y noticias vivienda",
        "Fotocasa Seguros",
      ],
    },
    {
      title: "Para profesionales",
      links: [
        "Anúnciate",
        "Contacta con Fotocasa",
        "Fotocasa Academy",
        "Blog para profesionales",
      ],
    },
    {
      title: "Entra en tu cuenta",
      links: [
        "Publicadores particulares",
        "Publica tu anuncio",
        "Publica tu anuncio de alquiler",
        "Publica tu anuncio de venta",
        "Catálogo de productos",
      ],
    },
  ];
  const familyAdventia = [
    {
      text: "habitaclia",
    },
    {
      text: "Infojobs",
    },
    {
      text: "coches.net",
    },
    {
      text: "motos.net",
    },
    {
      text: "Milanuncios",
    },
  ];
  return (
    <footer className='main-footer'>
      <div className='main-footer-container'>
        {footerColumns.map((column, index) => (
          <div className='main-footer-column' key={index}>
            <h3 style={{ fontSize:'12px'}}>{column.title}</h3>
            {column.links.map((link, index) => (
              <p style={{ fontSize:'10px',padding: "0.21rem 0" }} key={index}>
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className='adventia-links'>
        <div className='adventia-links-column'>
          <span style={{ fontSize:'10px', letterSpacing:'0.02rem'}}>
            Fotocasa es de la<b> familia Adevinta</b>:
          </span>

          <div className='adventia-links-column'>
            {familyAdventia.map((link, index) => (
         
                <span
                  className='responsives-links-footer'
                  key={index}
                  style={{ margin: "0 1rem ", fontSize:'10px',letterSpacing:'0.02rem' }}
                >
                  {link.text}
                </span>
             
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
