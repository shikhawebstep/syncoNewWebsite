import React from 'react'

const ChildSection = () => {
    return (
        <section className='pt-[90px] pb-[70px]'>
            <div className="container  mx-auto">
                <div className="md:flex items-center relative lg:max-w-[1200px] m-auto justify-between">
                   
                    <div className='max-w-[730px] ms-auto order-1 lg:order-2'>
                        <h3 className="text44 blue-text">
                            Football birthday parties in London with Samba Soccer Schools
                        </h3>
                        <p className='text-[#5F5F6D] text-[14px] mt-5'>
                            Are you looking for that perfect, stress-free birthday party for your child that everybody at school will be talking about? Welcome to the world of Samba Soccer Schools birthday parties - where Brazilian football is the name of the game, and everybody rocks to the samba beat with huge smiles on their faces.
                        </p>

                        <p className='text-[#5F5F6D] text-[14px] mt-5'>These are birthday parties like you’ve never seen. Forget all that preparation hassle, the overpriced clown, and the hours of cleanup. Letting Samba Soccer Schools throw your child’s birthday party lets you sit back and enjoy yourself for once. </p>
                        <p className='text-[#5F5F6D] text-[14px] mt-5'>With plenty of games, competitions, and challenges, this is one birthday party your child won’t be forgetting any time soon.   </p>
                        <button className="text-white poppins rounded-full px-6 py-2.5 mt-6 text-[16px] font-medium bg-[#042C89]">
                            Enquire Today
                        </button>
                    </div>
                     <div className=' order-2 lg:order-1 lg:absolute w-full lg:w-[560px] -left-[18%]'><img src="/assets/ricoriba.png" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default ChildSection
