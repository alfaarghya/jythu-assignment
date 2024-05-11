import Image from "next/image";
import Link from "next/link";
import React from "react";

const Price = () => {
  return (
    <div className="py-20">
      <h5 className="uppercase text-xl text-center pb-2">Our Pricing Plan</h5>
      <h5 className="text-center text-6xl pb-10">Choose Your Pricing Plan</h5>
      <div className="flex flex-wrap justify-evenly px-2">
        <Card title="BASIC" price="48.00" />
        <Card title="STANDARD" price="68.00" />
        <Card title="PREMIUM" price="98.00" />
      </div>
    </div>
  );
};

const Card = ({ title, price }: { title: string; price: string }) => {
  return (
    <div className="group flex flex-col justify-center items-center bg-[#1F2636] p-6 pb-10 rounded-xl hover:shadow-2xl hover:shadow-[#55E6A5]">
      <div className=" w-full flex justify-between items-center py-4">
        <span className="border-[1px] border-[#55E6A5] w-12"></span>
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className=" border-[1px] border-[#55E6A5] w-12"></span>
      </div>
      <Image
        src="/pricing-bg-img-1.webp"
        width={350}
        height={200}
        alt="price"
      />
      <h3 className=" w-full flex justify-center items-center py-8 border-b-[1px] border-slate-600">
        <span className="text-[#55E6A5] text-xl self-start">$</span>
        <span className="text-6xl text-[#FFFFFF] group-hover:text-[#55E6A5]">
          {price}
        </span>
        <span className="uppercase text-[#8082A0] self-end">per month</span>
      </h3>
      <div className="flex flex-col gap-4 py-8">
        <span>
          <i className="ri-verified-badge-fill text-blue-600 mr-2"></i>
          <span>Time for lead Research, Work</span>
        </span>
        <span>
          <i className="ri-verified-badge-fill text-blue-600 mr-2"></i>
          <span>Lorem ipsum dolor sit amet nec</span>
        </span>
        <span>
          <i className="ri-verified-badge-fill text-blue-600 mr-2"></i>
          <span>Guarenteed Quality Control</span>
        </span>
        <span>
          <i className="ri-verified-badge-fill text-blue-600 mr-2"></i>
          <span>Business Opportunities</span>
        </span>
        <span>
          <i className="ri-verified-badge-fill text-blue-600 mr-2"></i>
          <span>Amazing communication.</span>
        </span>
        <span>
          <i className="ri-verified-badge-fill text-blue-600 mr-2"></i>
          <span>Time for lead Research, Work</span>
        </span>
      </div>
      <Link
        href="#"
        className="w-full border flex justify-center py-5 rounded-lg text-xl text-[#55E6A5] border-[#55E6A5] hover:text-white hover:bg-[#55E6A5]"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Price;
