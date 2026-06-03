import React from 'react'
import EnquiryForm from './EnquiryForm'

const Enquiry = () => {
    return (
        <section id="enquiry-section" className='md:py-[80px] py-10 px-3 md:px-0 relative overflow-hidden'>
            <div className="container">
                <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
                    <div className='md:text-left text-center md:mb-0 mb-10 md:w-[430px] '>
                        <h2 className=" md:text-[56px] text-[45px] recline blue-text">
                            Football <br className='block md:hidden'/> Birthday Parties <br className='md:block hidden'/>
                            <span className='permanent-marker  text-[#00A6E3]' >Enquiry Form</span>
                        </h2>
                        <p className="text-[20px] text-[#5F5F6D] mt-5 ">
                            Like what you hear? Get in touch with us so we can start preparing your child’s big day! Fill out the form below and a member of our team will call you shortly.
                        </p>
                    </div>
                    <div className='md:w-[690px] relative z-50'>
                        <EnquiryForm /></div>
                </div>
            </div>
            <div className="absolute md:top-[70%] top-[85%]  md:left-[30%] left-[-50%] max-w-[400px]">
                <img src="/assets/blueDots1.png" alt="" />
            </div>

            <div className="absolute  bluedot1 md:right-40 -right-30 -top-5 bluedot1 max-w-[400px]">
                <img src="/assets/blueDots1.png" alt="" />
            </div>
        </section>
    )
}

export default Enquiry
