import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
  const navigate= useNavigate();
    const isActive = (target) => path === target;

    return (
        <header className='desktopHeader hidden md:block'>
            <div className='container'>
                <div className='flex gap-7 justify-between m-auto items-center max-w-[800px]'>

                    {/* Left Menus */}
                    <div className='left-menus min-h-[120px] flex flex-col justify-between'>
                        <div className='topbar'>
                            <button className='bg-white recline blue-text px-4 flex items-center gap-2 rounded-3xl p-2'>
                                <img className='w-5' src="/assets/phone.png" alt="Phone Icon" /> 020 72052723
                            </button>
                        </div>
                        <div className='bottombar'>
                            <nav>
                                <ul className="flex gap-10 text-white relative">
                                    <li className={isActive('/') ? 'text-yellow-300 font-bold active-tab' : 'text-[#FDFDFF]'}>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className={isActive('/find-a-class') ? 'text-yellow-300 font-bold active-tab' : 'text-[#FDFDFF]'}>
                                        <NavLink to="/find-a-class">Find a Class</NavLink>
                                    </li>

                                    {/* Dropdown: Services */}
                                    <li className="group relative ">
                                        <span
                                            className={path.startsWith('/services') ? 'text-yellow-300 font-bold active-tab cursor-pointer' : 'text-[#FDFDFF] cursor-pointer'}
                                        >
                                            Services
                                        </span>
                                        <ul
                                            className="absolute left-0 z-999999999 hidden group-hover:block bg-[#164fa6] bg-[url('/assets/header-bg.webp')] bg-cover bg-center rounded-lg shadow-lg  w-48 max-w-48"
                                        >
                                            <li><NavLink to="/services/weekly" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Weekly Classes</NavLink></li>
                                            <li><NavLink to="/services/camps" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Holiday Camps</NavLink></li>
                                            <li><NavLink to="/services/training" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">One-to-one Training</NavLink></li>
                                            <li><NavLink to="/services/parties" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Birthday Parties</NavLink></li>
                                            <li><NavLink to="/services/club" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Club</NavLink></li>
                                        </ul>
                                    </li>

                                    {/* Dropdown: About */}
                                    <li className="group relative ">
                                        <NavLink
                                            to="/about"
                                            className={isActive('/about') ? 'text-yellow-300 font-bold active-tab' : 'text-[#FDFDFF]'}
                                        >
                                            About Us
                                        </NavLink>
                                        <ul
                                            className="absolute left-0 z-999999999 hidden group-hover:block bg-[#164fa6] bg-[url('/assets/header-bg.webp')] bg-cover bg-center rounded-lg shadow-lg mt-0 w-48"
                                        >
                                            <li><NavLink to="/about/team" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Meet the Team</NavLink></li>
                                            <li><NavLink to="/about/uniform" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">SSS Uniform</NavLink></li>
                                            <li><NavLink to="/about/venues" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">London Venues</NavLink></li>
                                            <li><NavLink to="/about/reviews" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Reviews</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className='logo-box relative z-50'>
                        <div className="logo">
                            <NavLink to="/">
                                <img src="/assets/logo.png" alt="Logo" />
                            </NavLink>
                        </div>
                    </div>

                    {/* Right Menus */}
                    <div className='right-menus min-h-[120px] flex flex-col justify-between'>
                        <div className='topbar flex gap-2 justify-end'>
                            <NavLink to="/find-a-class">
                                <button className='bg-white text-[#042C89] rounded-3xl p-2 px-4 recline'>Book a FREE Trial</button>
                            </NavLink>
                            <button onClick={()=>navigate('https://parent-dash.netlify.app/auth/login')} className='bg-[#FFDE14] text-[#042C89] rounded-3xl p-2 px-4 recline'>Login</button>
                        </div>
                        <div className='bottombar'>
                            <nav>
                                <ul className="flex gap-10 text-white relative">
                                    {/* Dropdown: Franchise */}
                                    <li className="group relative ">
                                        <NavLink
                                            to="/franchise"
                                            className={isActive('/franchise') ? 'text-yellow-300 font-bold active-tab' : 'text-[#FDFDFF]'}
                                        >
                                            Franchise
                                        </NavLink>
                                        <ul
                                            className="absolute left-0 z-999999999 hidden group-hover:block bg-[#164fa6] bg-[url('/assets/header-bg.webp')] bg-cover bg-center rounded-lg shadow-lg  w-48 max-w-48"
                                        >
                                            <li><NavLink to="/franchise/investment" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Investment</NavLink></li>
                                            <li><NavLink to="/franchise/support" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Support</NavLink></li>
                                            <li><NavLink to="/franchise/ideal" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Ideal Candidate</NavLink></li>
                                            <li><NavLink to="/franchise/case-study" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Case Study</NavLink></li>
                                        </ul>
                                    </li>

                                    {/* Dropdown: Coaching */}
                                    <li className="group relative ">
                                        <NavLink
                                            to="/coaching"
                                            className={isActive('/coaching') ? 'text-yellow-300 font-bold active-tab' : 'text-[#FDFDFF]'}
                                        >
                                            Coaching
                                        </NavLink>
                                        <ul
                                            className="absolute left-0 z-999999999 hidden group-hover:block bg-[#164fa6] bg-[url('/assets/header-bg.webp')] bg-cover bg-center rounded-lg shadow-lg  w-48 max-w-48"
                                        >
                                            <li><NavLink to="/coaching/coach" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Become a Coach</NavLink></li>
                                            <li><NavLink to="/coaching/manager" className="block px-4 py-2 text-white hover:bg-[#0e3d82]">Venue Manager</NavLink></li>
                                        </ul>
                                    </li>

                                    <li className={isActive('/contact') ? 'text-yellow-300 font-bold active-tab' : 'text-[#FDFDFF]'}>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
