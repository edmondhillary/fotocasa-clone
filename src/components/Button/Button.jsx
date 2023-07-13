import React from 'react';
import './Button.scss'
const Button = ({width, height, color, backgroundColor , border, text, callback , className, fontFamily, cursor, fontWeight, fontSize, borderRadius, marginRight}) => {
    return (
        <button    className={className} style={{width , height,  color, backgroundColor ,border , fontFamily, cursor, fontWeight, fontSize, borderRadius, marginRight}} onClick={callback}>
            {text}
        </button>
    );
};

export default Button;