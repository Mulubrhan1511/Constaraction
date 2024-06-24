import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../../assets/services/hhhh.jpg"; // Update the path as needed

const OrganizationStructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8">
        Organization Structure
      </h1>
      <div className="w-full max-w-6xl px-4 mb-12">
        <img 
          src={img} 
          alt="Organization Structure of DARNA Construction and Business PLC" 
          className="rounded-lg shadow-2xl w-full"
          
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">CEO</h2>
          <p className="text-white">
            Oversees the entire organization ensuring all departments align with the company's goals.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">Auditor</h2>
          <p className="text-white">
            Ensures compliance with financial regulations and accuracy in financial reporting.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">Lawyer</h2>
          <p className="text-white">
            Manages legal matters to ensure all operations are within legal frameworks.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">HR Department</h2>
          <p className="text-white">
            Manages recruitment, employee relations, and company culture.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">Design & Engineering</h2>
          <p className="text-white">
            Focuses on creating innovative and efficient designs for our construction projects.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">Construction Department</h2>
          <p className="text-white">
            Handles the actual building process, ensuring quality and safety in every project.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">Finance Department</h2>
          <p className="text-white">
            Manages the company’s financial resources, budgeting, and investments to ensure sustainability.
          </p>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gold mb-4">Logistics Department</h2>
          <p className="text-white">
            Ensures the smooth transportation and supply of materials necessary for our projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructure;