import React from 'react'

const ChildSection = () => {
    return (
        <section className='md:py-[60px] '>
            <div className="container  mx-auto">
                <div className="md:flex items-center relative lg:max-w-[1200px] m-auto justify-between">
                    <div className='order-1 lg:order-2 max-w-[660px] ms-auto'>
                        <h3 className="text44 blue-text">
                            Keeping your child engaged and energised during the school break with Samba Soccer Schools
                        </h3>
                        <p className='text-[#5F5F6D] text-[14px] mt-5'>School holidays can be difficult for parents, and juggling work commitments with trying to keep children entertained is a frequent challenge.</p>

                        <p className='text-[#5F5F6D] text-[14px] mt-5'>Football camps with Samba Soccer Schools are designed to take the pressure off parents by providing children of all abilities aged 4-12 with intensive football coaching during the school holidays.
                        </p>
                        <p className='text-[#5F5F6D] text-[14px] mt-5'>Our camps are a perfect way for children to stay healthy and active while away from school, improving their football skills, teaching them traditional Brazilian flair, and helping them make new friends. Sound good to you? Book now and see the dramatic change that a football camp can have first-hand.    </p>
                        <button className="text-white poppins rounded-4xl px-6 py-3 mt-3 text-[16px] font-medium bg-[#0DD180]">
                            Book now
                        </button>
                    </div>
                    <div className='w-full order-2 lg:order-1' ><img src="/assets/kidPlaying.png" alt="" /></div>

                </div>
            </div>
        </section>
    )
}

export default ChildSection
