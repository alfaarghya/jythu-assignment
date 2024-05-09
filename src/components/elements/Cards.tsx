import Link from "next/link";
import { HoverEffect } from "../ui/CardHoverEffect";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-lg pb-5 flex gap-2 justify-center items-center">
          <Image src="/hand-icon.webp" width={30} height={30} alt="services" />
          <span>OUR BEST SERVICES</span>
        </div>
        <span className="text-5xl">We Provide Best Services</span>
      </div>
      <HoverEffect items={services} />
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

const services = [
  {
    title: "Digital Marketing",
    src: "/service-2-icon-1.webp",
    description:
      "Non est risus massa enim dolor tristique. Fringilla non porttitor sem duis aliquet tellus iaculis pharetra aliquam. Morbi et placerat sit facilisis non tincidunt porttitor eu.",
    link: "#",
  },
  {
    title: "Visual Design",
    src: "/service-2-icon-2.webp",
    description:
      "Non est risus massa enim dolor tristique. Fringilla non porttitor sem duis aliquet tellus iaculis pharetra aliquam. Morbi et placerat sit facilisis non tincidunt porttitor eu.",
    link: "#",
  },
  {
    title: "Business Development",
    src: "/service-2-icon-3.webp",
    description:
      "Non est risus massa enim dolor tristique. Fringilla non porttitor sem duis aliquet tellus iaculis pharetra aliquam. Morbi et placerat sit facilisis non tincidunt porttitor eu.",
    link: "#",
  },
  {
    title: "Product Design",
    src: "/service-2-icon-4.webp",
    description:
      "Non est risus massa enim dolor tristique. Fringilla non porttitor sem duis aliquet tellus iaculis pharetra aliquam. Morbi et placerat sit facilisis non tincidunt porttitor eu.",
    link: "#",
  },
  {
    title: "Mobile Application Design",
    src: "/service-2-icon-5.webp",
    description:
      "Non est risus massa enim dolor tristique. Fringilla non porttitor sem duis aliquet tellus iaculis pharetra aliquam. Morbi et placerat sit facilisis non tincidunt porttitor eu.",
    link: "#",
  },
  {
    title: "Web Development",
    src: "/service-2-icon-6.webp",
    description:
      "Non est risus massa enim dolor tristique. Fringilla non porttitor sem duis aliquet tellus iaculis pharetra aliquam. Morbi et placerat sit facilisis non tincidunt porttitor eu.",
    link: "#",
  },
];

export default Cards;
