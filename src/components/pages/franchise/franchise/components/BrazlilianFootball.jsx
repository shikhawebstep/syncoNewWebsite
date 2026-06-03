import React from 'react'

const BrazlilianFootball = () => {
    return (
        <section className='py-[40px]'>
            <div className="container">
              <div className="flex flex-col-reverse md:flex-row items-center">
    <div className="image-sec md:flex justify-end md:w-6/12">
        <div className="playboy-img md:max-w-[550px]">
            <img className='onlyDesktop' src="/assets/kidPlaying.png" alt="" />
            <img className='onlyMobile' src="/assets/ricoriba.png" alt="" />
            
        </div>
    </div>

    <div className="right-side-content md:w-6/12 max-w-[680px] text-left">
        <h4 className="recline blue-text md:text-[48px] text-32 tracking-[-1px]">
            Start Your Football Franchise With Samba Soccer Schools
        </h4>

        <p className="text-[14px] text-[#5F5F6D] mt-3">
            Have you ever thought about starting your own children’s football coaching business? But felt put off by the complicated setup process and high-level market competition? Franchising through Samba Soccer Schools allows you to hurdle those arduous steps by providing the tools and expertise needed to succeed - and do it quickly. 
        </p>

        <p className="text-[14px] text-[#5F5F6D] my-3">
            Our franchise business model offers a comprehensive setup package to help you create your successful children’s football coaching business - and includes the following:
        </p>

        <ul>
            <li className="text-[#5F5F6D] flex gap-2 text-[15px] items-center">
                <img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />
                Expert support and guidance
            </li>
            <li className="text-[#5F5F6D] flex gap-2 text-[15px] items-center">
                <img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />
                Professional coaching syllabus
            </li>
            <li className="text-[#5F5F6D] flex gap-2 text-[15px] items-center">
                <img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />
                Trusted Samba Soccer Schools brand
            </li>
            <li className="text-[#5F5F6D] flex gap-2 text-[15px] items-center">
                <img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />
                Synco - Our purpose-built CRM software package
            </li>
        </ul>

        <button className="bg-[#0DD180] text-white px-4 mt-4 p-2.5 text-[16px] poppins font-semibold rounded-full">
            Apply Today
        </button>
    </div>
</div>

            </div>
        </section>
    )
}

export default BrazlilianFootball
