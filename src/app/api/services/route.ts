export async function GET(request: Request) {
  return Response.json(services);
}

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
