import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from 'framer-motion';
import {MyButton} from "../../utils"
import logo1 from "../../assets/logos/logo3.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarItems = [
        { id: 1, title: "Home", route: "/" },
        { id: 2, title: "Free Courses", route: "/free-courses" },
        { id: 3, title: "Blogs", route: "/blogs" },
        { id: 4, title: "Contact Us", route: "/contact-us" },
    ];

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <nav className='flex justify-between bg-darkBlue text-[#ffa500] py-6 px-4 items-center md:py-2 md:px-8'>
            {/* Logo */}
            <div className="logo w-[18vw] md:w-[8vw]">
                <NavLink to="/">
                    <img className='w-full scale-150' src={logo1} alt="Main Logo" />
                </NavLink>
            </div>

         {/* Desktop Right Section */}
            <ul className='hidden md:flex justify-evenly flex-1 mx-8'>
                {navbarItems.map((navItem) => (
                    <li className='mx-4 text-xl' key={navItem.id}>
                        <NavLink to={navItem.route}>
                            {navItem.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

   
           

            {/* Mobile Menu Toggle */}
            <div className='flex md:hidden'>
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {menuOpen ? <CiMenuFries size={28} /> : <CiMenuBurger size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="absolute top-[95px] left-0 w-full bg-darkBlue text-white z-10"
                    >
                        <ul className='flex flex-col items-center py-4'>
                            {navbarItems.map((navItem) => (
                                <li className='py-2' key={navItem.id}>
                                    <NavLink to={navItem.route} onClick={toggleMenu}>
                                        {navItem.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
