export async function GET(request: Request) {
  return Response.json(team);
}
const team = [
  {
    id: 1,
    name: "Arghya Das",
    designation: "Software Engineer",
    image: "/alfaarghyaAvtar.png",
    link: "https://www.linkedin.com/in/alfaarghya/",
  },
  {
    id: 2,
    name: "Floyd Miles",
    designation: "Product Designer",
    image: "/team-membar-img-1.webp",
    link: "https://www.linkedin.com/in/alfaarghya/",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    designation: "Frontend Developer",
    image: "/team-membar-img-2.webp",
    link: "https://www.linkedin.com/in/alfaarghya/",
  },
  {
    id: 4,
    name: "Arlene Mccoy",
    designation: "Backed Developer",
    image: "/team-membar-img-3.webp",
    link: "https://www.linkedin.com/in/alfaarghya/",
  },
];
