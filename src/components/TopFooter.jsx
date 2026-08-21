import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

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
          <a
            href="https://www.facebook.com/sambasoccerschools"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl hover:scale-110 transition-transform"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sambasoccer_uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtt-dIsSs2zi_IIUm0-BmUQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl hover:scale-110 transition-transform"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/company/samba-soccer-schools"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl hover:scale-110 transition-transform"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/Samba_Soccer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bg-white w-[47px] h-[47px] rounded-full text-[#0DD180] flex justify-center items-center text-xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Shop Button */}
        <div className="mt-4 md:w-fit w-full md:mt-0">
          <a
            href="https://shop.sambasoccerschools.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:w-fit w-full text-center justify-center gap-2.5 bg-white text-[#00A6E3] px-6 py-3 rounded-full text-[18px] font-semibold hover:bg-gray-100 transition"
          >
            <img
              src="/assets/cart.png.webp"
              alt="Cart"
              className="w-[20px] h-[20px] object-contain"
            />
            <span>Shop Online</span>
          </a>
        </div>
      </div>

      </div>
    </section>
  )
}

export default TopFooter
