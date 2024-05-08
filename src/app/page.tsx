import Footer from "@/components/elements/Footer";
import NavBar from "@/components/elements/NavBar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between ">
      <NavBar />
      <h1 className="flex justify-center items-center text-2xl text-sky-200">
        Hello World
      </h1>
      <Footer />
    </div>
  );
}
