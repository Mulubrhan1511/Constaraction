import React from 'react';
import s from '../../assets/team/s.png';
import in1 from '../../assets/team/in.png';
import tw from '../../assets/team/tw.png';
import fb from '../../assets/team/fb.png';
import team from '../../assets/team/team.png';
import team2 from '../../assets/team/team2.png';
import team3 from '../../assets/team/team3.png';
import team4 from '../../assets/team/team4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  

  return (
    <div className="mt-14 mb-12">
      <div data-aos="fade-up" className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl font-bold">
            Meet Our Team
          </h1>
          
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5">
            {/* card section */}
            <div data-aos="fade-up" data-aos-delay="0" className="card w-[270px] py-8 px-14 text-white text-center">
              <img className="mx-auto -mb-[20px]" src={team} alt="" />
              <h2 className="text-[28px] font-medium leading-9 mb-[7px]">Sunny Khan</h2>
              <p className="font-normal leading-5 uppercase">Executive officer</p>
              <div className="icons flex mt-[10px] justify-center gap-2">
                <img src={s} alt="" className="icon cursor-pointer" />
                <img src={in1} alt="" className="icon cursor-pointer" />
                <img src={tw} alt="" className="icon cursor-pointer" />
                <img src={fb} alt="" className="icon cursor-pointer" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="card w-[270px] py-8 px-14 text-white text-center">
              <img className="mx-auto -mb-[20px]" src={team2} alt="" />
              <h2 className="text-[28px] font-medium leading-9 mb-[7px]">Alina Jesia</h2>
              <p className="font-normal leading-5 uppercase">UX/UI DESIGNER</p>
              <div className="icons flex mt-[10px] justify-center gap-2">
                <img src={s} alt="" className="icon cursor-pointer" />
                <img src={in1} alt="" className="icon cursor-pointer" />
                <img src={tw} alt="" className="icon cursor-pointer" />
                <img src={fb} alt="" className="icon cursor-pointer" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="card w-[270px] py-8 px-14 text-white text-center">
              <img className="mx-auto -mb-[20px]" src={team3} alt="" />
              <h2 className="text-[28px] font-medium leading-9 mb-[7px]">Alex Sohag</h2>
              <p className="font-normal leading-5 uppercase">BUSINESS DEVELOPMENT</p>
              <div className="icons flex mt-[10px] justify-center gap-2">
                <img src={s} alt="" className="icon cursor-pointer" />
                <img src={in1} alt="" className="icon cursor-pointer" />
                <img src={tw} alt="" className="icon cursor-pointer" />
                <img src={fb} alt="" className="icon cursor-pointer" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="card w-[270px] py-8 px-14 text-white text-center">
              <img className="mx-auto -mb-[20px]" src={team4} alt="" />
              <h2 className="text-[28px] font-medium leading-9 mb-[7px]">Afroza Mou</h2>
              <p className="font-normal leading-5 uppercase">Head of marketing</p>
              <div className="icons flex mt-[10px] justify-center gap-2">
                <img src={s} alt="" className="icon cursor-pointer" />
                <img src={in1} alt="" className="icon cursor-pointer" />
                <img src={tw} alt="" className="icon cursor-pointer" />
                <img src={fb} alt="" className="icon cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
