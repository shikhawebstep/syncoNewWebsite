import bannerImg from "/assets/serviceMainBannerCoach.png";
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";

const BookCamp = () => {
    const searchFormProps = useSearchForm("/find-a-camp");
    const { handleSearch, toasts, removeToast } = searchFormProps;

    return (
        <section
            className="campBook bg-cover md:bg-top bg-bottom   pt-[190px] md:mt-[-159px]   flex items-center relative "
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <Toast toasts={toasts} removeToast={removeToast} />
            <div className="container mx-auto">
                <div className="md:text-center md:py-[70px] text-white max-w-[700px] m-auto">
                    <h3><span className="green-text">Book</span> Your  Holiday <br />
                        Football Camp Today!
                    </h3>
                    <p className="font-semibold py-6 leading-7">Our football camps are the perfect mix of fun, physical activity, and skills development - we know your child is going to love it. We have football camps across the London area - find your closest one by entering your postcode below. </p>
                   <div className="lg:w-[100%] shadowBox bg-white p-8 relative rounded-3xl">

<div className="greenline absolute top-0 right-0 left-0 w-full max-w-[80%] m-auto h-[5px] bg-[#0DD180]"></div>

                            <form className="space-y-4" onSubmit={handleSearch}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <CustomPostcodeInput
                                        {...searchFormProps}
                                        inputClassName="w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180]"
                                    />
                                    <CustomVenueInput
                                        {...searchFormProps}
                                        inputClassName="w-full px-4 py-3 pr-12 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180]"
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
    );
};

export default BookCamp;
