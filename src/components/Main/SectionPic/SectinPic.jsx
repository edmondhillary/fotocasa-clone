import React from 'react';
import imgUp from '../../../assets/imgUp.png';
import imgDown from '../../../assets/imgDown.png';
const SectinPic = () => {
    return (
        <div >
            <img src={imgUp} alt="cositas" width={'100%'} style={{marginBottom:'-0.3rem'}}/>
            <img src={imgDown} alt="cositas abajo" width={'100%'} />
        </div>
    );
};

export default SectinPic;