import React, { useEffect } from 'react';
import { MdConstruction, MdHome, MdBusiness, MdBuild, MdVerified } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='pb-14 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen'>
      <div className='services'>
        <div 
          className='bg-blue-600 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-0 relative h-[368px] flex items-center xl:items-start'
          data-aos="fade-down"
        >
          <div className='container mx-auto p-0'>
            <div className='services__top flex items-center flex-col xl:flex-row xl:mb-[60px] relative z-10'>
              <h2 className='text-4xl md:text-5xl font-extrabold text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left'>
                Our Services
              </h2>
              <p className='text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none'>
                DARNA Construction and Business PLC offers a comprehensive range of construction services, catering to the needs of residential, commercial, and industrial clients across East Africa.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto mt-8 xl:-mt-[144px] relative p-0'>
          <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
            <div 
              className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'
              data-aos="fade-up"
            >
              <div className='mb-[15px]'>
                <MdHome size={50} className='text-secondary' />
              </div>
              <h3 className='text-2xl font-bold text-secondary mb-[10px]'>Residential Construction</h3>
              <p className='text-gray-700 font-light leading-normal max-w-[300px]'>
                Building single-family homes, multi-family developments, townhouses, and other residential projects.
              </p>
            </div>
            <div 
              className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'
              data-aos="fade-up"
            >
              <div className='mb-[15px]'>
                <MdBusiness size={50} className='text-secondary' />
              </div>
              <h3 className='text-2xl font-bold text-secondary mb-[10px]'>Commercial Construction</h3>
              <p className='text-gray-700 font-light leading-normal max-w-[300px]'>
                Constructing office buildings, retail spaces, restaurants, and warehouses tailored to business needs.
              </p>
            </div>
            <div 
              className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'
              data-aos="fade-up"
            >
              <div className='mb-[15px]'>
                <MdBuild size={50} className='text-secondary' />
              </div>
              <h3 className='text-2xl font-bold text-secondary mb-[10px]'>Industrial Construction</h3>
              <p className='text-gray-700 font-light leading-normal max-w-[300px]'>
                Developing manufacturing facilities, distribution centers, and other industrial structures.
              </p>
            </div>
            <div 
              className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'
              data-aos="fade-up"
            >
              <div className='mb-[15px]'>
                <MdVerified size={50} className='text-secondary' />
              </div>
              <h3 className='text-2xl font-bold text-secondary mb-[10px]'>Infrastructure Development</h3>
              <p className='text-gray-700 font-light leading-normal max-w-[300px]'>
                Handling roads, highways, dams, and other critical infrastructure projects, ensuring quality and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;