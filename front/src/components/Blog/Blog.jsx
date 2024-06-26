import React from 'react';
import Imag1 from '../../assets/blog/img.png';
import Imag2 from '../../assets/blog/img-2.png';
import Imag3 from '../../assets/blog/img-3.png';


const Blog = () => {
  

  return (
    <div className="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left" data-aos="fade-up">
          Our Recent Projects
        </h2>
        <div
          className="flex flex-col xl:flex-row gap-y-6 xl:gap-x-8 items-center xl:justify-between mb-[50px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Imag1}
                alt="Project 1"
              />
              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Commercial
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">Commercial Office Building</h4>
              <p>
                A state-of-the-art commercial office building with modern amenities and sustainable design features.
              </p>
              <a href="" className="italic unerline text-[#4c5354]">
                Learn more
              </a>
            </div>
          </div>
          <div
            className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Imag2}
                alt="Project 2"
              />
              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Residential
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">Luxury Apartment Complex</h4>
              <p>
                A high-end residential development with modern amenities and stunning architectural design.
              </p>
              <a href="" className="italic unerline text-[#4c5354]">
                Learn more
              </a>
            </div>
          </div>
          <div
            className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="relative overflow-hidden">
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Imag3}
                alt="Project 3"
              />
              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Industrial
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">Manufacturing Facility</h4>
              <p>
                A modern and efficient manufacturing facility designed to meet the needs of the client's operations.
              </p>
              <a href="" className="italic unerline text-[#4c5354]">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
