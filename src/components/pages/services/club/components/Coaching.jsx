import React from 'react'

const Coaching = () => {
    return (
        <section className='py-[60px] '>
            <div className="container mx-auto">
                <div className="md:flex relative lg:max-w-[1100px] m-auto justify-between">
                    <div className=' order-1 lg:order-2 max-w-[675px] ms-auto'>
                        <h3 className="small glorytext blue-text">
                            Playing for glory with Samba Soccer FC
                        </h3>
                        <p className='text-[#5F5F6D] mt-5'>Are you looking for competitive football for your child? Think they’ve got what it takes to join one of the most exciting teams around?

                        </p> <p className='text-[#5F5F6D] mt-5'>We’ve got 13 years' worth of experience in football coaching, so we thought we’d better put it all to good use. Samba Soccer FC is our very own football club, with Brazilian style running through its veins.
                        </p>
                        <p className='text-[#5F5F6D] mt-5'>
                            We offer weekly training and fortnightly matches for teams to compete in a FA Youth League 7v7. It’s competitive football but still fun - everybody is welcome to try out, but unfortunately, we can only pick those with exceptional football abilities.
                        </p>
                        <p className='text-[#5F5F6D] mt-5'>
                            Think your child has what it takes to join?
                        </p>
                        <p className='text-[#5F5F6D] mt-5'>
                            Book your child into a free open trial, and we’ll see what they’ve got. </p>

                        <button className="text-white p-2 px-4 mt-4 font-semibold rounded-full bg-[#042C89] poppins text-[16px] ">Book now</button>
                    </div>
                    <div className=' order-2 lg:order-1 md:absolute md:w-[622px] -left-[15%] -top-30'><img src="/assets/ricoriba.png" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Coaching
