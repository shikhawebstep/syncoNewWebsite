import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const TopFooter = () => {
  return (
    <section className='top-footer py-5'>
      <div className="container">
          <div className=" md:py-6 md:px-6 flex flex-col md:flex-row items-center md:gap-10 gap-5 justify-between">
        <div>
          <h4 className="text-[36px] recline text-white font-bold">Let’s be friends</h4>
          <p className="text-[18px] font-semibold text-white">
            If we are not playing football you can <br className="md:block hidden" /> find us socialising on...
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:w-fit w-full md:mt-0">
          <a href="#" className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl">
            <FaYoutube />
          </a>
          <a href="#" className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl">
            <FaTwitter />
          </a>
        </div>

        {/* Shop Button */}
        <div className="mt-4 md:w-fit w-full md:mt-0">
          <button className="flex items-center md:w-fit w-full text-center justify-center  gap-2 bg-white text-[#00A6E3] px-5 py-3 rounded-full text-[18px] font-semibold hover:bg-gray-200 transition">
            <FaShoppingCart /> Shop Online
          </button>
        </div>
      </div>

      </div>
    </section>
  )
}

export default TopFooter
