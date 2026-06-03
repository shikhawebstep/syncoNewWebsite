import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#042C89] hidden md:block poppins text-white">

      {/* Middle Section */}
      <div className="container mx-auto px-6 py-12 flex  gap-10">
        {/* Logo & Navigate */}
        <div className="md:w-3/12">
          <img src="/assets/whitelogo.png" className="w-[165px]" alt="" />
          <div className="mt-15">
            <h6 className="text-green-400 poppins font-bold pb-6">NAVIGATE</h6>
            <div className="">
              <ul className="space-y-1 grid grid-cols-2 justify-between">
                <li><a href="#">About us</a></li>
                <li><a href="#">Franchise</a></li>
                <li><a href="#">Find a Class</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Book Now</a></li>
                <li><a href="#">Contact Us</a></li>

              </ul>
               
            </div>
          </div>
        </div>

        {/* Customer Service */}
        <div className="md:w-5/12">
          <h6 className="text-green-400 poppins font-bold pb-4">CUSTOMER SERVICE</h6>
          <ul className="space-y-1">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className="bg-[#fefefe1c] md:max-w-[680px] mt-6 p-6 rounded-2xl">
            <h6 className="font-bold pb-2 poppins">Join our Mailing List</h6>
            <p className="text-sm mb-3 pb-3 pt-1">Sign-up for the SSS Newsletter</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-3 rounded-3xl md:w-9/12 w-full bg-white text-black"
              />
              <button className="bg-[#0DD180] md:w-3/12 px-4 rounded-3xl text-white font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Mailing List */}


        {/* Contact Us */}
        <div className="md:w-4/12">
        <div className="contact-sec md:max-w-[354px]  p-6 py-10 rounded-[20px] m-auto">
          <h6 className="font-bold poppins pb-2">Contact us</h6>
          <p className="mb-8">We’d love to hear from you</p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3 items-center"><img className="w-[35px] h-[35px]" src="/assets/Mobile.png" alt="" /> 020 72052723</li>
            <li className="flex gap-3 items-center"><img className="w-[35px] h-[35px]" src="/assets/Location.png" alt="" /> Find us on Google Maps</li>
            <li className="flex gap-3 items-center"><img className="w-[35px] h-[35px]" src="/assets/Email.png" alt="" />info@sambasoccerschools.com</li>
          </ul>
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white poppins text-center py-8 text-[13px] text-sm">
        © 2023, Samba Soccer Schools Global Ltd | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
