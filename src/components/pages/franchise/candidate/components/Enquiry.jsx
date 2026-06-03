import FranchiseForm from '../../../Common/FranchiseForm'

const Enquiry = () => {
    return (
        <section className='py-[80px] relative overflow-hidden'>
            <div className="container">
                <div className="md:flex justify-between max-w-[1200px] m-auto gap-10">
                    <div className='md:w-[430px]  text-center md:text-left'>
                        <h3 className="text-[18px]  permanent-marker font-normal text-[#00A6E3]">
                            Step 1
                            <span className='recline block blue-text' >Enquire Today</span>
                        </h3>
                        <p className="text22 text-[#797A88] mt-5 ">
                            Your Samba Soccer Schools franchise journey begins here. Simply fill out the form below, and we’ll be in touch within 48 hours to answer any questions and get you started on your franchise journey.
                        </p>
                    </div>
                    <div className='md:w-[690px] md:mt-0 mt-10 bg-white shadowBox rounded-2xl relative z-50'>
                        <FranchiseForm />

                    </div>
                </div>
            </div>
            <div className="absolute md:top-[40%] top-[85%]  md:left-[30%] left-[-50%] max-w-[400px]">
                <img src="/assets/blueDots1.png" alt="" />
            </div>

            <div className="absolute md:-right-0 right-[-150px] md:-top-5 top-[-150px] max-w-[400px]">
                <img src="/assets/blueDots1.png" alt="" />
            </div>
        </section>
    )
}

export default Enquiry
