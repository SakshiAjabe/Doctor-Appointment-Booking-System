import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* left section */}
        <div>
             <img className='w-40 mb-5' src={assets.logo} alt="" />
            <p className='w-full leading-6 text-gray-600 md:w-2/3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a aspernatur ipsa debitis voluptas cum? ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a aspernatur ipsa debitis</p>
        </div>

        {/* center section */}
        <div>
            <p className='mb-5 text-xl font-medium'>COMPANY</p>
            <ul className='flex flex-col gap-2 tect-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* right section */}
        <div>
            <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 tect-gray-600'>
                <li>+1-221-456-9876</li>
                <li>prescripto@gmail.com</li>
            </ul>
        </div>

      </div>

      {/* copyright text */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
