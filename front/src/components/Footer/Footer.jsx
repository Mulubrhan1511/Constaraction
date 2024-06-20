import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Banner from "../../assets/website/footer-pattern.jpg";
import footerLogo from "../../assets/logo.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};



const Footer = () => {
  return (
    <div className="text-white bg-accent-secondary">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              DARNA Construction and Business PLC
            </h1>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                 
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="border-b-red-500">OPENING HOURS</li>
                  <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                  <li>Saturday: 8:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Address: Kedamay Weyane, Around Romanat Square Near Zemarias Hotel, Mekelle City, Tigray, Ethiopia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>(+251) 91 170 3505</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
        © 2024 Copyright:
        <a href="https://harifsite.com/" target="_blank" rel="noopener noreferrer">Harif</a>
      </div>
    </div>
  );
};

export default Footer;