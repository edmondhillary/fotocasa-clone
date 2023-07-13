import React from 'react';
import './SectionSix.scss'
import Encabezado from '../Encabezado/Encabezado';
import CardSIx from './CardSIx';
import SectionSixFooter from './SectionSixFooter';
import LinksGrid from './LinksGrid';
const SectionSix = () => {
    return (
        <div className='section-six-container'>
            <Encabezado backgroundColor={'transparent'} textH1={'¿Todavía tienes dudas? Encuentra lo que estás buscando'} textH2={'Encuentra tu casa de alquiler o compra entre más de 1.5M de inmuebles'} padding={'0rem'}/>
            <CardSIx/>
            <h4 style={{margin:'0rem 18rem', marginTop:'2.7rem'}}>Lo más buscado en venta de inmuebles </h4>
            <SectionSixFooter/>
            <LinksGrid/>
        </div>
    );
};

export default SectionSix;