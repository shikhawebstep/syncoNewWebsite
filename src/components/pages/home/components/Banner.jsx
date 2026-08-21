import React from 'react'
import { useNavigate } from 'react-router-dom'
const Banner = () => {

    const navigate = useNavigate();
    return (
        <>
            <section className='banner relative overflow-hidden py-10 md:py-16 lg:py-20'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                >
                    <source src="https://sambasoccerschools.com/wp-content/uploads/2025/01/desktop-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='container relative z-10'>
                    <div className='banner-content text-center text-white'>
                        <h1 className='font-bold text-white mb-2  recline text-[52px] sm:text-[72px] md:text-[90px] lg:text-[100px]'>
                            Play With
                            <span className='roam block text-[72px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-normal'>
                                PASSION
                            </span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold py-4 md:py-7 md:pt-5 px-4 sm:px-8 md:px-0  mx-auto">
                            Football training built on <br className='block md:hidden' /> flair, confidence and <br className='block md:hidden' />  Brazilian rhythm since 2009.
                        </p>
                        <button onClick={() => navigate('/find-a-class')} className="bg-[#00A6E3] p-5 py-2 md:py-4 font-normal mt-3 md:mt-5 px-5 md:px-6 rounded-4xl permanent-marker text-xs md:text-[16px] tracking-normal">
                            Book A Free Trial
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner