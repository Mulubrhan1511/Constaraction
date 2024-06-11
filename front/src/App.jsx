import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Navbar2 from "./components/Navbar/Navbar2";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar2 />
        <div>
          <BrowserRouter>
            <Routes>
             
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
             
            </Routes>
          </BrowserRouter>
        </div>
      
      
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;