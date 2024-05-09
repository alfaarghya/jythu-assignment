import About from "@/components/elements/About";
import Cards from "@/components/elements/Cards";
import Footer from "@/components/elements/Footer";
import InfiniteMove from "@/components/elements/InfiniteMove";
import InfoRibbon from "@/components/elements/InfoRibbon";
import NavBar from "@/components/elements/NavBar";
import Service from "@/components/elements/Service";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between overflow-x-hidden">
      <NavBar />
      <About />
      <InfiniteMove />
      <Cards />
      <InfoRibbon />
      <Service />
      <Footer />
    </div>
  );
}
