import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Column: Foodie Description */}
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-once="true"
          className="footer-column"
        >
          <h3 className="footer-title">AL Rehman Restaurant</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab
            hic accusantium omnis dolor voluptatibus illo, tempore cum tenetur.
          </p>
          <div className="footer-contact">
            <MapPin className="footer-contact-icon" />
            <span>Pakistan, Islamabad</span>
          </div>
          <div className="footer-contact">
            <Phone className="footer-contact-icon" />
            <span>033-xxx-xxx</span>
          </div>
          <div className="footer-contact">
            <Mail className="footer-contact-icon" />
            <span>info@alrehman.com</span>
          </div>
          <div className="footer-social">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-social-icon" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="footer-social-icon" />
            </a>
          </div>
        </div>

        {/* Second Column: Company */}
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-once="true"
          className="footer-column"
        >
          <h3 className="footer-subtitle">Company</h3>
          <ul className="footer-nav">
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Third Column: Contact Us */}
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          className="footer-column"
        >
          <h3 className="footer-subtitle">Contact Us</h3>
          <ul className="footer-nav">
            <li>
              <MapPin className="footer-nav-icon" /> Pakistan, Islamabad
            </li>
            <li>
              <Phone className="footer-nav-icon" /> 033-xxx-xxx
            </li>
            <li>
              <Mail className="footer-nav-icon" /> info@alrehman.com
            </li>
          </ul>
        </div>

        {/* Fourth Column: Opening Hours */}
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
          className="footer-column"
        >
          <h3 className="footer-subtitle">Opening Hours</h3>
          <ul className="footer-nav">
            <li>Mon – Sat: 9:00 AM – 11:00 PM</li>
            <li>Sunday: 12:00 PM – 2:00 AM</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>
           © {new Date().getFullYear()} All rights reserved || Created by <span>Kashif Rehman</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
