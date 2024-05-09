import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const InfoRibbon = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col antialiased items-center justify-center relative border-b-[0.5px] border-t-[0.5px] border-slate-700 bg-[#5969FC]  rotate-3 top-16">
        <InfiniteMovingCards
          items={testimonials}
          isText={true}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-col antialiased items-center justify-center relative border-b-[0.5px] border-t-[0.5px] border-slate-700 bg-[#55E6A5]  -rotate-3">
        <InfiniteMovingCards
          items={testimonials}
          isText={true}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};
const testimonials = [
  {
    src: "/marquee-icon-2.svg",
    name: "Web Development",
  },
  {
    src: "/marquee-icon-2.svg",
    name: "Mobile Application Design",
  },
  {
    src: "/marquee-icon-2.svg",
    name: "UI UX Design",
  },
  {
    src: "/marquee-icon-2.svg",
    name: "Product Design",
  },
  {
    src: "/marquee-icon-2.svg",
    name: "Juthy Enterprise",
  },
];

export default InfoRibbon;
