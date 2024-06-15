import React from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar/Navbar2";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Services/Services";
import Hirarchy from "./components/Hirarchy/Hirarchy";
import ContactUs from "./components/ContactUs/ContactUs";

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
      <div className="bg-white dark:bg-blue-950 dark:text-white">
        <Navbar2 />
        <div className="">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="hirarchy">
            <Hirarchy />
          </section>
          <section id="contact">
            <ContactUs />
          </section>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;