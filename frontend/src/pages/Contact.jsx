import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='pt-10 text-2xl text-center text-gray-500'>
        <p>CONTACT <span className='font-semibold text-gray-700' >US</span></p>
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p>OUR OFFICE</p>
          <p>54708 Willms Station <br /> Suite 350 , Washington, USA</p>
          <p>Tel: (415) 555-0132 <br />Email: prescripto@gamil.com</p>
          <p>Careers At PRESCRIPTO</p>
          <p>Learn more about our teams and join job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
