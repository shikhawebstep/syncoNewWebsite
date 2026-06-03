import React, { useState ,useEffect} from "react";

import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const mobileMenu = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Find a Class",
    to: "/find-a-class",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Services",
    to: "/services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="7" r="2" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M19 21v-1a2 2 0 00-2-2" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    children: [
      { label: "Become a Coach", to: "/coaching/coach" },
      { label: "Venue Manager", to: "/coaching/manager" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
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
        className={`fixed inset-0 z-[9999999999999999] bg-[#0f3c9e] bg-[url('/assets/header-bg.webp')] bg-cover bg-center transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
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
        <div className="pt-16 px-5 text-white">
          <nav className="space-y-0">
            {mobileMenu.map((item) => {
              const active = isActivePath(item.to);
              return (
                <div key={item.label}>
               <div
  className="flex recline items-center justify-between py-3"
>
  <div className="flex items-center gap-3">
    
    {/* Icon click → toggle OR navigate */}
    <span
      onClick={() => {
        if (item.children) {
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
      {item.icon}
    </span>

    {/* Text click → ALWAYS redirect */}
    <span
      onClick={() => {
        navigate(item.to);
        setOpen(false);
      }}
      className={`text-sm recline font-bold tracking-widest relative mobileheader uppercase cursor-pointer ${
        active ? "text-[#FFDE14] active" : "text-white notactive"
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
  className={`recline block text-xs tracking-wider uppercase py-1.5 ${
    isActivePath(child.to) ? "text-[#FFDE14]" : "text-white/80"
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
            <div className="bg-[#FFDE14] rounded-2xl p-5 relative overflow-hidden">
              {/* Green blob decoration */}
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-[#4cd137] rounded-bl-[60px] rounded-tr-2xl opacity-90"
              />
              <p className="text-[#042C89] permanent-marker font-black text-2xl leading-tight relative z-10"
                style={{ fontFamily: "", fontStyle: "italic" }}
              >
                Book a<br />Free Trial
              </p>
              <button className="mt-4 relative z-10 bg-[#042C89] text-white rounded-full px-6 py-2.5 text-sm font-semibold w-full">
                Book a Free Trial
              </button>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:02072052723"
            className="flex items-center justify-center gap-2 bg-white text-[#042C89] rounded-full py-3 mb-3 font-semibold text-sm"
          >
            📞 020 72052723
          </a>

          {/* Login */}
          <button className="w-full bg-[#FFDE14] text-[#042C89] rounded-full py-3 font-bold text-sm mb-8">
            Log In
          </button>
        </div>
      </div>

      {/* Top Mobile Header Bar */}
      <header
        className={`mobileHeader ${
          isHome ? "homeHeader" : ""
        } md:hidden fixed top-0 left-0 w-full z-[90]`}
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