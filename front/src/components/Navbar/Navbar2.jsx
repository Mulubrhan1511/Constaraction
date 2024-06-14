import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiMapPin2Fill, RiPhoneFill, RiArrowRightSLine, RiArrowLeftSLine, RiSearchLine } from 'react-icons/ri';
import DarkMode from './DarkMode';
import Logo from '../../assets/logo.svg';

const Navbar2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setPaddingBottom(20); // Set the desired padding value here
    setTimeout(() => setPaddingBottom(0), 500); // Reset padding after 500ms
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative lg:sticky top-0 z-10 py-8 lg:pt-6   ${isScrolled ? '' : ''}`}>
      {!isScrolled && (
        <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between '>
          {/* logo */}
          <div className='flex justify-center lg:justify-normal'>
            <Link to="#home" onClick={() => onUpdateActiveLink('home')}>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
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
              {/* mobile nav */}
              
            </div>
          </div>
        </div>
      )}
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
                {/* logo */}
                <Link to="/" onClick={handleNavToggle}>
                  <img src={Logo} alt='Logo' />
                </Link>
                {/* list */}
                <ul className='flex flex-col gap-y-5'>
                  <li>
                    <Link
                      to="/"
                      className='text-secondary hover:text-accent transition-all duration-300'
                      onClick={() => {
                        onUpdateActiveLink('home');
                        handleNavToggle();
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className='text-secondary hover:text-accent transition-all duration-300'
                      onClick={() => {
                        onUpdateActiveLink('about');
                        handleNavToggle();
                      }}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className='text-secondary hover:text-accent transition-all duration-300'
                      onClick={() => {
                        onUpdateActiveLink('services');
                        handleNavToggle();
                      }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className='text-secondary hover:text-accent transition-all duration-300'
                      onClick={() => {
                        onUpdateActiveLink('blog');
                        handleNavToggle();
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className='text-secondary hover:text-accent transition-all duration-300'
                      onClick={() => {
                        onUpdateActiveLink('contact');
                        handleNavToggle();
                      }}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>

                {/* form */}
                <form className='relative flex gap-x-[10px]'>
                  <label htmlFor="mnav-search-input">
                    <RiSearchLine className='text-2xl text-accent' />
                  </label>
                  <input 
                    type='text'
                    id='mnav-search-input'
                    placeholder='Search...'
                    className='outline-none w-[160] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic'
                  />
                </form>
              </div>
            </nav>
      {/* desktop nav */}
      <nav className={`bg-white w-full left-0 shadow-custom1 h-16 rounded-[10px] ${isScrolled ? 'fixed top-0 z-50' : 'lg:absolute lg:-bottom-[86px]'} lg:flex lg:items-center lg:justify-between lg:px-[50px] hidden lg:block`} style={{ paddingBottom: `${paddingBottom}px` }}>
        <ul className='flex gap-x-4'>
          <li>
            <Link
              smooth to="#home"
              className={`border-r pr-4 text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth to="#about"
              className={`border-r pr-4 text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth to="#services"
              className={`border-r pr-4 text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('services')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`border-r pr-4 text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'blog' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('blog')}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`border-r pr-4 text-secondary hover:text-accent transition-all duration-300 ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>

        <form className='relative flex gap-x-[10px]'>
          <label htmlFor='search-input' className='flex justify-center items-center group'>
            <RiSearchLine className='text-2xl text-accent' />
          </label>
          <input
            type='text'
            id='search-input'
            placeholder='Search...'
            className='outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150'
          />
        </form>
      </nav>
    </div>
  );
};

export default Navbar2;