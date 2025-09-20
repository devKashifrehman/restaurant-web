import React, { useState } from "react";
import "./Booking.css";

const BookingTable = ({ isOpen, onClose, selectedItem, menuItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    items: selectedItem
      ? [{ name: selectedItem.name || selectedItem, quantity: 1 }]
      : [],
    request: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // add new item
  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: 1 }],
    });
  };

  // update item selection/quantity
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("✅ Your table has been booked successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">Book a Table</h2>

        <form onSubmit={handleSubmit} className="booking-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="guests"
            placeholder="No. of Guests"
            min="1"
            required
            onChange={handleChange}
          />
          <input type="date" name="date" required onChange={handleChange} />
          <input type="time" name="time" required onChange={handleChange} />

          {/* Dish Selection */}
          <div className="selected-items">
            <h4>Selected Item(s):</h4>
            {formData.items.map((item, i) => (
              <div key={i} className="item-row">
                <select
                  value={item.name}
                  onChange={(e) =>
                    handleItemChange(i, "name", e.target.value)
                  }
                >
                  <option value="">-- Select Dish --</option>
                  {menuItems &&
                    menuItems.map((cat, catIdx) => (
                      <optgroup key={catIdx} label={cat.category}>
                        {cat.items.map((dish, idx) => (
                          <option key={idx} value={dish.name}>
                            {dish.name} ({dish.price})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                </select>

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(i, "quantity", e.target.value)
                  }
                  style={{ width: "70px", marginLeft: "10px" }}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItem}
              className="add-item-btn"
            >
              ➕ Add More Items
            </button>
          </div>

          <textarea
            name="request"
            placeholder="Special Request (optional)"
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingTable;
