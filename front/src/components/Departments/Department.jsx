import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    setSelectedTitle(null);
  };

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='departments section'>
      <h2 className='faq__title h2 text-center mb-[50px]'>Departments</h2>
      <div
        className='departments__bg bg-departments bg-cover xl:bg-auto bg-center
        bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12
        xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center'
      >
        
        <div className='departments__container container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-5'>
            <div
              className='xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px]
              font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3  xl:text-[17px] mb-[50px] xl:mb-0'
            >
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Laboratory Analysis')}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Laboratory Analysis
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Cardiology Clinic')}
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Cardiology Clinic
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Gynecology Clinic')}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Gynecology Clinic
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Pathology Clinic')}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Pathology Clinic
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Padiatrics Clinic')}
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Padiatrics Clinic
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Neurology Clinic')}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Neurology Clinic
              </div>
            </div>
            <div className='xl:w-[640px]' data-aos="fade-up" data-aos-duration="700">
              <h2 className='h2 mb-[20px] text-center xl:text-left'>
                {selectedDepartment || 'Cardiology Clinic'}
              </h2>

              <p className='mb-[30px] font-light text-center xl:text-left'>
                {selectedDepartment
                  ? 'Details about the selected department.'
                  : 'sit amet consectetur adipisicing elit. Dignissimos consequuntur nobis nesciunt repellat quidem, eum numquam ad harum mollitia neque molestias aperiam! Voluptates amet, iure commodi id cum ratione accusantium!'}
                <br />
                <br />
                {selectedDepartment
                  ? 'Additional details about the selected department.'
                  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti ratione voluptatibus natus repellendus doloremque alias beatae, illum facilis distinctio corporis? Harum assumenda rerum eos aperiam impedit recusandae eius nesciunt!'}
              </p>
              <div
                className='flex flex-col xl:flex-row items-center xl:justify-between
                max-w-[555px] mb-[50px] mx-auto xl:mx-0'
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div
                  className={`text-accent xl:border-r border-[#dcdcdc] xl:pr-6 ${
                    selectedTitle === 'Neurocrtical Care' ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTitleClick('Neurocrtical Care')}
                >
                  Neurocrtical Care
                </div>
                <div
                  className={`text-accent xl:border-r border-[#dcdcdc] xl:pr-6 ${
                    selectedTitle === 'Neuro Oncology' ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTitleClick('Neuro Oncology')}
                >
                  Neuro Oncology
                </div>
                <div
                  className={`text-accent xl:border-r border-[#dcdcdc] xl:pr-6 ${
                    selectedTitle === 'Geriatric Neurology' ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTitleClick('Geriatric Neurology')}
                >
                  Geriatric Neurology
                </div>
              </div>
              <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
