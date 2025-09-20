import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import './index.css';

// Mock components for demonstration
const Home = () => <div style={{ padding: '100px 20px 20px', minHeight: '100vh' }}>
  <h1>Home Page</h1>
  <p>This is the home page content. The navbar is fixed at the top.</p>
</div>;

const Menu = () => <div style={{ padding: '100px 20px 20px', minHeight: '100vh' }}>
  <h1>Menu Page</h1>
  <p>This is the menu page content.</p>
</div>;

const Contact = () => <div style={{ padding: '100px 20px 20px', minHeight: '100vh' }}>
  <h1>Contact Page</h1>
  <p>This is the contact page content.</p>
</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;