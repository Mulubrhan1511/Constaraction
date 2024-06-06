import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";

import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Navbar2 from "./components/Navbar/Navbar2";
import Hero2 from "./components/Hero/Hero2";
import Services from "./components/Services/Services";
import Appointment from "./components/Appoitment/Appointment";
import Team from "./components/Team.jsx/Team";
import Faq from "./components/Faq/Faq";
import Department from "../src/components/Departments/Department"
import Blog from "./components/Blog/Blog";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";


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
      <Hero2 />
      <Services />
      <Appointment />
      <Testimonials />
      <Team />
      <Faq />
      <Department />
      <Blog />
      <NewsletterSection />
      
      
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;