import React from 'react';
import Button from '../Button/Button';

const MainButton = ({text, className, width}) => {
    return (
        <Button
            width={width}
            borderRadius='0.5rem'
            className={className }
            cursor={"pointer"}
            fontWeight='550'
            fontFamily={"Open Sans,Helvetica,sans-serif"}
            backgroundColor='transparent'
            height='2.5rem'
            border='1px solid #303ab2'
            color='#4d4d4d'
            fontSize={"0.8rem"}
            text={
              <>
                <span
                  style={{
                    borderRadius: "1rem",
                    fontFamily: "Open Sans,Helvetica,sans-serif",
                    fontWeight: "550",
                    color: "#303ab2",
                  }}
                >
                 {text}
                </span>
              </>
            }
          ></Button>
    );
};

export default MainButton;