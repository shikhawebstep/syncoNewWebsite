import React from 'react'
import ApplicationForm from './ApplicationForm'
import TexturedBackground from "/assets/TexturedBackground.png";

const Enquiry = () => {
  return (
    <section className='py-[80px] relative bg-[#F6F7FB] overflow-hidden'
     style={{ backgroundImage: `url(${TexturedBackground})` }}>
      <div className="container">
        <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
          <div className='md:w-[430px] '>
            <h4 className="text-[18px] recline blue-text">
              Apply Today
            </h4>
            <p className="text-[20px] text-[#5F5F6D] mt-5 ">
Fill in your details below and you can expect to hear from our team within 48 hours. Don’t forget to add a cover note and upload your CV at the bottom!            </p>         </div>
          <div className='md:w-[690px] relative z-50'>
            <ApplicationForm /></div>
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
