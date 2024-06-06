import React from 'react'
import serviceImg from '../../assets/services/icon-1.svg'
import serviceImg2 from '../../assets/services/icon-2.svg'
import serviceImg3 from '../../assets/services/icon-3.svg'
import serviceImg4 from '../../assets/services/icon-4.svg'

const Services = () => {
  return (
    <div>
        <div className='stats section'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-y-6 justify-between'>
                <div className='stats__item flex-1  xl:border-r flex flex-col items-center'>
                    <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
                        +5120
                    </div>
                    <div>Happy Patients</div>
                </div>

                <div className='stats__item flex-1  xl:border-r flex flex-col items-center'>
                    <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
                        26
                    </div>
                    <div>Total Branches</div>
                </div>

                <div className='stats__item flex-1  xl:border-r flex flex-col items-center'>
                    <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
                        +53
                    </div>
                    <div>Senior Doctors</div>
                </div>

                <div className='stats__item flex-1  flex flex-col items-center'>
                    <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
                        +10
                    </div>
                    <div>Years Experience</div>
                </div>
            </div>
        </div>
    </div>
    <div className='services'>
    <div className='bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-0 relative h-[368px] flex items-center xl:items-start'>
        <div className='container mx-auto'>
            <div className='services__top flex items-center flex-col xl:flex-row xl:mb-[60px] relative z-10'>
                <h2 className='h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left'>Our best services for your solution</h2>
                <p className='text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi, voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi, voluptatem.
                </p>
            </div>
        </div>
    </div>
    <div className='container mx-auto mt-8 xl:-mt-[144px] relative'>
        <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    <img src={serviceImg} alt="services" />
                </div>
                <h3 className='h3 mb-[10px]'>General Practitionars</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    <img src={serviceImg2} alt="services" />
                </div>
                <h3 className='h3 mb-[10px]'>Pregnancy Support</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    <img src={serviceImg3} alt="services" />
                </div>
                <h3 className='h3 mb-[10px]'>Nutritional Support</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
            <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center relative'>
                <div className='mb-[15px] '>
                    <img src={serviceImg4} alt="services" />
                </div>
                <h3 className='h3 mb-[10px]'>Pharmaceutical Care</h3>
                <p className='font-light leading-normal max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Services