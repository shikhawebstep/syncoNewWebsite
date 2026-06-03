import React from 'react';
import bannerImg from "/assets/whyus.png";
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";

const Whyus = () => {
    const searchFormProps = useSearchForm();
    const { handleSearch, toasts, removeToast } = searchFormProps;
    return (
        <>
            <section
                className=" bg-cover bg-center bg-[#0dd180] lg:p-[60px] py-10 relative "
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <Toast toasts={toasts} removeToast={removeToast} />
                <div className="container mx-auto">
                    <div className="md:flex items-center justify-between gap-10 rounded-2xl bg-[#FDFDFF] md:p-10 p-5 max-w-[1190px] mx-auto">
                        <div className="text-left text-white  recline md:w-[67%]">
                            <h4 className='text-[#0DD180] pb-3 small text-[#042C89] recline '>Try out our free class for<span className="permanent-marker  text-[#0DD180]"> free!</span></h4>
                            <p className="text-[#797A88] tracking-[0.2px] pb-5">
                                We could go on and on about why you should bring your child to a session with Samba Soccer Schools, but why not try it out for free instead? Book a no-strings-attached free trial with us today, and we’ll show you all the fuss.
                            </p>


                        </div>
                        <div class="lg:w-[33%] shadowBox bg-white md:p-8 rounded-3xl p-4">



                            <form className="space-y-4" onSubmit={handleSearch}>
                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                                    <CustomPostcodeInput
                                        {...searchFormProps}
                                        inputClassName="w-full appearance-none rounded-lg border-2 px-4 py-3 bg-white text-[#5F5F6D] border-[#E5E7EB] placeholder:text-[#5F5F6D] focus:outline-none focus:border-[#0DD180]"
                                    />
                                    <CustomVenueInput
                                        {...searchFormProps}
                                        inputClassName="w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white text-[#5F5F6D] border-[#E5E7EB] focus:outline-none focus:border-[#0DD180]"
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
