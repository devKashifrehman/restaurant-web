import React from "react";
import "./Order.css";
import Animation from "./Animation"; // <-- yahan apna animation button import karo

const Order = ({ isOpen, onClose, cart, subtotal }) => {
  if (!isOpen) return null;

  return (
    <div className="order-overlay">
      <div className="order-popup">
        <div className="order-header">
          <h2>Confirm Your Order</h2>
          <button className="order-close" onClick={onClose}>
            ✖
          </button>
        </div>

        <form className="order-form">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" required />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" required />
          </div>

          <div className="form-group">
            <label>Contact No</label>
            <input type="tel" placeholder="03XX-XXXXXXX" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>

          <div className="form-group">
            <label>Location</label>
            <textarea placeholder="Enter your location" rows="2" required></textarea>
          </div>

          <div className="order-summary">
            <h3>Your Items</h3>
            {cart.map((item, i) => (
              <div key={i} className="summary-item">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  Rs.{" "}
                  {parseInt(item.price.replace("Rs. ", "").trim(), 10) *
                    item.quantity}
                </span>
              </div>
            ))}
            <h4>Subtotal: Rs. {subtotal}</h4>
          </div>

          {/* 👇 Yahan button ki jagah apna Animation component */}
          <Animation />
        </form>
      </div>
    </div>
  );
};

export default Order;
