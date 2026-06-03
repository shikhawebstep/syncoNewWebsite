import bannerImg from "/assets/bg-primary-texture.png";

const BookCamp = () => {

    return (
        <section
            className=" bg-cover bg-top  py-[90px]  flex items-center relative overflow-hidden"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="container mx-auto ">
                <div className="grid lg:grid-cols-2 lg:max-w-[1175px] gap-12 m-auto">
                    <div className="text-white text-left">
                        <h3> <span className="text-[#0DD180] permanent-marker block">How can I book</span> my child a football birthday party in London?</h3>
                        <p className="text-[20px] md:pr-12">We know how important flexibility is, which is why we offer two birthday party packages to choose from. Please bear in mind that packages do not include any venue hire or food and drink.   </p>
                    </div>


                    <div className="grid md:grid-cols-2  gap-6">
                        <div
                            className="
    relative bg-white rounded-2xl p-6 pt-10
    before:content-['']
    before:absolute
    before:top-0
    before:left-1/2
    before:-translate-x-1/2
    before:w-[70%]
    before:h-[10px]
    before:rounded-full
    before:bg-gray-300
  "
                        >
                            <img className='w-[175px]' src="/assets/silverball.png" alt="" />
                            <div className='text-left'>
                                <h5 className='permanent-marker blue-text font-semibold pt-5'>SILVER</h5>
                                <p className="text-[20px] text-[#9E9FAA] font-bold uppercase">package</p>
                                <p className="text-[14px] text-[#9E9FAA] pt-4 pb-2">Our silver birthday party package includes:</p>
                                <ul>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />Up to 12 friends</li>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />1 enthusiastic Samba Soccer coach</li>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />1 hour 15 mins Birthday Party</li>
                                    <li className="text-[#5F5F6D] mb-[60px] tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />Branded invitations</li>
                                </ul>

                                <h4 className="medium recline text-[#00A6E3] absolute bottom-3"><span className='text-[20px] text-[#9E9FAA] recline '>cost </span>£175 </h4>
                            </div>
                        </div>
                        <div
                            className="
    relative bg-white rounded-2xl p-6 pt-10
    before:content-['']
    before:absolute
    before:top-0
    before:left-1/2
    before:-translate-x-1/2
    before:w-[70%]
    before:h-[10px]
    before:rounded-full
    before:bg-[#FFDE14]
  "
                        >


                            <img className='w-[175px]' src="/assets/goldball.png" alt="" />
                            <div className='text-left'> 
                                <h5 className='permanent-marker blue-text font-semibold pt-5'>GOLD</h5>
                                <p className="text-[20px] text-[#9E9FAA] font-bold uppercase">
                                    package</p>

                                <p className="text-[14px] text-[#9E9FAA] pt-4 pb-2">Our silver birthday party package includes:</p>
                                <ul>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />Up to 20 friends</li>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />2 enthusiastic Samba Soccer coaches</li>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />1 hour 30mins Birthday Party</li>
                                    <li className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />Branded invitations</li>
                                    <li className="text-[#5F5F6D] mb-[60px] tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />Medals for competition winners</li>
                                </ul>
                                <h4 className="medium recline text-[#00A6E3] absolute bottom-3"><span className='text-[20px] text-[#9E9FAA] recline '>cost </span>£310 </h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="absolute bluedot1 -left-10 -bottom-5 max-w-[400px]">
                <img src="/assets/blueDots.png" alt="" />
            </div>
            <div className="absolute  bluedot1 -right-20 -top-5 bluedot1 max-w-[400px]">
                <img src="/assets/blueDots2.png" alt="" />
            </div>
        </section>
    );
};

export default BookCamp;
