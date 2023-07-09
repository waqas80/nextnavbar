'use client'

import Link from "next/link";
import { useState } from "react";


export const Menubar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
      };

    return(
        <>
        <button
          className=" inline-flex p-3 hover:bg-[#0073AE] rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
            <div className={`${ active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className="lg:inline-flex mr-8 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                <Link href="/" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#0073AE] hover:text-white ">
                    Home
                </Link>
                <Link href="/" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#0073AE] hover:text-white ">
                    About Us
                </Link>
            </div>
            </div>
        </>
    );
}