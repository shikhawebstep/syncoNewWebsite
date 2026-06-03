import React from 'react'
import ChildEnquiryForm from './ChildEnquiryForm'

const Enquiry = () => {
  return (
    <section className='py-[80px] relative overflow-hidden'>
      <div className="container">
        <div className="md:flex justify-between max-w-[1200px] m-auto gap-5">
          <div className='md:w-[430px] '>
            <h4 className="text-[18px] recline blue-text">
              Club Enquiry Form
              {/* <span className='permanent-marker block text-[#0DD180]' ></span> */}
            </h4>
            <p className="text-[20px] text-[#5F5F6D] mt-5 ">
              Think your child has what it takes? Or do they simply want to experience what a real-life trial is like? Fill in your details below, and one of our team will be in contact within 48 hours.
            </p>
          </div>
          <div className='md:w-[690px] relative z-50'>
            <ChildEnquiryForm /></div>
        </div>
      </div>
      <div className="absolute md:top-[40%] top-[85%]  md:left-[30%] left-[-50%] max-w-[400px]">
        <img src="/assets/greenVector.png" alt="" />
      </div>

      <div className="absolute  bluedot1 -right-20 -top-5 bluedot1 max-w-[400px]">
        <img src="/assets/greenVector2.png" alt="" />
      </div>
    </section>
  )
}

export default Enquiry
