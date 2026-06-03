import React from 'react';
import bannerImg from "/assets/bg-primary-texture.png";
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";

const Whyus = () => {
    const searchFormProps = useSearchForm();
    const { handleSearch, toasts, removeToast } = searchFormProps;
    return (
        <>
            <section
                className="weekly-whyus bg-cover bg-center lg:pt-[160px] pb-[80px] -mt-[110px] relative "
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <Toast toasts={toasts} removeToast={removeToast} />
                <div className="container mx-auto">
                    <div className="md:text-center pt-35 md:pt-0  text-white  recline md:max-w-[742px] m-auto">
                        <h3 className='text-[#0DD180] pb-3 text-left md:text-center'>
                            <span className="permanent-marker  md:mb-0 mb-5 text-white block">Why should <br className='md:hidden block' /> I  choose </span><span className='text-[50px] recline'>Your Weekly Classes?</span></h3>
                        <p className="font-normal md:text-[16px] leading-[26px] text-[15px] tracking-[0.2px]">
                            Where do we start? Weekly classes are an excellent way to develop skills on a
                            consistent basis, build confidence, make friends, establish a healthy routine,
                            and have a lot of fun along the way - but actions speak louder than words. Why not book
                            a free trial class with Samba Soccer Schools, and we’ll be more than happy to show you what we do. </p>

                    </div>
                    <div className="bg-white rounded-4xl mt-10 shadow-lg max-w-[700px] m-auto w-full p-7 relative">
                        <div className="absolute z-[999] top-0 left-0 w-[80%] right-0 h-[5px] md:bg-[#0DD180] bg-[#FFDE14] m-auto"></div>



                        <form className="space-y-4" onSubmit={handleSearch}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                                <CustomPostcodeInput
                                    {...searchFormProps}
                                    inputClassName="w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5f5f6d] focus:outline-none focus:ring-2 focus:ring-[#0DD180]"
                                />
                                <CustomVenueInput
                                    {...searchFormProps}
                                    inputClassName="w-full px-4 py-3 text-[#5f5f6d] rounded-md border border-gray-200 shadow text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180] pr-10"
                                />
                            </div>

                            <button type="submit"
                                className="w-full bg-[#0DD180] hover:bg-green-600 poppins font-bold text-white py-2 rounded-full transition">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus;
