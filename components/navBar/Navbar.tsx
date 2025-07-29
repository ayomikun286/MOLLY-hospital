'use client';
import Link from "next/dist/client/link";
import React from "react";
import Search from "../../assets/svg/search";
import "./Navber.css";
import { useState } from "react";
import Navmobile from "./Navmobile";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col">
      <nav className="hidden md:flex space-x-[20px] bg-[#1F2B6C] w-screen p-5">
        <ul className="hidden md:flex text-white justify-center flex-2 items-center space-x-[80px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About us</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Doctors</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
        <div className="hidden md:flex justify-center items-center gap-x-[20px] flex-1 ">
          {/* <Search/> */}
          <div className=' '>
            <button onClick={() => setIsShow(!isShow)}>
              <Search />
            </button>

          </div>
          <button className="px-10 py-2 bg-[#BFD2F8] rounded-full cursor-pointer ">Appointnemt</button>
        </div>



      </nav>
      <div className="md:hidden flex">

        <Navmobile />
      </div>
      {isShow && (
        <div className='flex  my-1 justify-center absolute left-150 top-30 '>
          <input type='search' placeholder='Search' className=' w-100 px-3 py-5 rounded text-gray-400 bg-[#1F2B6C] flex justify-start placeholder-white focus:outline-none '/>
        </div>
      )}
    </div>

  );
};

export default Navbar;

