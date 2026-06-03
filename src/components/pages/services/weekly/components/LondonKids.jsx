import React from 'react'

const LondonKids = () => {
    return (
        <>
            <section className="gray-bg london-kids relative z-50 py-[80px] -mb-[140px] xl:pb-[220px]">
                <div className="container">
                    <div className="md:flex">
                        <div className="md:w-5/12 relative">
                        <div className="md:block hidden img-box  -mt-[135px] lg:max-w-[700px] md:absolute -right-[103px]">
                            <img src="/assets/london-boy.png" alt="" />
                        </div>
                        </div>
                        <div className="content-box md:w-7/12">
                           <div className='lg:max-w-[710px]'> <h4 className="recline text-[52px] blue-text">Weekly football classes in London for  <span className='text-[#00A6E3]'>kids aged 4 to 12</span></h4>
                            <p className='text-[#5F5F6D] text-[15px] pt-5'>The best footballers in the world don’t just appear overnight - it takes consistent <br className="hidden md:block" /> practice and training. Samba Soccer Schools offers weekly football classes in London for <br className="hidden md:block" /> children aged four to twelve, split into four ability levels - meaning nobody misses out</p>
                            <p className='text-[#5F5F6D] text-[15px] py-5'>Our approach uniquely places the Brazilian footballing methodology at the core of <br className="hidden md:block" /> everything we do. With a skills-based program that focuses on close control, flair, and<br className="hidden md:block" />  freedom, your child can learn how to play attractive, winning football that will quickly <br className="hidden md:block" />  help build their confidence - all with a massive smile on their face.</p>
                            <button className='bg-[#00A6E3] rounded-3xl px-6 py-3 text-white poppins text-[16px] font-bold'>Book Now</button></div>
                        </div>
                         <div className="md:hidden block  img-box  -mt-[10px] lg:max-w-[700px] md:absolute -right-[103px]">
                            <img src="/assets/london-boy.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LondonKids
