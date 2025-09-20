import React, { useState, useEffect } from "react";
import './TextCarousel.css';

const TextCarousel = ({ texts, interval = 4000, titleClassName, descriptionClassName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // start fade-out
      setFade(false);
      setTimeout(() => {
        // switch content after fade-out
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // start fade-in
      }, 600); // fade-out duration in ms
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="text-carousel">
      <h1
        className={`${titleClassName} ${fade ? 'fade-in' : 'fade-out'}`}
        dangerouslySetInnerHTML={{ __html: texts[currentIndex].title }}
      />
      <p className={`${descriptionClassName} ${fade ? 'fade-in' : 'fade-out'}`}>
        {texts[currentIndex].description}
      </p>
    </div>
  );
};

export default TextCarousel;
