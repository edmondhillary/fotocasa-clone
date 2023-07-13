import React from "react";
import Logo from "./logo";
import LogoAppleDownload from "./LogoAppleDownload";
import LogoPlayStore from "./LogoPlayStore";
import LogoSocialMedia from "./LogoSocialMedia";

const TopFooter = () => {
  return (
    <div className='topFooter-container'>
      <span style={{paddingBottom:'0.3rem' }}>
        <Logo fill='#fff' />
      </span>
      <span style={{ margin: " 0 1.3rem" }}>
        <span style={{ cursor: "pointer" }}>
          <LogoAppleDownload fill='#1F2573' />
        </span>
        <span style={{ cursor: "pointer" }}>
          <LogoPlayStore fill='#1F2573' />
        </span>
      </span>
      <span style={{paddingBottom:'0.3rem' }}>
      <LogoSocialMedia />
      </span>
    </div>
  );
};

export default TopFooter;
