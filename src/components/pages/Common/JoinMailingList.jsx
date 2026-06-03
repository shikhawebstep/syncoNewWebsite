import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const JoinMailList = () => {
    return (
        <section className='JoinMail my-10 py-5'>
            <div className="container">
                <div className=" py-6 px-6 md:flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h4 className="text-[36px] recline text-white font-bold">Join our Mailing List </h4>
                        <p className="text-[18px] font-semibold text-white">
                            Sign up for SSS Newsletter
                        </p>
                    </div>



                    {/* Shop Button */}
                    <div className="mt-4 md:mt-0 md:flex gap-4">
                        <div>
                            <input type="email" name="" className='bg-white md:min-w-[600px] w-full p-4  rounded-full' placeholder='Enter your Email' id="" />
                        </div>
                        <button className="flex items-center gap-2 md:w-fit w-full bg-[#042C89] text-[#fff] px-5 py-3 rounded-full md:mt-0 mt-5 text-[18px] font-semibold hover:bg-[#042C89] transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default JoinMailList
