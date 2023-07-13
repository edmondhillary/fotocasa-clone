import React from "react";
import Button from "../Button/Button";
import {
  BellOutlined,
  HeartOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import MainButton from "../MainButton/MainButton";
const Header = () => {
  const buttonList = [
    { text: <b>Comprar</b> },
    { text: <b>Alquilar</b> },
    { text: <b>Actualidad</b> },
    { text: <b>Guía de barrios</b> },
    { text: <b>Hipotecas</b> },
  ];

  return (
    <div className='header-container'>
      <Button
        className='button-header-drawer'
        cursor={"pointer"}
        fontFamily={"Open Sans,Helvetica,sans-serif"}
        backgroundColor='transparent'
        width='2.5rem'
        height='2rem'
        border='1px solid transparent '
        color='darkblue'
        text={<MenuOutlined />}
        callback={() => console.log("soy boton")}
      />
      <img
        width={140}
        height={25}
        src='https://frtassets.fotocasa.es/statics/img/fotocasa_logo.svg'
      />
      <span
        style={{
          marginLeft: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {buttonList.map((button, index) => (
          <Button
            key={index}
            className='button-list-header menu'
            cursor={"pointer"}
            fontWeight='550'
            fontFamily={"Open Sans,Helvetica,sans-serif"}
            backgroundColor='transparent'
            height='2.5rem'
            border='1px solid transparent'
            color='#4d4d4d'
            fontSize={"0.8rem"}
            text={button.text}
            callback={() => console.log("soy boton")}
          />
        ))}
      </span>
      <div
       style={{
        position: "absolute",
        // padding:'8px',
        // top: '0px',
        right: '8px',
        display: "flex",
        alignItems: "end",
      }}
      >
        <Button
          className='button-list-header'
          cursor={"pointer"}
          fontWeight='550'
          fontFamily={"Open Sans,Helvetica,sans-serif"}
          backgroundColor='transparent'
          height='2.5rem'
          border='1px solid transparent'
          color='#4d4d4d'
          fontSize={"0.8rem"}
          text={
            <>
              <BellOutlined style={{ padding: "0.4rem", color: "#4d4d4d" }} />
              <span
                style={{
                  fontFamily: "Open Sans,Helvetica,sans-serif",
                  fontWeight: "550",
                  color: "#4d4d4d",
                }}
              >
                Mis alertas
              </span>
            </>
          }
        ></Button>
        <span>
          <Button
            className='button-list-header'
            cursor={"pointer"}
            fontWeight='550'
            fontFamily={"Open Sans,Helvetica,sans-serif"}
            backgroundColor='transparent'
            height='2.5rem'
            border='1px solid transparent'
            color='#4d4d4d'
            fontSize={"0.8rem"}
            text={
              <>
                <HeartOutlined
                  style={{ padding: "0.4rem", color: "#4d4d4d" }}
                />
                <span
                  style={{
                    fontFamily: "Open Sans,Helvetica,sans-serif",
                    fontWeight: "550",
                    color: "#4d4d4d",
                  }}
                >
                  Mis listas
                </span>
              </>
            }
          ></Button>
          <span style={{ margin: "0.4rem" }}></span>
          <MainButton text="Publicar anuncio gratis " className={"buttons-publish-header"}/>
          <span style={{ margin: "0.4rem" }}></span>
          <Button
            borderRadius='0.5rem'
            className='button-access-header'
            cursor={"pointer"}
            fontWeight='550'
            fontFamily={"Open Sans,Helvetica,sans-serif"}
            backgroundColor='#303ab2'
            height='2.5rem'
            border='1px solid transparent'
            color='#fff'
            fontSize={"0.8rem"}
            text={
              <>
                <UserOutlined style={{ padding: "0.4rem", color: "#fff" }} />
                <span
                  style={{
                    fontFamily: "Open Sans,Helvetica,sans-serif",
                    fontWeight: "550",
                    color: "#fff",
                  }}
                >
                  Acceder
                </span>
              </>
            }
          ></Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
