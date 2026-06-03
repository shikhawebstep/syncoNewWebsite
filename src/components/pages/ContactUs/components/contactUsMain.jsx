import React from "react";
import {
    MapPin,
    Mail,
    Phone,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Twitter,
} from "lucide-react";
import bannerImg from "/assets/howWork.png";

const SocialImages = [
    '/assets/Facebook.png',
    '/assets/LinkendIn.png',
    '/assets/Twitter.png',
    '/assets/Instagram.png',
    '/assets/YouTube.png',
]
const ContactUsMain = () => {
    return (
        <section className="py-[100px] relative min-h-[900px] bg-[#F9FAFB]">
            <div className="container absolute left-0 z-999 right-0 top-[-120px]   mx-auto max-w-[1200px] md:px-4">
                <div className="md:flex justify-center gap-10 items-stretch">

                    {/* LEFT CARD */}
                    <div className="md:w-[45%]  rounded-3xl shadow-lg md:p-10 p-6 flex flex-col justify-between"
                        style={{ backgroundImage: `url(${bannerImg})` }}>
                            <div className="bg-white md:p-10 p-5 rounded-3xl">
                        <div className="space-y-8 ">

                            {/* Address */}
                            <div className=" gap-4">
                                <img src="/assets/marker-02.png" className="w-12 h-12 mb-3" alt="" />
                                
                                <p className="text-[#042C89] font-semibold leading-relaxed">
                                    Samba Soccer Schools, 65–69 Shelton Street,
                                    <br />
                                    Covent Garden, London WC2H 9HE
                                </p>
                            </div>

                            {/* Email */}
                            <div className=" gap-4">
                                <img src="/assets/mail-03.png" className="w-12 h-12 mb-3" alt="" />
                                
                                <p className="text-[#042C89] font-semibold leading-relaxed">
                                    admin@sambasoccerschools.com
                                </p>
                            </div>

                            {/* Phone */}
                            <div className=" gap-4">
                                <img src="/assets/globe-01.png" className="w-12 h-12 mb-3" alt="" />
                                
                                <p className="text-[#042C89] font-semibold leading-relaxed">
                                    020 7205 2723
                                </p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-10">
                            {SocialImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
                                >
                                    <img
                                        src={src}
                                        alt="social icon"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="md:w-[55%] md:mt-0 mt-20 bg-white rounded-3xl shadow-lg p-10">
                        <form className="space-y-6">

                            <div>
                                <label className="block text-[14px] font-medium mb-2">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#F4F6F8] rounded-lg px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] font-medium mb-2">
                                    Telephone*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Telephone"
                                    className="w-full bg-[#F4F6F8] rounded-lg px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] font-medium mb-2">
                                    Email Address*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-[#F4F6F8] rounded-lg px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Enter a message..."
                                    className="w-full bg-[#F4F6F8] rounded-lg px-4 py-3 outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0DD180] text-[18px] text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <div className="container">
  <div className=" mx-auto md:mt-120  mt-290 overflow-hidden bg-white">
                            <iframe
                                title="St John Bosco College Map"
                                src="https://www.google.com/maps?q=St%20John%20Bosco%20College%20Parkham%20Street%20Battersea%20London%20SW11%203DQ&output=embed"
                                className="w-full h-[350px] md:h-[400px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
            </div>
        </section>
    );
};

export default ContactUsMain;
