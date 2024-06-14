import React from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar/Navbar2";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const App = () => {
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
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <Navbar2 />
        <div className="">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        </div>

        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;