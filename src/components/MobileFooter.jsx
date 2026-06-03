import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast, Toast } from "./pages/Common/Toast";

const MobileFooter = () => {
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
    <footer className="bg-[#042C89] md:hidden block poppins text-white">
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* Middle Section */}
      <div className="container mx-auto  py-12 md:flex  gap-10">
        {/* Logo & Navigate */}
        <div className="md:w-3/12">
          <img src="/assets/whitelogo.png" className="w-[165px]" alt="" />
          <div className="md:mt-15 mb-5 mt-5">
            <h6 className="text-green-400 poppins font-bold pb-6">NAVIGATE</h6>
            <div className="flex gap-10">
              <ul className="space-y-1">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/find-a-class">Find a Class</Link></li>
                <li><Link to="/services/weekly">Services</Link></li>
                <li><Link to="/find-a-class">Book Now</Link></li>

              </ul>
              <ul>
                <li><Link to="/franchise">Franchise</Link></li>
                <li><Link to="/about/reviews">Reviews</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li></ul>
            </div>
          </div>
        </div>

        {/* Customer Service */}
        <div className="md:w-5/12">
          <h6 className="text-green-400 poppins font-bold pb-4">CUSTOMER SERVICE</h6>
          <ul className="space-y-1">
            <li><Link to="#">Terms & Conditions</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
          </ul>
          <div className="bg-[#fefefe1c] md:max-w-[480px] mt-6 p-6 rounded-2xl">
            <h6 className="font-bold pb-2 poppins">Join our Mailing List</h6>
            <p className="text-sm mb-3 pb-3 pt-1">Sign-up for the SSS Newsletter</p>
            <div className="md:flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="p-3 rounded-3xl md:w-6/12 w-full bg-white text-black"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-[#0DD180] p-3 mt-5 px-4 rounded-3xl w-full text-white font-bold disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Mailing List */}


        {/* Contact Us */}
        <div className="md:w-4/12 mt-10">
        <div className="contact-sec md:max-w-[334px]  p-6 py-10 rounded-xl m-auto">
          <h6 className="font-bold poppins pb-2">Contact us</h6>
          <p className="mb-8">We’d love to hear from you</p>
          <ul className="space-y-2">
            <li className="flex gap-3  text-[12px] items-center"><img className="w-[35px] h-[35px]" src="/assets/Mobile.png" alt="" /> 020 72052723</li>
            <li className="flex gap-3 text-[12px] items-center"><img className="w-[35px] h-[35px]" src="/assets/Location.png" alt="" /> Find us on Google Maps</li>
            <li className="flex gap-3 text-[12px] items-center"><img className="w-[35px] h-[35px]" src="/assets/Email.png" alt="" />info@sambasoccerschools.com</li>
          </ul>
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white poppins text-center p-8 text-[13px] text-sm">
        © 2023, Samba Soccer Schools Global Ltd | All Rights Reserved.
      </div>
    </footer>
  );
};

export default MobileFooter;
