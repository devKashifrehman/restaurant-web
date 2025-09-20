import React, { useState } from "react";
import "./Animation.css";
import vid1 from "../../assets/vid1.mp4";

const Animation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
    setIsCompleted(false);
  };
 
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsCompleted(true);
  };

  return (
    <button 
      type="button"  // yahan add karo
      className="order-btn"
      onClick={!isPlaying && !isCompleted ? handleClick : undefined}
    >
      {!isPlaying && !isCompleted && "Order Now"}

      {isPlaying && (
        <video
          src={vid1}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="order-video"
        />
      )}

      {isCompleted && (
        <span className="order-success">
          ✅ Thanks for placing your order
        </span>
      )}
    </button>
  );
};

export default Animation;
// is code mein ek button hai jo click karne par ek animation video play karta hai.
// Video khatam hone par button ek success message dikhata hai.