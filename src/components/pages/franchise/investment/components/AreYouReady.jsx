import bannerImg from "/assets/bg-primary-texture.png";
const AreYouReady = () => {
    return (
        <section
            className=" bg-cover bg-top  py-[30px]  flex items-center relative overflow-hidden"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="container">
                <div className='max-w-[1330px] m-auto text-white md:flex  justify-between items-center'>
                    <div className='max-w-[740px] '>
                        <h1 className='permanent-marker md:text-[64px] text-[40px] text-[#0DD180] leading-[45px] '> <span className='recline text-white'>Are you </span>ready?</h1>
                        <p className='text-[18px] py-5'>So if you’ve come through all the nitty-gritty finance stuff and still feel confident that franchising with Samba Soccer Schools is right for you, let’s get going. Fill in the form below to signal your interest, and we’ll have someone in touch within 48 hours to talk you through the process and answer any questions you might have. </p>
                    </div>
                    <div><img src="/assets/ready.png" alt="" className="max-w-[500px" /></div>
                </div>
            </div>
        </section>
    )
}

export default AreYouReady
