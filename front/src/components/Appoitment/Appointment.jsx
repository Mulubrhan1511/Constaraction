import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";

const Appointment = () => {
  return (
    <div className='appointment section'>
        <div className='container mx-auto'>
            <h2
                className='appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left'
            >
                    Book Appointment or call:
                    <span className='text-accent-tertiary'>(+487) 384 9452</span>
            </h2>
        <form className='appointment__form flex flex-col gap-y-5'>
        <div className='flex flex-col xl:flex-row gap-5'>
            <div className='select relative flex items-center flex-grow'>
                <div className='absolute right-4 pointer-events-none'>
                    <RiArrowDownSLine className='text-[26px] text-primary'/>
                </div>
                <select className='input appearance-none outline-none h-full w-full bg-transparent px-4 border'>
                    <option value='1'>Select department</option>
                    <option value='2'>Department 1</option>
                    <option value='3'>Department 2</option>
                    <option value='4'>Department 3</option>
                </select>
            </div>
            <div className='select relative flex items-center flex-grow'>
                <div className='absolute right-4 pointer-events-none'>
                    <RiArrowDownSLine className='text-[26px] text-primary'/>
                </div>
                <select className='input appearance-none outline-none h-full w-full bg-transparent px-4 border'>
                    <option value='1'>Select doctor</option>
                    <option value='2'>Dr. Jane Doe</option>
                    <option value='3'>Dr. John Doe</option>
                    <option value='4'>Dr. Bob Smith</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-5'>
            <input
                type='text'
                placeholder='Your name'
                className='input'
            />
            <input
                type='text'
                placeholder='Phone number'
                className='input'
            />
        </div>

        <div className='flex flex-col xl:flex-row gap-5'>
            <input className='input' type='date'/>
            <input className='input' type='time'/>
        </div>

        <button className='btn btn-lg btn-accent self-start' type='submit'>
            Book Appointment
        </button>
        </form>
        </div>
       
    </div>
  )
}

export default Appointment