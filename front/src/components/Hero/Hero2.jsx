import React from 'react'
import { RiHeartPulseLine } from "react-icons/ri";

const Hero2 = () => {
  return (
    <div className='hero py-12 xl:pt-12 xl:pb-0 overflow-hidden flex justify-center items-center'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-center h-full'>
          <div className='hero__text xl:w-[48%] text-center'>
            <div className="flex flex-col items-center">
              <h1 className='text-3xl font-bold mb-6 text-center xl:text-left'>DARNA Construction and Business PLC</h1>
              <p className='mb-[42px] md:max-w-xl p-4 text-gold/85 bg-transparentWhite-35 items-center justify-center rounded-md text-center'>
                DARNA specializes in a wide range of construction projects, including residential, 
                commercial, and industrial developments. The company is known for its commitment to quality,
                safety, and innovation, consistently delivering projects that exceed client expectations.
              </p>
            </div>
            <div className="flex justify-center">
              <button className='btn btn-lg btn-accent'>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2