import React from 'react'

const EnquireToday = () => {
    return (
        <section className="py-[50px] px-4 md:px-0 ">
            <div className="container">

                <div className='max-w-[1130px] md:flex items-center m-auto gap-10 text-[#5F5F6D] '>
                    <div className='max-w-[670px]'>
                        <p className='md:text-[16px]  text-[15px] font-medium leading-[28px] text-[#5F5F6D]'>
                            If you’re at this stage, you must already have a firm desire to start your own Samba Soccer Schools franchise, letting you open a new business through proven systems we’ve developed and perfected for over ten years.                         </p>
                        <p className='md:text-[16px]  text-[15px] font-medium leading-[28px] text-[#5F5F6D] py-5'>
                            Many people dream about running their own business, but the complexities, risks, hard work and time needed put a lot of people off. Franchising allows you to hurdle those problematic early stages by using a trusted brand as a springboard to launch from. You don’t need to establish your name as we’re already a market leader, while our unparalleled level of support can lead you through the entire process until you’re ready to take the reins yourself fully.                         </p>
                        <p className='md:text-[16px]  text-[15px] font-medium leading-[28px] text-[#5F5F6D]'>
                            Investment is one of the most crucial franchising aspects, so we’ve compiled the necessary information here.                              </p>
                        <button 
                            onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="mt-4 rounded-full bg-[#0DD180] px-5 py-2.5 md:text-[16px]  text-[15px] font-medium text-white poppins">
                            Apply Today
                        </button>
                    </div>
                    <div><img src="/assets/ricoGreen.png" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default EnquireToday
