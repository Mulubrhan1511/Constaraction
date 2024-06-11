import React from 'react'
import Hero2 from '../Hero/Hero2'
import Services from '../Services/Services'
import Appointment from '../Appoitment/Appointment'
import Testimonials from '../Testimonials/Testimonials'
import Team from '../Team.jsx/Team'
import Faq from '../Faq/Faq'
import Department from '../Departments/Department'
import Blog from '../Blog/Blog'
import NewsletterSection from '../NewsletterSection/NewsletterSection'

const Home = () => {
  return (
    <div>
       <Hero2 />
      <Services />
      <Appointment />
      <Testimonials />
      <Team />
      <Faq />
      <Department />
      <Blog />
      <NewsletterSection />
    </div>
  )
}

export default Home