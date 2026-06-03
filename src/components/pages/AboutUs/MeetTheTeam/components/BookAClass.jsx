import React from 'react';
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";

const BookAClass = () => {
    const searchFormProps = useSearchForm();
    const { handleSearch, toasts, removeToast } = searchFormProps;
    return (
        <section
            className="relative  booked flex bg-cover items-center bg-[#0DD180]  bg-bottom py-[60px] "
            style={{ backgroundImage: `url('/assets/prospectusBanner.png')` }}
        ><div className="container">
                <Toast toasts={toasts} removeToast={removeToast} />
                <div className='max-w-[780px] m-auto bg-[#FDFDFF] p-8 rounded-3xl'>

                    <h4 className="light-blue-text text-center pb-8">Book a samba soccer class</h4>
                    <div className="bg-white yellowLine relative rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-7 ">

                        {/* Inputs */}
                        <form className="mb-6" onSubmit={handleSearch}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <CustomPostcodeInput
                                    {...searchFormProps}
                                    inputClassName="w-full h-[64px] px-6 rounded-xl border border-[#ECECF2] text-[#1C1C28] placeholder:text-[#5F5F6D] focus:outline-none focus:border-[#0DD180]"
                                />
                                <CustomVenueInput
                                    {...searchFormProps}
                                    inputClassName="w-full h-[64px] px-6 rounded-xl border border-[#ECECF2] text-[#1C1C28] placeholder:text-[#5F5F6D] focus:outline-none focus:border-[#0DD180]"
                                />
                            </div>

                            {/* Button */}
                            <div className="flex justify-center">
                                <button type="submit"
                                    className="bg-[#0DD180] w-full hover:bg-[#0BC46F] transition text-white font-bold text-[18px] poppins px-30 py-4 rounded-full"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default BookAClass;
