import Image from "next/image";
import Hero3 from "./components/Hero3";
import ContactBar from "./components/ContactBar";
import AboutMe2 from "./components/AboutMe2";
import Experience from "./components/Experience";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <main className="w-full">
        <Hero3 />
        <ContactBar />
        <AboutMe2 />
        <Experience />
        <Services />
      </main>
    </div>
  );
}
