import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <HeroSection />
      </main>
     
    </div>
  );
}
