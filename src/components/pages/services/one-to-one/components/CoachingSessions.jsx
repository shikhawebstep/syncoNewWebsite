import React from 'react'
import bannerImg from "/assets/bg-primary-texture.png";
const CoachingSessions = () => {
    return (
        <>
            <section
                className=" coacingSessions bg-cover bg-center ] overflow-hidden py-[80px]  relative "
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <div className="container mx-auto">
                    <div className="md:text-center text-white recline md:max-w-[1030px] m-auto">
                        <h3 className='recline small text-white pb-5 md:text-center'><span className="permanent-marker text-[#00A6E3] ">How Much </span>are your <br className='hidden md:block' />
                            One to One football coaching sessions?</h3>
                        <p className="md:text-[20px] text-[16px] font-regular pb-5">
                            We aim to keep our pricing structure as low as possible, even as other costs and prices are rising around us, but we do understand the need to balance affordability and cost-effectiveness.
                        </p>
                        <p className='md:text-[20px] text-[16px]'>We offer two price options for our 1-to-1 football coaching sessions:</p>
                        <div className="grid md:grid-cols-2 my-10 gap-10">
                            <div className='flex items-center gap-10 bg-white  shadow-[-11px_0px_0px_#C3C4CC]
  p-4 py-7 rounded-2xl'>
                                <img className='md:w-[175px] w-[100px]' src="/assets/silverball.png" alt="" />
                                <div className='text-left'>
                                    <h5 className='permanent-marker blue-text  font-semibold'>SILVER</h5>
                                    <p className="md:text-[20px] text-[14px] text-[#9E9FAA] font-bold uppercase">Most affordable</p>
                                    <p className="md:text-[20px] text-[14px] text-[#9E9FAA] ">5 Lessons</p>
                                    <h4 className="medium recline  text-[#00A6E3]">£55 <span className='md:text-[20px] text-[16px]  text-[#797A88] poppins '>per session.</span></h4>
                                </div>
                            </div>
                            <div className='
    shadow-[-11px_0px_0px_#FFDE14]
 flex items-center gap-10 bg-white p-4 py-7 rounded-2xl'>
                                <img className='md:w-[175px] w-[100px]' src="/assets/goldball.png" alt="" />
                                <div className='text-left'>
                                    <h5 className='permanent-marker blue-text font-semibold'>GOLD</h5>
                                    <p className="tmd:text-[20px] text-[14px] text-[#9E9FAA] font-bold uppercase">
                                        Most Cost-Effective</p>
                                    <p className="tmd:text-[20px] text-[14px] text-[#9E9FAA] ">10 Lessons</p>
                                    <h4 className="medium recline text-[#00A6E3]">£50 <span className='md:text-[20px] text-[17px] text-[#797A88] poppins '>per session.</span></h4>
                                </div>
                            </div>

                        </div>
                        <div className='md:max-w-[798px] m-auto'>
                            <p className="md:text-[20px] text-[16px]">If you’re intrigued by private football coaching and want to give it a try, we offer a discounted rate of £30 for your child’s initial trial session. This will also include an analysis of your child’s game, and our coach will be happy to discuss with you their thoughts on how best to approach 1-to-1 coaching sessions and what areas your child needs to focus on.  </p>

                        </div>
                    </div>

                </div>
                <div className="absolute bluedot1 -left-10 -bottom-5 max-w-[400px]">
                    <img src="/assets/blueDots.png" alt="" />
                </div>
                <div className="absolute bluedot2 -right-20 -top-5 max-w-[400px]">
                    <img src="/assets/blueDots2.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default CoachingSessions
