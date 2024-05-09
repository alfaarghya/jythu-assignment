import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex px-5">
        <div className="flex flex-col justify-center items-start">
          <div className="flex gap-2 items-center mb-8 uppercase text-blue-700">
            <Image
              src="/hand-icon.webp"
              width={30}
              height={30}
              alt="services"
            />
            <h5 className="">welcome to gesto </h5>
          </div>
          <h1 className=" w-3/4 text-6xl font-semibold mb-8">
            We Are Creative Digital Agency{" "}
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/hero-2-shape-5.webp"
              width={200}
              height={200}
              alt="igm"
            />
            <p className=" w-3/4 text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolorem que laudantium totam aperiam eaque quae abillo
            </p>
          </div>
          <div className="ml-[150px]">
            <span className="bg-gradient-to-r from-[#3A49CC] to-[#43B288] w-64 py-5 flex justify-center  text-xl rounded-lg cursor-pointer">
              Learn More
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </div>
        </div>
        <div className="">
          <Image src="/hero-2-img-1.webp" width={800} height={200} alt="igm" />
        </div>
      </div>
    </div>
  );
};

export default About;
