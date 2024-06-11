import React from 'react'
import serviceImg from '../../assets/services/icon-1.svg'
import serviceImg2 from '../../assets/services/icon-2.svg'
import serviceImg3 from '../../assets/services/icon-3.svg'
import serviceImg4 from '../../assets/services/icon-4.svg'
import serviceImg5 from '../../assets/services/unkn.svg'


const Services = () => {
  return (
    <div>
        <div className='stats section'>
        <div className='container mx-auto'>
        </div>
    </div>
    <div className='services'>
    <div className='bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-0 relative h-[368px] flex items-center xl:items-start'>
        <div className='container mx-auto'>
            <div className='services__top flex items-center flex-col xl:flex-row xl:mb-[60px] relative z-10'>
                <h2 className='h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left'>Our services</h2>
                <p className='text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none'>
                Darna Construction is a full-service construction company offering a wide range of 
                services to meet the needs of residential, commercial, and industrial clients.
                </p>
            </div>
        </div>
    </div>
    <div className='container mx-auto mt-8 xl:-mt-[144px] relative'>
        <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    {/* <img src={serviceImg5} alt="services" /> */}
                </div>
                <h3 className='h3 mb-[10px]'>General Contracting</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Residential Construction: Single-family homes, 
                multi-family developments, townhouses, etc.
                </p>
            </div>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    {/* <img src={serviceImg2} alt="services" /> */}
                </div>
                <h3 className='h3 mb-[10px]'>Commercial Build-Outs</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Commercial Construction: Office buildings, retail spaces, restaurants, warehouses, etc.. 
                </p>
            </div>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    {/* <img src={serviceImg3} alt="services" /> */}
                </div>
                <h3 className='h3 mb-[10px]'>Design-Build Services</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Industrial Construction: Manufacturing facilities, warehouses, distribution centers, etc. 
                </p>
            </div>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    {/* <img src={serviceImg4} alt="services" /> */}
                </div>
                <h3 className='h3 mb-[10px]'>Permitting and Inspections</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Institutional Construction: Schools, hospitals, government buildings, et 
                </p>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Services