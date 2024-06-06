import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { RiMapPin2Fill, RiPhoneFill, RiArrowRightSLine, RiArrowLeftSLine, RiSearchLine, RiSunLine } from 'react-icons/ri';
import DarkMode from './DarkMode';
const Navbar2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='relative z-10 py-8 lg:pt-6 lg:pb-14'>
      <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0'>
        {/* logo */}
        <div className='flex justify-center lg:justify-normal'>
          <a>
            <img src={Logo} alt='Logo' />
          </a>
        </div>
        <div>
          <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
            {/* location */}
            <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
              <RiMapPin2Fill className='text-2xl text-accent' />
              <div className='text-secondary'>123 Arling, Miola, Ny</div>
            </div>
            {/* phone */}
            <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
              <RiPhoneFill className='text-2xl text-accent' />
              <div className='text-secondary'>(+123) 456 7890</div>
            </div>

            {/* dark mode */}
            <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
              <DarkMode />
              
            </div>
            <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>
              Book now
            </button>
            {/* mobile nav */}
            <nav
              className={`mnav bg-white fixed w-[300px] top-0 h-screen ${
                isNavOpen ? 'left-0' : '-left-[300px]'
              } shadow-2xl lg:hidden transition-all duration-300 z-20`}
            >
              <div
                className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all'
                onClick={handleNavToggle}
              >
                {isNavOpen ? (
                  <RiArrowLeftSLine className='mnav__close-btn-icon text-2xl text-white' />
                ) : (
                  <RiArrowRightSLine className='mnav__close-btn-icon text-2xl text-white' />
                )}
              </div>

              <div className='px-12 flex flex-col gap-y-12 h-full'>
               {/* log */}
               <a href='#'>
               <img src={Logo} alt='Logo' />
               </a>
               {/* list */}
               <ul className='flex flex-col gap-y-5'>
                <li>
                  <a
                  href='#'
                  className='text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Department
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                  href='#'
                  className='text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Contact
                  </a>
                </li>

               </ul>

               {/* form */}
               <form className='relative flex gap-x-[10px]'>
                <label htmlFor="mnav-search-input">
                <RiSearchLine className='text-2xl text-accent'/>
                </label>
                <input 
                type='text'
                id='mnav-search-input'
                placeholder='Search...'
                className='outline-none w-[160] border-b-2 focus:border-b-2
                focus:border-accent placeholder:italic'
                />

               </form>
              </div>
            </nav>

            {/* desktop nav */}
            <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16
            rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]'>
            <ul className='flex  gap-x-4'>
                <li>
                  <a
                  href='#'
                  className='border-r pr-4 text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='border-r pr-4 text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='border-r pr-4 text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Department
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='border-r pr-4 text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                  href='#'
                  className='border-r pr-4 text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                  href='#'
                  className='border-r pr-4 text-secondary hover:text-accent transition-all
                  duration-300'
                  >
                    Contact
                  </a>
                </li>

               </ul>

               <form className='relative flex gap-x-[10px]'>
                  <label
                  htmlFor='search-input'
                  className='flex justify-center items-center group'>
                    <RiSearchLine className='text-2xl text-accent' />
                  </label>
                  <input
                  type='text'
                  id='search-input'
                  placeholder='Search...'
                  className='outline-none w-[100px] focus:w-[180px] focus:border-b-2
                  focus:border-accent placeholder:italic placeholder:text-base
                  transition-all duration-150'
                  />
               </form>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
