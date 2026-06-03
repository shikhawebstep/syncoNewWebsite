import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='banner py-10 md:py-16 lg:py-20'>
                <div className='container'>
                    <div className='banner-content text-center text-white'>
                        <h1 className='font-bold text-white mb-2 md:mb-4 recline text-[52px] sm:text-[72px] md:text-[90px] lg:text-[100px]'>
                            Play With
                            <span className='roam block text-[72px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-normal'>
                                PASSION
                            </span>
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold py-4 md:py-7 px-4 sm:px-8 md:px-0 max-w-[600px] mx-auto">
                            Football training built on <br className='block md:hidden' /> flair, confidence and <br className='block md:hidden' />  Brazilian rhythm since 2009.
                        </p>
                        <button className="bg-[#00A6E3] p-4 py-2 md:py-3 font-normal mt-3 md:mt-5 px-5 md:px-6 rounded-3xl permanent-marker text-xs md:text-sm">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner