import React from "react";
import "./SubFooter.scss";
import Button from "../Button/Button";
import { DownOutlined } from "@ant-design/icons";

const SubFooter = () => {
  const ButtonLinksFooter = [
    {
      text: "©2023 Adevinta Spain S.L.",
    },
    {
      text: "Aviso Legal",
    },
    {
      text: "Protección de datos",
    },
    { text: "Política de cookies" },
  ];

  return (
    <div className='subfooter-container'>
      <div className='link-container'>
        
        {ButtonLinksFooter.map((button, index) => (
          <Button
            key={index}
            border={"0px"}
            backgroundColor={"transparent"}
            text={button.text}
            color={"#fff"}
            fontSize={"12px"}
          />
        ))}
      </div>
     

         <Button
            borderRadius='0.5rem'
            className='button-language-subfooter'
            cursor={"pointer"}
            // fontWeight='550'
            fontFamily={"Open Sans,Helvetica,sans-serif"}
            backgroundColor='transparent'
            height='2.5rem'
            border='1.5px solid #fff'
            color='#fff'
            fontSize={"0.8rem"}
            text={
                <>
              Español
                <DownOutlined  style={{ padding: "0.4rem", color: "#fff" }} />
                <span
                  style={{
                      fontFamily: "Open Sans,Helvetica,sans-serif",
                      fontWeight: "550",
                      color: "#fff",
                    }}
                    >
                  
                </span>
              </>
            }
            ></Button>
           
    </div>
  );
};

export default SubFooter;
