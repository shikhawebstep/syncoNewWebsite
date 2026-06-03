import React from 'react'
import EnquiryForm from './EnquiryForm'

const Enquiry = () => {
    return (
        <section className='py-[80px] relative overflow-hidden'>
            <div className="container">
                <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
                    <div className='md:text-left text-center md:mb-0 mb-10 md:w-[430px] '>
                        <h3 className=" text-[18px] recline blue-text">
                            Football Birthday Parties
                            <span className='permanent-marker block text-[#00A6E3]' >Enquiry Form</span>
                        </h3>
                        <p className="text-[20px] text-[#5F5F6D] mt-5 ">
                            Like what you hear? Get in touch with us so we can start preparing your child’s big day! Fill out the form below and a member of our team will call you shortly.
                        </p>
                    </div>
                    <div className='md:w-[690px] relative z-50'>
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
