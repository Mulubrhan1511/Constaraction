import React, { useState, useEffect } from 'react';
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

import 'aos/dist/aos.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq'>
      <div className='container mx-auto' data-aos="fade-up">
        <h2 className='faq__title h2 text-center mb-[50px]'>Frequently Asked Questions</h2>
        {/* item wrapper */}
        <div>
          {/* items */}
          {[
            { title: 'What services do you offer?', content: 'We offer a wide range of construction services, including project planning, architectural design, construction management, and more. Our team of experts can help with any aspect of your construction project.' },
            { title: 'How do you ensure quality and safety on your projects?', content: 'Quality and safety are our top priorities. We have rigorous quality control procedures in place, and our construction sites are carefully managed to ensure compliance with all relevant safety regulations.' },
            { title: 'What is your project timeline process?', content: 'Our project planning process involves careful scheduling and coordination to ensure that your project is completed on time and within budget. We work closely with you throughout the project to provide regular updates and address any concerns.' },
            { title: 'Do you offer any guarantees or warranties for your work?', content: 'Yes, we offer a comprehensive warranty on all of our construction work. We stand behind the quality of our craftsmanship and are committed to ensuring your satisfaction with the final product.' }
          ].map((item, index) => (
            <div
              key={index}
              className={`faq__item px-[30px] pt-7 pb-4 border-b border-[#e5e5e5] cursor-pointer select-none`}
              onClick={() => toggleAnswer(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* title & item */}
              <div className='flex items-center justify-between mb-[10px]'>
                {/* title */}
                <h4 className='h4'>{item.title}</h4>
                {/* item */}
                <div className={`faq__btn text-accent flex items-center justify-center w-[40px] h-[40px] rounded-full sm:w-[30px] sm:h-[30px] ${activeIndex === index ? 'bg-accent text-white' : ''}`}>
                  {activeIndex === index ? (
                    <RiSubtractFill className='text-2xl' />
                  ) : (
                    <RiAddFill className='text-2xl' />
                  )}
                </div>
              </div>
              {/* answers */}
              <div className={`faq__answer overflow-hidden max-h-0 transition-all duration-300 ${activeIndex === index ? 'max-h-[1000px]' : ''}`}>
                <p className='font-light'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
