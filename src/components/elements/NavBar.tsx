import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../style/navbar.css";

const NavBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] flex justify-between items-center px-10 py-5 mx-4 my-5 rounded-[20px]">
      <div>
        <Image
          src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/logo.svg"
          width={164}
          height={40}
          alt="Picture of the author"
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-14 font-semibold">
        <Link className="group hover:text-[#5fa1ecc9]" href="#">
          Home
          <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>
        <Link className="group hover:text-[#5fa1ecc9]" href="#">
          About
          <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>
        <Link className="group hover:text-[#5fa1ecc9]" href="#">
          Service
          <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>
        <Link className="group hover:text-[#5fa1ecc9]" href="#">
          Project
          <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>
        <Link className="group hover:text-[#5fa1ecc9]" href="#">
          Blog
          <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>
        <Link className="group hover:text-[#5fa1ecc9]" href="#">
          Contact
          <div className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div>
          <i className="ri-search-line text-3xl cursor-pointer hover:text-[#55E6A5] transition-color delay-150 duration-150 ease-in hover:ease-out"></i>
        </div>
        <div className="  ">
          <i className="ri-menu-line text-3xl bg-black p-4 rounded-full cursor-pointer transition-color delay-0 hover:delay-150 duration-300 ease-in hover:ease-out  hover:bg-gradient-to-r from-cyan-500 to-blue-500"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
