import Image from "next/image";
import Hero3 from "./components/Hero3";
import ContactBar from "./components/ContactBar";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <main className="">
        <Hero3 />
        <ContactBar />
      </main>
    </div>
  );
}
