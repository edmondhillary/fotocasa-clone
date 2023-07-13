import React from "react";

const Card = ({ imgSource, text }) => {
  return (
    <div  style={{ padding:'0.4rem', height:'5rem',width:'100%', paddingRight:'2.5rem' }} className=' card-sectionOne' width={'3rem'}>
      <img  style={{fontSize:'10px', padding:'0.1rem'}} src={imgSource} alt={text} />
      <p style={{fontSize:'10px', padding:'0.9rem 0'}}>
        <b>{text}</b>
      </p>
    </div>
  );
};

export default Card;
