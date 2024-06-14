import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiMapPin2Fill, RiPhoneFill, RiArrowRightSLine, RiArrowLeftSLine, RiSearchLine } from 'react-icons/ri';
import DarkMode from './DarkMode';
import Logo from '../../assets/logo.svg';

const Navbar2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative z-10 py-8 lg:pt-6 lg:pb-14 ${scrolled ? 'header-scrolled' : ''}`}>
      <div className={`container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0`}>
        {/* header */}
        <div className='header flex justify-between items-center w-full lg:w-auto'>
          <div className='flex justify-center lg:justify-normal'>
            <Link to="#home" onClick={() => onUpdateActiveLink('home')}>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div className='flex items-center gap-x-4 lg:gap-x-10'>
            {/* location */}
            <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
              <RiMapPin2Fill className='text-2xl text-accent' />
              <div className='text-secondary'>Adis Ababa, Ethiopia</div>
            </div>
            {/* phone */}
            <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
              <RiPhoneFill className='text-2xl text-accent' />
              <div className='text-secondary'>(+251) 91 170 3505</div>
            </div>
            {/* dark mode */}
            <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
              <DarkMode />
            </div>
            <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>
              Call now
            </button>
          </div>
        </div>
        {/* navbar */}
        <nav className={`navbar bg-white w-full ${scrolled ? 'fixed top-0 left-0 shadow-lg' : 'relative'} transition-all duration-300 z-20`}>
          <ul className='flex justify-between items-center px-4 lg:px-8'>
            <li>
              <Link
                smooth to="#home"
                className={`text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                smooth to="#about"
                className={`text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href='#'
                className='text-secondary hover:text-accent transition-all duration-300'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-secondary hover:text-accent transition-all duration-300'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-secondary hover:text-accent transition-all duration-300'
              >
                Contact
              </a>
            </li>
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
                className='outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150'
              />
            </form>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;