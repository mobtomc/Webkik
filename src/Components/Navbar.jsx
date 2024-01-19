// import { useState } from "react";
import {useState } from "react";
import { close, menu } from "../assets";
import logo from '../assets/logo22.png'
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar px-6 sticky top-0 ">
      <img src={logo} alt="Webkik" className="w-[124px] h-[45px]" />


      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-bold cursor-pointer text-[20px] px-4 ${active === nav.title ? "text-[#e60e57]" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-24"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center px-4">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } transition delay-300 duration-300 ease-in-out p-6 z-10 bg-gradient-to-r from-indigo-500 absolute top-20 w-full my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] p-8  ${active === nav.title ? "text-[#e60e57]" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.id} onClick={()=>setToggle(!toggle)}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;