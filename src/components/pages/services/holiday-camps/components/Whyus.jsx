import React from 'react';
import bannerImg from "/assets/howWork.png";
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";

const Whyus = () => {
    const searchFormProps = useSearchForm("/find-a-camp");
    const { handleSearch, toasts, removeToast } = searchFormProps;
    return (
        <>
            <section
                className=" bg-cover bg-center bg-[#0dd180] lg:py-[60px] py-20  relative "
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <Toast toasts={toasts} removeToast={removeToast} />
                <div className="container mx-auto">
                    <div className="md:flex items-center justify-between gap-10 rounded-2xl bg-[#FDFDFF] md:p-10 p-5 max-w-[1250px] mx-auto">
                        <div className="md:text-left text-white  recline md:w-[67%]">
                            <h2 className='md:text-left text-center text-[#0DD180] md:text-[56px] text-[34px] pb-3  text-[#042C89] recline '>Book Your<span className="permanent-marker  text-[#0DD180]"> Holiday </span><br className='onlyDesktop' />
                            <span className="permanent-marker  text-[#0DD180]">Football Camp </span>Today!</h2>
                            <p className="text-[#797A88] tracking-[0.2px] leading-[28px] pb-5">
                                If you’re growing tired or frustrated at constantly thinking about what your child will do over the school break, let us take the reins. A holiday camp with Samba Soccer Schools is the perfect setting for any child who loves football. We provide entertaining, exercise-driven football camps where children can quickly boost their development and confidence while having the time of their lives.
                            </p>
                            <p className='text-[#042C89] md:py-0 py-5 recline text-[18px]'>Enter your postcode to find the nearest holiday camp to you.</p>


                        </div>
                        <div className="lg:w-[33%] shadowBox bg-white md:p-8 rounded-3xl p-4">



                            <form className="space-y-4" onSubmit={handleSearch}>
                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                                    <CustomPostcodeInput
                                        {...searchFormProps}
                                        inputClassName="w-full appearance-none rounded-lg border-2 px-4 py-3 bg-white text-[#5F5F6D] border-[#E5E7EB] placeholder:text-[#5F5F6D] focus:outline-none focus:border-[#0DD180]"
                                    />
                                    <CustomVenueInput
                                        {...searchFormProps}
                                        inputClassName="w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white text-[#5F5F6D] border-[#E5E7EB] placeholder:text-[#5F5F6D] focus:outline-none focus:border-[#0DD180]"
                                    />
                                </div>

                                <button type="submit"
                                    className="w-full bg-[#0DD180] hover:bg-green-600 poppins font-bold text-white py-2 rounded-full transition">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus;
