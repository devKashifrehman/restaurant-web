import React, { useState, useEffect } from 'react';
import TextCarousel from './Textcarousel';
import BookingTable from '../BookingTable/Booking'; // ✅ same component jese Menu.jsx me import hai
import './hero.css';

const mainDish1 = "https://images.unsplash.com/photo-1599682303048-8689078dd687?...";
const sideDish2 = "https://images.unsplash.com/photo-1619166398167-e54f423b7b90?...";
const sideDish3 = "https://images.unsplash.com/photo-1664553118375-8dcc9eda394b?...";

const Hero = () => {
  const [currentDish, setCurrentDish] = useState(mainDish1);
  const [isDark, setIsDark] = useState(false);

  // 👇 Booking state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const carouselTexts = [
    {
      title: 'Welcome to the <span class="highlight">AL Rehman</span> Restaurant',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit.'
    },
    {
      title: 'Discover <span class="highlight">Authentic</span> Flavors',
      description: 'Experience the rich taste of traditional cuisine crafted with love and the finest ingredients.'
    },
    {
      title: 'Fresh <span class="highlight">Ingredients</span> Daily',
      description: 'We source the freshest ingredients every day to ensure the highest quality in every dish we serve.'
    },
    {
      title: 'Fast <span class="highlight">Delivery</span> Service',
      description: 'Get your favorite meals delivered hot and fresh to your doorstep in just 30 minutes or less.'
    }
  ];

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // 👇 Book Table handler
  const bookTable = () => {
    setSelectedItem(null); // Hero se generic booking hoga
    setIsBookingOpen(true);
  };

  return (
    <section className={`hero-section ${isDark ? 'dark' : ''}`}>
      <div className="hero-bg-shape"></div>

      <div data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="hero-content">
        <TextCarousel 
          texts={carouselTexts}
          interval={4000}
          titleClassName="hero-title"
          descriptionClassName="hero-description"
        />
        <button className="hero-cta-btn" onClick={bookTable}>
          Book Table
        </button>
      </div>

      <div data-aos="fade-left" data-aos-duration="500" data-aos-once="true" className="hero-visual">
        <div className="hero-main-dish">
          <img src={currentDish} alt="Main Dish" />
        </div>
        <div className="hero-side-dishes">
          {[mainDish1, sideDish2, sideDish3].map((dish, idx) => (
            <img
              key={idx}
              src={dish}
              alt={`Dish ${idx + 1}`}
              className={`hero-side-dish ${currentDish === dish ? 'active' : ''}`}
              onClick={() => setCurrentDish(dish)}
            />
          ))}
        </div>
      </div>

      {/* 👇 Booking Popup */}
      <BookingTable
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedItem={selectedItem}
        menuItems={[]} // Hero me sirf empty bhejenge, Menu se full list jati hai
      />
    </section>
  );
};

export default Hero;
