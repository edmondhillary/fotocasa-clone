import React from 'react';
import '../SectionFive/SectionFive.scss';
import './Encabezado.scss'

const Encabezado = ({backgroundColor, color, textH1, textH2, padding}) => {
    return (
        <div style={{backgroundColor, color , padding }} className='section-five-container '>
      <h2 style={{textAlign: 'center',
   alignSelf: 'center',padding: '1rem', }}>{ textH1||'Te acompañamos con servicios a tu medida'}</h2>
      <p style={{textAlign: 'center',
   alignSelf: 'center',paddingBottom: '0.41rem',lineHeight: '33.6px', fontSize:'24px', }}> {textH2 ||
        'Para ayudarte, en cada paso, a elegir bien y tomar la mejor decisión'
   }
      </p>
      <span style={{padding: '1.5rem'}}>
        <hr className='main-hr' />
      </span>
      

        
    </div>
    );
};

export default Encabezado;