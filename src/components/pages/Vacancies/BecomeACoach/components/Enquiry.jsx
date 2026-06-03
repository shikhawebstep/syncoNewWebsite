import React from 'react'
import ApplicationForm from '../../../Common/ApplicationForm'

const Enquiry = () => {
  return (
    <section id="enquiry-section" className='py-[80px] relative overflow-hidden appForm'>
      <div className="container">
        <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
          <div className='md:w-[430px] px-3 md:px-0'>
            <h4 className="text-[18px] recline blue-text">
              Application form

            </h4>
            <p className="text-[18px] text-[#5F5F6D] mt-5 ">
              Like the sound of what we do and how we coach? We’d love to hear from you if you meet our eligibility criteria. Fill out the form below, and a member of our recruitment team will get in touch with you. Good luck
            </p>
          </div>
          <div className='md:w-[690px] relative z-50'>
            <ApplicationForm /></div>
        </div>
      </div>
      <div className="absolute md:top-[40%] top-[85%]  md:left-[30%] left-[-50%] max-w-[400px]">
        <img src="/assets/greenVector.png" alt="" />
      </div>

      <div className="absolute  bluedot1 -right-20 top-[25%] bluedot1 max-w-[400px]">
        <img src="/assets/greenVector2.png" alt="" />
      </div>
    </section>
  )
}

export default Enquiry
