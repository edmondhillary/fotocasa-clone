import React from 'react';
import './SearchInput.scss'
import ButtonLightblue from '../Button/ButtonLightblue';
const SearchInput = () => {
    return (
        <div className='inputContainer'>
          <input
        type="text"
        className="inputSinBordes placeholderEspecifico"
        placeholder="Buscar vivienda en un municipio, barrio..."
      />
            <ButtonLightblue  text={'Buscar'}/>
        </div>
    );
};

export default SearchInput; 