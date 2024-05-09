"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "../../style/navbar.css";

const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="w-full flex justify-center">
      {isSearch ? (
        <div className="bg-[#111111a5] h-screen w-screen px-5 flex justify-start items-center text-3xl z-30">
          <div className="w-full">
            <h3 className="pb-4">Find What You Need</h3>
            <div className="flex gap-4">
              <div className="border rounded-lg w-full flex justify-center items-center">
                <input
                  className="bg-transparent outline-none w-full py-2 px-5 text-lg"
                  type="search"
                  name=""
                  id=""
                />
                <i className="ri-search-line border-l rounded-lg p-4 transition-color delay-150 duration-150 ease-in hover:ease-out hover:bg-slate-500/50"></i>
              </div>
              <i
                className="ri-close-fill border flex items-center p-4 rounded-lg transition-color delay-150 duration-150 ease-in hover:ease-out hover:bg-slate-500/50"
                onClick={() => {
                  setIsSearch(false);
                }}
              ></i>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-5/6 xl:w-10/12 bg-gradient-to-r from-[#3A49CC] to-[#43B288] flex justify-between items-center px-10 py-5 mx-4 my-5 rounded-[20px]">
          <div className="w-[164px]">
            <Image
              src="/logo.svg"
              width={164}
              height={40}
              alt="Picture of the author"
              className="cursor-pointer "
            />
          </div>
          <div className=" hidden xl:block">
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
          </div>
          <div className="flex justify-center items-center gap-10">
            <div>
              <i
                className="ri-search-line text-3xl cursor-pointer hover:text-[#55E6A5] transition-color delay-150 duration-150 ease-in hover:ease-out"
                onClick={() => {
                  setIsSearch(true);
                }}
              ></i>
            </div>
            <div className="  ">
              <i className="ri-menu-line text-3xl bg-black p-4 rounded-full cursor-pointer transition-color delay-0 hover:delay-150 duration-300 ease-in hover:ease-out  hover:bg-gradient-to-r from-cyan-500 to-blue-500"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
