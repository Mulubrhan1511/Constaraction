import React from 'react'
import { IoCall } from "react-icons/io5";
import { RiMailFill, RiMapPin2Fill } from "react-icons/ri";
import fb from "../../assets/team/fb.png";
import in1 from "../../assets/team/in.png";
import s from "../../assets/team/s.png";
import tw from "../../assets/team/tw.png";
import { Button } from 'react-bootstrap';


const ContactUs = () => {
  return (
    <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white'>
            <div className='flex flex-col space-y-8 justify-between'>
                <div>
                    <h1 className='font-bold text-4xl tracking-wide'>
                        Contact us
                    </h1>
                    <p className='pt-2 text-cyan-100 text-sm'>
                        We are always here to help you. You can contact us through the following ways.
                    </p>
                </div>
                {/* phone filled */}
                <div className='flex flex-col space-y-6'>
                    <div className='incline-flex space-x-2 items-center flex'>
                    <IoCall className='text-teal-300 text-xl'/>
                    <span >(+251) 91 170 3505</span>
                    </div>
                    <div className='incline-flex space-x-2 items-center flex'>
                    <RiMapPin2Fill className='text-teal-300 text-xl'/>
                    <span > Mekelle, Tigray, Ethiopia</span>
                    </div>
                    <div className='incline-flex space-x-2 items-center flex'>
                    <RiMailFill className='text-teal-300 text-xl'/>
                    
                    <span >contact</span>
                    </div>
                </div>
                <div className='flex space-x-4 text-lg'>
                    <a href='#'>
                        <img src={fb} alt='fb'/>
                    </a>
                    <a href='#'>
                        <img src={tw} alt='tw'/>
                    </a>
                    <a href='#'>
                        <img src={in1} alt='in'/>
                    </a>
                    <a href=''>
                        <img src={s} alt='s'/>
                    </a>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-lg p-8 md:w-80'>
                <form action='' className='flex flex-col space-y-4 text-black'>
                    <div>
                        <label htmlFor='name' className='text-sm'>Your Name</label>
                    </div>
                    <div>
                        <input type="text" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                    </div>
                    <div>
                        <label htmlFor='email' className='text-sm'>Email</label>
                    </div>
                    <div>
                        <input type="text" placeholder='Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                    </div>
                    <div>
                        <label htmlFor='Message' className='text-sm'>Message</label>
                    </div>
                    <div>
                        <textarea type="text" placeholder='Message' rows="4" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                    </div>
                    <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs