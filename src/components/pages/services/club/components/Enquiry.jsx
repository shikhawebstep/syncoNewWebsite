import React from 'react'
import ChildEnquiryForm from './ChildEnquiryForm'

const Enquiry = () => {
  return (
    <section id="enquiry-section" className='py-[80px] relative overflow-hidden'>
      <div className="container">
        <div className="md:flex justify-between max-w-[1200px] m-auto gap-5">
          <div className='md:w-[430px] md:text-left text-center '>
            <h4 className="text-[18px] recline blue-text">
              Club <br className="block md:hidden" /> Enquiry Form
              {/* <span className='permanent-marker block text-[#0DD180]' ></span> */}
            </h4>
            <p className="md:text-[20px] text-[18px] text-[#5F5F6D] mt-5 ">
              Think your child has what it takes? Or do they simply want to experience what a real-life trial is like? Fill in your details below, and one of our team will be in contact within 48 hours.
            </p>
          </div>
          <div className='md:w-[690px] md:mt-0 mt-7 relative z-50'>
            <ChildEnquiryForm /></div>
        </div>
      </div>
      <div className="absolute md:top-[70%] bottom-[0%]  md:left-[40%] -left-[46%] max-w-[400px]">
        <img src="/assets/blueDots1.png" alt="" />
      </div>

      <div className="absolute  bluedot1 md:right-60 -right-10 md:top-5 -top-10 bluedot1 max-w-[400px]">
        <img src="/assets/blueDots2.png" alt="" />
      </div>
    </section>
  )
}

export default Enquiry
