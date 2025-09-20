import React, { useEffect, useRef, useState, useCallback } from "react";
import "./whychoose.css";
import img1 from "../../assets/1..jpg";

const defaultCards = [
  { id: 1, title: "Fresh Ingredients", desc: "Daily sourced, top quality produce.", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80" },
  { id: 2, title: "Skilled Chefs", desc: "Expertly crafted authentic flavors.", img: img1 },
  { id: 3, title: "Fast Delivery", desc: "Hot meals delivered on time.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80" },
  { id: 4, title: "Great Ambience", desc: "Cozy dining experience.", img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80" },
  { id: 5, title: "Affordable Prices", desc: "Delicious meals at great value.", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80" },
];

const WhyChoose = ({ items = defaultCards, autoInterval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length]
  );

  useEffect(() => {
    timerRef.current = setInterval(() => next(), autoInterval);
    return () => clearInterval(timerRef.current);
  }, [next, autoInterval]);

  // Position + transform calculate
  const getStyle = (i) => {
    const center = index;
    const left = (index - 1 + items.length) % items.length;
    const right = (index + 1) % items.length;

    if (i === center) {
      return { transform: "translateX(0) scale(1.05)", zIndex: 3, opacity: 1 };
    }
    if (i === left) {
      return { transform: "translateX(-320px) scale(0.9)", zIndex: 2, opacity: 0.7 };
    }
    if (i === right) {
      return { transform: "translateX(320px) scale(0.9)", zIndex: 2, opacity: 0.7 };
    }
    // hidden
    return { transform: "translateX(0) scale(0.8)", zIndex: 1, opacity: 0 };
  };

  return (
    <section className="why-choose">
      <div className="wc-header">
        <h2>
          Why <span className="wc-highlight">Choose</span> Us
        </h2>
        <p>Quality food, crafted with passion and served with care.</p>
      </div>

      <div className="wc-slider">
        {items.map((card, i) => (
          <div key={card.id} className="wc-card" style={getStyle(i)}>
            <div
              className="wc-image"
              style={{ backgroundImage: `url(${card.img})` }}
            />
            <div className="wc-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="wc-controls">
        <button onClick={prev} aria-label="Previous" className="wc-btn">‹</button>
        <button onClick={next} aria-label="Next" className="wc-btn">›</button>
      </div>
    </section>
  );
};

export default WhyChoose;


