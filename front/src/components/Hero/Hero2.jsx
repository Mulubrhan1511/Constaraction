import React from 'react'
import { RiHeartPulseLine } from "react-icons/ri";
import img from '../../assets/hero/img.png'
const Hero2 = () => {
  return (
    <div className='hero bg-gray py-12 xl:pt-12 xl:pb-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            {/* text-img */}
            <div className='flex flex-col xl:flex-row items-center justify-between h-full'>
                {/* text */}
                <div className='hero__text xl:w-[48%] text-center xl:text-left'>
                    {/* badge*/}
                    <div className='flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px]
                    rounded-full mx-auto xl:mx-0'>
                        {/* badge icon */}
                        {/* <RiHeartPulseLine className='text-2xl text-accent' /> */}
                        {/* <div
                        className='uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]'
                        >
                            Live your life
                        </div> */}

                    </div>
                    <h1 className='h1 mb-6'>Best construction company</h1>
                    <p className='mb-[42px] md:max-w-xl'>
                    DARNA specializes in a wide range of construction projects, including residential, 
                    commercial, and industrial developments. The company is known for its commitment to quality,
                    safety, and innovation, consistently delivering projects that exceed client expectations.
                        
                    </p>

                    <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>
                        Contact us
                    </button>
                </div>
                {/* image */}
                <div className='hero__img hidden xl:flex max-w-[814px] self-end'>
                    <img src={img} alt="hero" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2