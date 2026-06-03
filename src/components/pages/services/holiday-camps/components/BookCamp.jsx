import bannerImg from "/assets/serviceMainBannerCoach.png";

const BookCamp = () => {

    return (
        <section
            className="campBook bg-cover bg-top   pt-[190px] mt-[-159px]   flex items-center relative "
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="container mx-auto">
                <div className="md:text-center md:py-[100px] text-white max-w-[700px] m-auto">
                    <h3><span className="green-text">Book</span> Your  Holiday <br />
                        Football Camp Today!
                    </h3>
                    <p className="font-semibold py-6 leading-7">Our football camps are the perfect mix of fun, physical activity, and skills development - we know your child is going to love it. We have football camps across the London area - find your closest one by entering your postcode below. </p>
                   <div class="lg:w-[100%%] shadowBox bg-white p-8 relative rounded-3xl">

<div className="greenline absolute top-0 right-0 left-0 w-full max-w-[80%] m-auto h-[5px] bg-[#0DD180]"></div>

                            <form class="space-y-4">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ">
                                    <input type="text" placeholder="Enter your post code"
                                        class="w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D]  focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />

                                    <div className="relative w-full">
                                        <select
                                            className="
      w-full
      appearance-none
      px-4
      py-3
      pr-12
      rounded-md
      border
      border-gray-200
      shadow
      text-[#5F5F6D]
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      bg-white
    "
                                        >
                                            <option>Or select a Venue</option>
                                            <option>Venue 1</option>
                                            <option>Venue 2</option>
                                            <option>Venue 3</option>
                                        </select>

                                        {/* Custom dropdown icon */}
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                            <svg
                                                className="h-5 w-5 text-gray-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                <button type="submit"
                                    class="w-full bg-[#0DD180] hover:bg-green-600 poppins font-bold text-white py-2 rounded-full transition">
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
