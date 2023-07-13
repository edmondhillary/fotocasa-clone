import React from "react";
import "./Footer.scss";
import SubFooter from "../SubFooter/SubFooter";
import MainFooter from "./MainFooter";
import TopFooter from "./TopFooter";
const Footer = () => {
  return (
    <>
      <div className='footer-container '>
        <TopFooter/>
        <MainFooter />
        <SubFooter />
      </div>
    </>
  );
};

export default Footer;
