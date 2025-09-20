import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Hero from './Components/Header/Hero'
import Footer from './Components/Footer/Footer'
import WhyChoose from './Components/Header/WhyChoose'
import Menu from './Components/Pages/Menu'
import Contact from './Components/Pages/Contact'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './Components/Context/ThemeContext';


const App = () => {
  React.useEffect(()=>{  
    AOS.init({
      offset:100, 
      duration:500,
      easing: "ease-in-sine",
      delay : 100,
    });
    AOS.refresh();
  },[]);
  
  const RouteContent = () => {
    const location = useLocation();
    return (
      <div className="route-screen" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<>
            <Hero/>
            <WhyChoose/>
          </>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <RouteContent />
          <Footer/>
        </div>
      </Router>
    </ThemeProvider>
  )
}  

export default App