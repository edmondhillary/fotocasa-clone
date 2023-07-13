import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CardCarousel from './CardCarousel';
import { cardData } from './CardData';
  
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reachedLeftLimit, setReachedLeftLimit] = useState(true);
  const [reachedRightLimit, setReachedRightLimit] = useState(false);

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
    setReachedRightLimit(false);
    if (currentIndex - 1 === 0) {
      setReachedLeftLimit(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setReachedLeftLimit(false);
    if (currentIndex + 1 === cardData.length - 4) {
      setReachedRightLimit(true);
    }
  };

  return (
    <div className="carousel">
      <button
        className={`carousel-button prev ${reachedLeftLimit ? 'disabled' : ''}`}
        onClick={handlePrev}
        disabled={reachedLeftLimit}
      >
        <LeftOutlined style={{fontSize:'14px'}} />
      </button>
      <div className="carousel-content">
        {cardData.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <CardCarousel key={index} data={card} />
        ))}
      </div>
      <button
        className={`carousel-button next ${reachedRightLimit ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={reachedRightLimit}
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default Carousel;
