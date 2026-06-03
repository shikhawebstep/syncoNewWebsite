import React from 'react'
import EnquiryForm from '../../../Common/EnquiryForm'
import FranchiseForm from '../../../Common/FranchiseForm'

const Enquiry = () => {
    return (
        <section id="enquiry-section" className='py-[80px] px-4 md:px-0 relative overflow-hidden'>
            <div className="container">
                <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
                    <div className='md:w-[430px] md:text-left text-center'>
                        <h3 className="text-[18px] permanent-marker  text-[#00A6E3]">
                            Step 1
                            <span className='recline  block blue-text' >Enquire Today</span>
                        </h3>
                        <p className="md:text-[20px] text-[19px] text-[#797A88] my-5 ">
                           Your Samba Soccer Schools franchise journey begins here. Simply fill out the <br className="hidden md:block" /> form below, and we’ll be in touch<br className="hidden md:block" /> within 48
                            hours to answer any<br className="hidden md:block" /> questions and get you started on <br className="hidden md:block" />your franchise journey.  
                        </p>
                    </div>
                    <div className='md:w-[688px] relative bg-white z-50'>
                        <FranchiseForm /></div>
                </div>
            </div>
            <div className="absolute md:top-[80%] top-[85%]  md:left-[39%] rotate-[30deg] left-[-60%] max-w-[400px]">
                <img src="/assets/blueDots.png" alt="" />
            </div>

            <div className="absolute md:right-30 right-[-154px] -z-1 md:-top-5 top-[-150px] max-w-[400px]">
                <img src="/assets/blueDots1.png" alt="" />
            </div>
        </section>
    )
}

export default Enquiry
