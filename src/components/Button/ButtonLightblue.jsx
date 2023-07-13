import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import Button from "./Button";
import './Button.scss'

const ButtonLightblue = ({text, width, height}) => {
  return (
    <div>
      <Button
      width={width}
      height={height}
      fontWeight={'600'}
      border={'1px transparent'}
      color={'#303AB2'}
      backgroundColor={'#1CDBCF'}
       className="button-lightblue-container"
        text={
          <span style={{display:'flex',borderRadius:'1rem' ,padding:'0.5rem'}}>
         <SearchOutlined style={{display:'flex', justifyContent:'space-evenly', fontSize:'16px', margin:'0 0.2rem'}}/>
            
            <p>{text}</p>
          </span>
        }
      />
    </div>
  );
};

export default ButtonLightblue;
