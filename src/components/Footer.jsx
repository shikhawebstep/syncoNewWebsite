import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast, Toast } from "./pages/Common/Toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const handleSubscribe = async () => {
    if (!email.trim()) {
      addToast("Please enter your email", "warning");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast("Please enter a valid email", "warning");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.grabbite.com/api/open/join-our-mailing-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        addToast("Subscribed successfully!", "success");
        setEmail("");
      } else {
        const result = await response.json();
        addToast(result.message || "Something went wrong", "error");
      }
    } catch (error) {
      addToast("Request failed. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="bg-[#042C89] hidden md:block poppins text-white">
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* Middle Section */}
      <div className="max-w-[1360px] mx-auto py-18 flex border-b border-white gap-10 justify-between items-start">
        {/* Logo & Navigate */}
        <div className="md:w-3/12">
          <img src="/assets/whitelogo.png" className="w-[165px]" alt="Samba Soccer Schools" />
          <div className="mt-10">
            <h6 className="text-[#0DD180] poppins font-bold pb-4 uppercase tracking-wider text-base">NAVIGATE</h6>
            <div className="grid grid-cols-2 gap-x-6 text-[14px]">
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-[#0DD180] transition">About Us</Link></li>
                <li><Link to="/find-a-class" className="hover:text-[#0DD180] transition">Find A Class</Link></li>
                <li><a href="https://franchise.sambasoccerschools.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0DD180] transition">Franchise</a></li>
                <li><Link to="/contact" className="hover:text-[#0DD180] transition">Contact Us</Link></li>
              </ul>
              <ul className="space-y-3">
                <li><Link to="/services/weekly" className="hover:text-[#0DD180] transition">Services</Link></li>
                <li><Link to="/find-a-class" className="hover:text-[#0DD180] transition">Book Now</Link></li>
                <li><Link to="/about/reviews" className="hover:text-[#0DD180] transition">Reviews</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Service & Mailing List */}
        <div className="md:w-5/12">
          <h6 className="text-[#0DD180] poppins font-bold pb-4 uppercase tracking-wider text-base">CUSTOMER SERVICE</h6>
          <ul className="space-y-2 text-[14px]">
            <li><a href="https://sambasoccerschools.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0DD180] transition">Terms & Conditions</a></li>
            <li><a href="https://sambasoccerschools.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0DD180] transition">Privacy Policy</a></li>
          </ul>
          <div className="bg-[#fefefe1c] md:max-w-[520px] mt-6 p-6 rounded-2xl">
            <h6 className="font-bold pb-1 poppins text-[18px]">Join our Mailing List</h6>
            <p className="text-[13px] text-gray-200 mb-4">Sign-up for the SSS Newsletter</p>
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="p-3 px-4 rounded-full md:w-8/12 w-full bg-white text-black text-[14px] outline-none"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-[#0DD180] md:w-4/12 px-5 py-3 rounded-full text-white font-bold text-[14px] hover:bg-[#0bb972] transition disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="md:w-4/12 flex justify-end">
          <div className="contact-sec md:w-[370px] w-full p-6 py-14 rounded-2xl">
            <h6 className="font-bold poppins text-[22px] pb-1">Contact us</h6>
            <p className="text-[13px] text-gray-200 mb-6">We’d love to hear from you</p>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="tel:02072052723" className="flex gap-3 items-center hover:opacity-80 transition">
                  <img className="w-[30px] h-[30px]" src="/assets/Mobile.png" alt="Phone" />
                  <span>02072052723</span>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/QvzZpJrmoQo79WJFA" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:opacity-80 transition">
                  <img className="w-[30px] h-[30px]" src="/assets/Location.png" alt="Location" />
                  <span>Find Us On Google Maps</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@sambasoccerschools.com" className="flex gap-3 items-center hover:opacity-80 transition">
                  <img className="w-[30px] h-[30px]" src="/assets/Email.png" alt="Email" />
                  <span>admin@sambasoccerschools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="poppins text-center py-6 text-[13px] text-gray-300">
        © 2025, Samba Soccer Schools Global Ltd | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
