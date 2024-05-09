import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const InfiniteMove = () => {
  return (
    <div className="flex flex-col antialiased items-center justify-center relative border-b-[0.5px] border-t-[0.5px] border-slate-700 py-10 ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    src: "/slack.webp",
    name: "slack",
  },
  {
    src: "/amazon.webp",
    name: "amazon",
  },
  {
    src: "/walmart.webp",
    name: "walmart",
  },
  {
    src: "/linkedin.webp",
    name: "LinkedIn",
  },
  {
    src: "/spotify.webp",
    name: "spotify",
  },
  {
    src: "/google.webp",
    name: "google",
  },
];

export default InfiniteMove;
