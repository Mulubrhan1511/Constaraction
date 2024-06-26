import React, { useEffect } from 'react';
import mission from "../../assets/About/misiiion.png";
import vision from "../../assets/About/vision.png";
import valuesImage from "../../assets/About/corevalues.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className='text-white'>
      <section className="py-16 lg:py-20 bg-gray-50" data-aos="fade-in" data-aos-duration="800">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
      About <span className="text-blue-400">Us</span>
    </h1>
    <p className="max-w-3xl mx-auto text-base lg:text-lg text-gray-600 leading-7 mb-8">
      DARNA Construction and Business PLC, established in 2024 GC in Mekelle city, Tigray region, is a private limited company engaged in various construction activities. These include building construction, road construction, site work, and finishing works. In the near future, DARNA aims to fully venture into real estate development, setting a benchmark in quality and safety construction.
    </p>
    <p className="max-w-3xl mx-auto text-base lg:text-lg text-gray-600 leading-7 mb-8">
      Leveraging modern technology, highly qualified professionals, and a commitment to client satisfaction, DARNA is poised to make a significant impact in East Africa. In addition to construction, DARNA is involved in importing construction materials and supplying them to the local market in collaboration with local manufacturers.
    </p>
    <p className="max-w-3xl mx-auto text-base lg:text-lg text-gray-600 leading-7 mb-8">
      Despite starting with a modest capital of 500,000 birr, the founders' experience and extensive connections, along with the involvement of capable engineers, position the company for success. DARNA targets the low urbanization rate in Ethiopia, currently around 23% as of 2010 E.C., aiming to contribute significantly to the urban development of the country and its neighbors in East Africa.
    </p>
  </div>
</section>


      <section className="py-14 lg:py-24 relative" data-aos="fade-in" data-aos-duration="800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img src={vision} alt="Vision" className="max-lg:mx-auto" />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Vision
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto">
                  Our vision is to be one of the premier construction companies and service providers in East Africa, known for our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative" data-aos="fade-in" data-aos-duration="800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img src={mission} alt="Mission" className="block lg:hidden mb-9 mx-auto" />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Mission
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto">
                  Our mission is to become the leading construction company by providing efficient, affordable, sustainable, and high-quality services.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img src={mission} alt="Mission" className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative" data-aos="fade-in" data-aos-duration="800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="img-box">
              <img src={valuesImage} alt="Values" className="max-lg:mx-auto" />
            </div>
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  OUR VALUES
                </h2>
                <ul className="text-gray-600 text-lg leading-7 mb-8">
                  <li className="mb-4">
                    <span className="font-bold text-blue-400">Integrity</span> - Darna Construction believes in maintaining the highest standard of integrity.
                  </li>
                  <li className="mb-4">
                    <span className="font-bold text-blue-400">Creativity</span> - We foster creativity in our approach to every project.
                  </li>
                  <li className="mb-4">
                    <span className="font-bold text-blue-400">Professionalism</span> - Our team operates with professionalism in every aspect of our work.
                  </li>
                  <li className="mb-4">
                    <span className="font-bold text-blue-400">Positive Attitude</span> - We maintain a positive attitude towards challenges and opportunities.
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary" data-aos="fade-in" data-aos-duration="800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our Achievements
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex items-center justify-center rounded-full bg-indigo-600 w-20 h-20 mb-6">
                <span className="text-white font-manrope text-3xl font-bold">240%</span>
              </div>
              <h4 className="text-xl text-gray-900 font-semibold mb-2 text-center">Growth Rate</h4>
              <p className="text-sm lg:text-base text-gray-700 leading-5 text-center text-black">
                Our company has achieved a remarkable 240% growth by continuously innovating and striving for excellence in every project.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex items-center justify-center rounded-full bg-indigo-600 w-20 h-20 mb-6">
                <span className="text-white font-manrope text-3xl font-bold">175+</span>
              </div>
              <h4 className="text-xl text-gray-900 font-semibold mb-2 text-center">Team Members</h4>
              <p className="text-sm lg:text-base text-gray-700 leading-5 text-center text-black">
                Our team of over 175 skilled professionals is the backbone of our success, driving us forward with their dedication and expertise.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex items-center justify-center rounded-full bg-indigo-600 w-20 h-20 mb-6">
                <span className="text-white font-manrope text-3xl font-bold">25+</span>
              </div>
              <h4 className="text-xl text-gray-900 font-semibold mb-2 text-center">Completed Projects</h4>
              <p className="text-sm lg:text-base text-gray-700 leading-5 text-center text-black">
                With over 25 successful projects completed, we are committed to delivering top-quality construction solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;