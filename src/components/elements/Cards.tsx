"use client";
import Link from "next/link";
import { HoverEffect } from "../ui/CardHoverEffect";
import Image from "next/image";
import { useEffect, useState } from "react";

interface serviceType {
  title: string;
  src: string;
  description: string;
  link: string;
}

const Cards = () => {
  const [data, setData] = useState<serviceType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/services");
      const data = await response.json();
      return data;
    }
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-lg pb-5 flex gap-2 justify-center items-center">
          <Image src="/hand-icon.webp" width={30} height={30} alt="services" />
          <span>OUR BEST SERVICES</span>
        </div>
        <span className="text-5xl">We Provide Best Services</span>
      </div>
      <HoverEffect items={data} />
      <div className="mb-10 flex justify-center items-center text-lg">
        <span>
          Want To See Our Professional Experience.
          <Link href="#" className="text-blue-700">
            Click here to View More
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Cards;
