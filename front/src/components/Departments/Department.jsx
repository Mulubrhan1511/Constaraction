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
      <h2 className='faq__title h2 text-center mb-[50px]'>Summery service of Darna capital</h2>
      <div
        className='departments__bg bg-accent/40 bg-cover xl:bg-auto bg-center
        bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12
        xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center'
      >
        <div className='departments__container container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-5'>
            <div
              className='xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px]
              font-medium uppercase text-center xl:text-left text-base text-[#fffff] xl:pt-3  xl:text-[17px] mb-[50px] xl:mb-0'
            >
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Project Management')}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Project Management
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Design')}
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Design
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Construction')}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Construction
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Procurement')}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Procurement
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Quality Assurance')}
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Quality Assurance
              </div>
              <div
                className='cursor-pointer hover:text-accent transition-all'
                onClick={() => handleDepartmentClick('Health and Safety')}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Health and Safety
              </div>
            </div>
            <div className='xl:w-[640px]' data-aos="fade-up" data-aos-duration="700">
              <h2 className='h2 mb-[20px] text-center xl:text-left'>
                {selectedDepartment || 'Project Management'}
              </h2>

              <p className='mb-[30px] font-light text-center xl:text-left'>
                {selectedDepartment
                  ? 'Details about the selected department.'
                  : 'The Project Management department is responsible for planning, executing, and controlling construction projects to ensure they are completed on time, within budget, and to the required quality standards.'}
                <br />
                <br />
                {selectedDepartment
                  ? 'Additional details about the selected department.'
                  : 'This includes tasks such as developing project plans, managing project resources, monitoring progress, and communicating with stakeholders.'}
              </p>
              <div
                className='flex flex-col xl:flex-row items-center xl:justify-between
                max-w-[555px] mb-[50px] mx-auto xl:mx-0'
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div
                  className={`text-accent xl:border-r border-[#dcdcdc] xl:pr-6 ${
                    selectedTitle === 'Scheduling' ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTitleClick('Scheduling')}
                >
                  Scheduling
                </div>
                <div
                  className={`text-accent xl:border-r border-[#dcdcdc] xl:pr-6 ${
                    selectedTitle === 'Cost Control' ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTitleClick('Cost Control')}
                >
                  Cost Control
                </div>
                <div
                  className={`text-accent xl:border-r border-[#dcdcdc] xl:pr-6 ${
                    selectedTitle === 'Risk Management' ? 'font-bold' : ''
                  }`}
                  onClick={() => handleTitleClick('Risk Management')}
                >
                  Risk Management
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
