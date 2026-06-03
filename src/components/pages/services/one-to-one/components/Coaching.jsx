import React from 'react'

const Coaching = () => {
    return (
        <section className='md:py-[100px] px-4 md:px-0 py-[100px] pt-0'>
            <div className="container  mx-auto">
                <div className="md:flex relative lg:max-w-[1100px] m-auto justify-between flex-col lg:flex-row">

                    {/* Content */}
                    <div className="max-w-[675px] ms-auto order-1 lg:order-2">
                        <h3 className="small blue-text">
                            1 to 1 Football coaching for <br /> kids aged 4–16 in London
                        </h3>
                        <div className='max-w-[676px]'>
                            <p className="text-[#5F5F6D] mt-5 text-[15px] leading-[28px]">
                                Football is a team game, perfected by playing together, but work done on an individual
                                level can make all the difference.
                            </p>

                            <p className="text-[#5F5F6D] mt-5 text-[15px] leading-[28px]">
                                Whether your child has professional potential that needs fine-tuning or simply loves football so
                                much they just want to keep playing, private 1-2-1 football coaching with Samba Soccer Schools
                                can quickly develop ability, establish greater confidence, and teach children how to play the beautiful
                                game the Brazilian way, through flair and fun.
                            </p>

                            <p className="text-[#5F5F6D] mt-5 text-[15px] leading-[28px]">
                                We offer private 1-2-1 football classes in the London area for children aged between 4 and <br className='hidden md:block'/> 16,
                                with each session tailored specifically to the child’s level and personalised goals.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-2 lg:order-1 static lg:absolute w-full lg:w-[622px] mt-6 lg:mt-0 lg:-left-30 lg:-top-30">
                        <img src="/assets/kid.png" alt="" className="mx-auto" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Coaching
