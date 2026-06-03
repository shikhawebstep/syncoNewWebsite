import React from 'react';
import bannerImg from "/assets/whyus.png";
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";

const Chooseus = () => {
    const searchFormProps = useSearchForm();
    const { handleSearch, toasts, removeToast } = searchFormProps;
    return (
        <>
            <section
                className=" whyShoulIChoose bg-cover bg-center bg-[#0dd180]  lg:p-[30px] relative "

            >
                <div className="container mx-auto py-[30px]">
                    <Toast toasts={toasts} removeToast={removeToast} />
                    <div className="md:flex items-center justify-between gap-10 rounded-2xl bg-[#FDFDFF] md:p-10 p-5 md:max-w-[90%] mx-auto">
                        <div className="text-left text-white  recline md:w-[64%] md:pb-0 pb-6">
                            <h4 className='text-[#0DD180] pb-3 small '><span className="permanent-marker block text-[#0DD180]">Why should <br  className='block md:hidden'/> I choose </span><span className=' text-[#042C89] recline'>Your Weekly Football Classes?</span></h4>
                            <p className="text-[#797A88] tracking-[0.2px] pb-5">
                                We believe football should be taught regularly and in a way that allows children to express themselves, build confidence, develop skills, make friends, and have the time of their lives while doing it. Weekly classes with Samba Soccer Schools provide just this. An hour a week of fun, action-packed, samba-filled, breathtaking football that your child is going to adore.

                            </p>

                            <p className="text-[#797A88] " >Still not sure? Why not book a free trial class with Samba Soccer Schools? We’ll be more than happy to show you what we do and why we’re the best.</p>

                        </div>
                        <div className="lg:w-[37%] shadowBox bg-white p-8 rounded-3xl">



                            <form className="space-y-4" onSubmit={handleSearch}>
                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 mt-4 ">
                                    <CustomPostcodeInput
                                        {...searchFormProps}
                                        inputClassName="w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180]"
                                    />
                                    <CustomVenueInput
                                        {...searchFormProps}
                                        inputClassName="w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180] pr-10"
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

export default Chooseus;
