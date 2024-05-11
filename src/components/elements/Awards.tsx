import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <div className="bg-[#131A2A] py-20 px-3">
      <h2 className="text-5xl pb-6">Our Awards</h2>
      <div className="">
        <div className="group transition-all duration-150 hover:delay-150 ease-out hover:ease-in flex flex-wrap justify-between items-center border-y-[0.5px] border-slate-600 py-10">
          <Image
            src="/award-img-1.webp"
            width={300}
            height={50}
            alt="sward"
            className="grayscale group-hover:grayscale-0"
          />
          <h4 className="group-hover:text-[#55E6A5] w-1/5 text-xl font-bold">
            Customers Designing
          </h4>
          <span className="text-blue-700 group-hover:text-[#55E6A5] text-3xl font-semibold">
            2018
          </span>
          <p className=" text-base w-2/6">
            Lorem ipsum dolor sit amet consectetur. Erat placerat amet nisi
            risus pellen tesque pellen tesque
          </p>
          <a
            className="text-3xl size-10 flex justify-center items-center border rounded-full group-hover:bg-[#55E6A5] group-hover:text-black group-hover:border-transparent"
            href="#"
          >
            <span className="">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </a>
        </div>
        <div className="group transition-all duration-150 delay-150 ease-out hover:ease-in flex justify-between items-center border-y-[0.5px] border-slate-600 py-10">
          <Image
            src="/award-img-2.webp"
            width={300}
            height={50}
            alt="sward"
            className="grayscale group-hover:grayscale-0"
          />
          <h4 className=" group-hover:text-[#55E6A5] w-1/5 text-xl font-bold">
            Information Technology
          </h4>
          <span className="text-blue-700 group-hover:text-[#55E6A5] text-3xl font-semibold">
            2019
          </span>
          <p className=" text-base w-2/6">
            Lorem ipsum dolor sit amet consectetur. Erat placerat amet nisi
            risus pellen tesque pellen tesque
          </p>
          <a
            className="text-3xl size-10 flex justify-center items-center border rounded-full group-hover:bg-[#55E6A5] group-hover:text-black group-hover:border-transparent"
            href="#"
          >
            <span className="-bg">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </a>
        </div>
        <div className="group transition-all duration-150 delay-150 ease-out hover:ease-in flex justify-between items-center border-y-[0.5px] border-slate-600 py-10">
          <Image
            src="/award-img-3.webp"
            width={300}
            height={50}
            alt="sward"
            className="grayscale group-hover:grayscale-0"
          />
          <h4 className="group-hover:text-[#55E6A5] w-1/5 text-xl font-bold">
            Web Development
          </h4>
          <span className="text-blue-700 group-hover:text-[#55E6A5] text-3xl font-semibold">
            2020
          </span>
          <p className=" text-base w-2/6">
            Lorem ipsum dolor sit amet consectetur. Erat placerat amet nisi
            risus pellen tesque pellen tesque
          </p>
          <a
            className="text-3xl size-10 flex justify-center items-center border rounded-full group-hover:bg-[#55E6A5] group-hover:text-black group-hover:border-transparent"
            href="#"
          >
            <span className="">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </a>
        </div>
        <div className="group transition-all duration-150 delay-150 ease-out hover:ease-in flex justify-between items-center border-y-[0.5px] border-slate-600 py-10">
          <Image
            src="/award-img-4.webp"
            width={300}
            height={50}
            alt="sward"
            className="grayscale group-hover:grayscale-0"
          />
          <h4 className="group-hover:text-[#55E6A5] w-1/5 text-xl font-bold">
            Mobile Apps Developemt
          </h4>
          <span className="text-blue-700 group-hover:text-[#55E6A5] text-3xl font-semibold">
            2021
          </span>
          <p className=" text-base w-2/6">
            Lorem ipsum dolor sit amet consectetur. Erat placerat amet nisi
            risus pellen tesque pellen tesque
          </p>
          <a
            className="text-3xl size-10 flex justify-center items-center border rounded-full group-hover:bg-[#55E6A5] group-hover:text-black group-hover:border-transparent"
            href="#"
          >
            <span className="">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Awards;
