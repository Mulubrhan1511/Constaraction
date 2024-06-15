import React from 'react'
import Hero2 from '../Hero/Hero2'
import Team from '../Team.jsx/Team'

const About = () => {
  return (
    <div className=''>
        <section class=" lg:py-24 relative z-0 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <h1
            class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            About <span class="text-blue-400">us </span>
        </h1>
        <p class="max-w-5xl mx-auto text-center text-base lg:text-2xl font-normal leading-7 text-gray-500 mb-9 ">DARNA Construction
             and Business PLC were established at 2024 GC at Tigray region Mekelle city. It is private limited company that 
             involves construction like building construction, road construction, site work and finishing works. DARNA. Construction
              and business plc targeted in the near future fully involve in real estate development. DARNA construction and Business
               plc believe the most company which creates a difference construction and real estate development by quality and safety 
               construction. Using modern technology, very qualified professionals and satisfied clients in east Africa.
In addition DARNA involve in business like import construction materials and supplies construction materials in local market 
integrated with local manufacturers.
</p>
    </div>
</section>
<section class="py-14 lg:py-24 relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div class="img-box">
                <img src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718138787/%E1%89%AA%E1%88%B2%E1%8A%A6%E1%8A%95_afb4hd.jpg" alt="About Us tailwind page"
                    class="max-lg:mx-auto" />
            </div>
            <div class="lg:pl-[100px] flex items-center">
                <div class="data w-full">
                    <h2
                        class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                        Vision</h2>
                    <p class="font-normal text-1xl leading- text-gray-500 lg:text-2xl max-lg:text-center max-w-2xl mx-auto">
                    To be a leader in the construction industry, recognized for:
Innovation and sustainability: Pioneering new building methods and technologies that minimize environmental impact.
Exceptional client experiences: Building trust and exceeding expectations through clear communication and collaborative partnerships.
Positive community impact: Contributing to the development of thriving and sustainable communities.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-14 lg:py-24 relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

            <div class="lg:pr-24 flex items-center">
                <div class="data w-full">
                    {/* <img src="https://collection.cloudinary.com/diulu4bz3/0ee01b927d74cce852c34aa760ff5424" alt="About Us tailwind page" */}
                        {/* class="block lg:hidden mb-9 mx-auto" /> */}
                    <h2 class="font-manrope font-bold text-4xl lg:text-5xl  text-black mb-9 max-lg:text-center">Mission</h2>
                    <p class="font-normal text-xl leading-8 text-gray-500 lg:text-2xl max-lg:text-center max-w-2xl mx-auto">
                    We are dedicated to delivering high-quality, innovative construction projects that are completed on time and within budget.
We foster a collaborative and inclusive work environment that empowers our team and celebrates diversity.
We prioritize safety and environmental responsibility in all our practices.
                    </p>
                </div>
            </div>
            <div class="img-box ">
                <img src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718139122/mission_xvaigj.jpg" alt="About Us tailwind page"
                    class=" lg:block " />
            </div>
        </div>
    </div>
</section>
<section class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope text-xl text-center text-gray-900 font-bold mb-14">Darna Capital result</h2>
        <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div
                class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div class="flex gap-5">
                    <div class="font-manrope text-2xl font-bold text-indigo-600">
                        240%
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                        <p class="text-xs text-gray-500 leading-5">Company's remarkable growth journey as we
                            continually innovate and drive towards new heights of success.</p>
                    </div>
                </div>
            </div>
            <div
                class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div class="flex gap-5">
                    <div class="font-manrope text-2xl font-bold text-indigo-600">
                        175+
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                        <p class="text-xs text-gray-500 leading-5">Our very talented team members are the powerhouse
                            of pagedone and pillars of our success. </p>
                    </div>
                </div>
            </div>
            <div
                class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div class="flex gap-5">
                    <div class="font-manrope text-2xl font-bold text-indigo-600">
                        25+
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                        <p class="text-xs text-gray-500 leading-5">We have accomplished more than 625 projects
                            worldwide and we are still counting many more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    </div>
  )
}

export default About