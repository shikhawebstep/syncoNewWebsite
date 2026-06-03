import React from 'react'
import EnquiryForm from '../../../Common/EnquiryForm'

const Enquiry = () => {
  return (
    <section id="enquiry-section" className='py-[80px] relative overflow-hidden'>
      <div className="container">
        <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
          <div className='md:w-[430px] text-center md:text-left mt-15 '>
            <h4 className="text-[18px] recline blue-text">
              1 on 1 Football <br />
              Coaching
              <span className='permanent-marker block text-[#0DD180]' >Enquiry Form</span>
            </h4>
            <p className="text-[20px] text-[#5F5F6D] mt-5 ">
              Like what you hear? Fill out the form below to show your interest and a member of our team will call you shortly.
            </p>
          </div>
          <div className='md:w-[690px] relative z-50 md:mt-0 mt-4'>
            <EnquiryForm /></div>
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
