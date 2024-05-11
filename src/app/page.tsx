import About from "@/components/elements/About";
import Awards from "@/components/elements/Awards";
import Cards from "@/components/elements/Cards";
import Footer from "@/components/elements/Footer";
import InfiniteMove from "@/components/elements/InfiniteMove";
import InfoRibbon from "@/components/elements/InfoRibbon";
import NavBar from "@/components/elements/NavBar";
import Price from "@/components/elements/Price";
import Service from "@/components/elements/Service";
import Team from "@/components/elements/Team";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between overflow-x-hidden">
      <NavBar />
      <About />
      <InfiniteMove />
      <Cards />
      <InfoRibbon />
      <Service />
      <Awards />
      <Price />
      <Team />
      <Footer />
    </div>
  );
}
