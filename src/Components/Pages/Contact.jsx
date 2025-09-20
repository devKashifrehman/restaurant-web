import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  React.useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header" data-aos="fade-up">
          <h1>Contact Us</h1>
          <p>Get in touch with us for reservations, inquiries, or just to say hello!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <div className="section-intro">
              <h2>Get in Touch</h2>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrap"><FaMapMarkerAlt /></div>
                <div>
                  <h3>Address</h3>
                  <p>123 Main Street, Karachi<br/>Pakistan 75000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap"><FaPhone /></div>
                <div>
                  <h3>Phone</h3>
                  <p>+92 300 1234567<br/>+92 21 1234567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap"><FaEnvelope /></div>
                <div>
                  <h3>Email</h3>
                  <p>info@alrehmanrestaurant.com<br/>reservations@alrehmanrestaurant.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap"><FaClock /></div>
                <div>
                  <h3>Opening Hours</h3>
                  <p>Mon - Sun: 11:00 AM - 11:00 PM<br/>Friday Prayer: 1:00 PM - 2:00 PM (Closed)</p>
                </div>
              </div>
            </div>

            <div className="social">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="fb"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ig"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="tw"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-left">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+92 300 1234567" />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help you..." />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map" data-aos="fade-up">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <p>Interactive map would be embedded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
