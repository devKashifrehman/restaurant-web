import React, { useEffect, useState } from "react";
import BookingTable from "../BookingTable/Booking";
import OrderPopup from "../BookingTable/Order"; // 🔹 Import new popup
import "./menu.css";

import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpeg';
import img10 from '../../assets/10.jpg';

const Menu = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // 👇 Book Table States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // 👇 Order Popup State
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart with default quantity
  const addToCart = (item) => {
    const placeholder =
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=60";
    const withImage = { ...item, img: item.img || placeholder };

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === withImage.name
      );

      if (existingIndex >= 0) {
        return prevCart; // Agar already hai -> sirf dropdown se change hoga
      } else {
        return [...prevCart, { ...withImage, quantity: 1 }];
      }
    });

    setIsCartOpen(true);
  };

  // ✅ Quantity change from dropdown
  const updateQuantity = (index, newQty) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity = parseInt(newQty, 10);
      return updatedCart;
    });
  };

  // ✅ Remove item completely
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  // ✅ Subtotal calculation
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace("Rs. ", "").trim(), 10) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  // ✅ Total Items (sum of all quantities)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // 👇 Book Table Click
  const bookTable = (item = null) => {
    setSelectedItem(item);
    setIsBookingOpen(true);
  };

  // 👇 Menu Items Data
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        {
          name: "Chicken Tikka",
          price: "Rs. 450",
          description:
            "Tender chicken marinated in spices and grilled to perfection",
          img: img4,
        },
        {
          name: "Seekh Kebab",
          price: "Rs. 380",
          description: "Minced lamb with herbs and spices, grilled on skewers",
          img: img7,
        },
        {
          name: "Cheese Burger",
          price: "Rs. 450",
          description:
            "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce in a soft bun",
          img: img8,
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Biryani",
          price: "Rs. 650",
          description: "Fragrant basmati rice with tender meat and spices",
          img: img2,
        },
        {
          name: "Karahi",
          price: "Rs. 750",
          description:
            "Spicy curry cooked in traditional wok with fresh herbs",
          img: img5,
        },
        {
          name: "Chicken Qorma",
          price: "Rs. 550",
          description:
            "Traditional chicken curry slow-cooked with yogurt, onions, and aromatic spices",
          img: img9,
        },
      ],
    },
    {
      category: "Platter",
      items: [
        {
          name: "BBQ Platter",
          price: "Rs. 1200",
          description:
            "A mix of seekh kebab, tikka, malai boti served with naan",
          img: img3,
        },
        {
          name: "Family Platter",
          price: "Rs. 2200",
          description:
            "Large platter with biryani, karahi, kebabs, raita, and salad",
          img: img6,
        },
        {
          name: "Fast Food Platter",
          price: "Rs. 950",
          description:
            "A combo of fried chicken, fries, mini burgers, and nuggets served with dips",
          img: img10,
        },
      ],
    },
  ];

  return (
    <div className="menu-page">
      <div className="menu-container">
        {/* Header */}
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>
            Discover our authentic Pakistani cuisine with traditional flavors
            and modern presentation
          </p>
        </div>

        {/* Cart Icon */}
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          🛒 <span>{totalItems}</span>
        </div>

        {/* Cart Overlay */}
        <div
          className={`cart-overlay ${isCartOpen ? "show" : ""}`}
          onClick={() => setIsCartOpen(false)}
        ></div>

        {/* Cart Sidebar */}
        <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button
              className="cart-close-btn"
              onClick={() => setIsCartOpen(false)}
            >
              ✖
            </button>
          </div>

          <div className="cart-body">
            {cart.length === 0 ? (
              <p className="empty">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.img} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>
                  <div className="cart-actions">
                    {/* ✅ Quantity Dropdown */}
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, e.target.value)}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(index)}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-footer">
            {cart.length > 0 && (
              <>
                <h4>Total Items: {totalItems}</h4>
                <h4>Subtotal: Rs. {calculateSubtotal()}</h4>
                <button
                  className="order-btn"
                  onClick={() => setIsOrderOpen(true)} // 🔹 Open order popup
                >
                  Confirm Order
                </button>
                <button
                  className="add-more-btn"
                  onClick={() => setIsCartOpen(false)}
                >
                  Want to add more items?
                </button>
              </>
            )}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="menu-categories">
          {menuItems.map((category, i) => (
            <div key={i} className="menu-category">
              <h2>{category.category}</h2>
              <div className="menu-grid">
                {category.items.map((item, j) => (
                  <div key={j} className="menu-card">
                    <img src={item.img} alt={item.name} className="menu-img" />
                    <div className="menu-card-top">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="desc">{item.description}</p>
                    <div className="menu-actions">
                      <button
                        className="menu-btn add"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="menu-btn book"
                        onClick={() => bookTable(item)}
                      >
                        Book Table
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Popup */}
        <BookingTable
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          selectedItem={selectedItem}
          menuItems={menuItems}
        />

        {/* ✅ Order Popup */}
        <OrderPopup
          isOpen={isOrderOpen}
          onClose={() => setIsOrderOpen(false)}
          cart={cart}
          subtotal={calculateSubtotal()}
        />
      </div>
    </div>
  );
};

export default Menu;
