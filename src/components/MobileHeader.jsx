import React, { useState, useEffect } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const mobileMenu = [
  {
    label: "Home",
    to: "/",
    icon: '/assets/home.png',
  },
  {
    label: "Find a Class",
    to: "/find-a-class",
    icon: '/assets/class.png',
  },
  {
    label: "Services",
    to: "/services",
    icon: '/assets/services.png',
    children: [
      { label: "Weekly Classes", to: "/services/weekly" },
      { label: "Holiday Camps", to: "/services/camps" },
      { label: "One-to-one Training", to: "/services/training" },
      { label: "Birthday Parties", to: "/services/parties" },
      { label: "Club", to: "/services/club" },
    ],
  },
  {
    label: "About Us",
    to: "/about",
    icon: '/assets/about.png',
    children: [
      { label: "Meet the Team", to: "/about/team" },
      { label: "SSS Uniform", to: "/about/uniform" },
      { label: "London Venues", to: "/about/venues" },
      { label: "Reviews", to: "/about/reviews" },
    ],
  },
  {
    label: "Franchise",
    to: "/franchise",
    icon:'/assets/franchise.png',
    children: [
      { label: "Investment", to: "/franchise/investment" },
      { label: "Support", to: "/franchise/support" },
      { label: "Ideal Candidate", to: "/franchise/ideal" },
      { label: "Case Study", to: "/franchise/case-study" },
    ],
  },
  {
    label: "Coaching",
    to: "/coaching",
    icon: '/assets/coaching.png',
    children: [
      { label: "Become a Coach", to: "/coaching/coach" },
      { label: "Venue Manager", to: "/coaching/manager" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    icon: '/assets/contact.png',
  },
];

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleSubMenu = (label) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };
  useEffect(() => {
    const activeMenu = mobileMenu.find(item =>
      location.pathname.startsWith(item.to)
    );

    if (activeMenu?.children) {
      setOpenSubMenu(activeMenu.label);
    }
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isActivePath = (to) => {
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  return (
    <>
      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-[9999999999999999] bg-[#0f3c9e] bg-[url('/assets/header-bg.webp')] bg-cover bg-center transform transition-transform duration-300 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white z-10"
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="pt-16 px-8 text-white">
          <nav className="space-y-0">
            {mobileMenu.map((item) => {
              const active = isActivePath(item.to);
              return (
                <div key={item.label}>
                  <div
                    className="flex recline items-center justify-between p-3"
                  >
                    <div className="flex items-center gap-3">

                       {/* Icon click → toggle OR navigate */}
                      <span
                        onClick={() => {
                          if (item.to === "/services") {
                            toggleSubMenu(item.label);
                          } else if (item.children) {
                            if (openSubMenu === item.label) {
                              navigate(item.to); // second click → redirect
                            } else {
                              setOpenSubMenu(item.label); // first click → open
                            }
                          } else {
                            navigate(item.to);
                            setOpen(false);
                          }
                        }}
                        className={active ? "text-[#FFDE14] cursor-pointer" : "text-white/70 cursor-pointer"}
                      >
                      <img
  src={item.icon} 
  className={`w-5 ${active ? "filter-yellow" : ""}`}
/>
                      </span>

                      {/* Text click → ALWAYS redirect */}
                      <span
                        onClick={() => {
                          if (item.to === "/services") {
                            toggleSubMenu(item.label);
                          } else {
                            navigate(item.to);
                            setOpen(false);
                          }
                        }}
                        className={`text-[16px] recline font-bold tracking-widest relative mobileheader uppercase cursor-pointer ${active ? "text-[#FFDE14] active" : "text-white notactive"
                          }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* Arrow toggle */}
                    {item.children && (
                      <span
                        onClick={() => toggleSubMenu(item.label)}
                        className="recline text-white/60 text-xs cursor-pointer"
                      >
                        {openSubMenu === item.label ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {/* Sub Menu */}
                  {item.children && openSubMenu === item.label && (
                    <div className="ml-8 mb-2 space-y-2">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className={`recline block text-sm tracking-wider ${isActivePath(child.to) ? "text-[#FFDE14]" : "text-white"
                            }`}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Card */}
          <div className="mt-8 mb-4 relative">
            {/* Yellow card */}
           <div style={{ backgroundImage: `url('/assets/mobileBanner.png')` }} className="rounded-2xl bg-cover bg-center p-8 relative overflow-hidden">
              {/* Green blob decoration */}
            
              <h4 className="text-[#042C89] permanent-marker font-black text-2xl leading-tight relative z-10"
                
              >
                Book a<br />Free Trial
              </h4>
              <button 
                onClick={() => {
                  setOpen(false);
                  navigate("/find-a-class");
                }}
                className="mt-4 relative z-10 bg-[#042C89] text-white rounded-full px-6 py-2.5 text-[18px] font-semibold w-full"
              >
                Book a Free Trial
              </button>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:02072052723"
            className="flex items-center justify-center recline gap-2 bg-white text-[#042C89] rounded-full py-3 mb-3 font-semibold text-[20px]"
          >
            <img src="/assets/phonemb.png" className="w-4" alt="" /> 020 72052723
          </a>

          {/* Login */}
          <button className="w-full bg-[#FFDE14] text-[#042C89] rounded-full py-3 font-bold text-[18px] recline mb-8">
            Log In
          </button>
        </div>
      </div>

      {/* Top Mobile Header Bar */}
      <header
        className={`mobileHeader ${isHome ? "homeHeader" : ""
          } md:hidden  top-0 left-0 w-full z-[90]`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-transparent">
          <NavLink to="/">
            <img src="/assets/SambaLogo.png" alt="Logo" className="h-10" />
          </NavLink>
          <button onClick={() => setOpen(true)}>
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;