import React from 'react'

const CallBack = () => {
    return (
        <section className='bg-white py-[120px] relative'>
            <div className="container mx-auto">
                <div className="bg-white max-w-[770px] m-auto text-center overflow-hidden relative z-50 p-8 rounded-4xl
 shadowBox border-t-10  border-[#fede23]">
                    <h3 className="small permanent-marker blue-text">request a call back.</h3>
                    <h6 className="small recline  blue-text py-5">Private 1-2-1 football classes are the perfect way to develop skills and boost confidence in a short time. </h6>
                    <p className='text-[#5F5F6D] font-regular'>Fill out the form at the bottom of the page and a member of our team will discuss how we can help your child.</p>
                    <button className="bg-[#0DD180] text-[18px] mt-4 text-white font-bold w-full poppins rounded-4xl p-3">
                        Request a call back
                    </button>
                </div>
            </div>
            <div className="absolute md:top-30 top-[50%] right-0">
                <img src="/assets/yellowVector.png" alt="" />
            </div>
            <div className="absolute md:top-0 top-[30%] md:w-6/12 md:left-10 left-0">
                <img src="/assets/yellowDots.png" alt="" />
            </div>
            <div className="absolute top-[20%] md:top-0 md:w-6/12 md:right-10 right-0">
                <img src="/assets/yellowDots.png" alt="" />
            </div>
        </section>
    )
}

export default CallBack
