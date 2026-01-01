import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-[#F0F0F0] lg:py-32 py-8">
      <div className="lg:px-22 px-12">
        <div className="flex justify-between items-baseline  border-b pb-8">
          <h1 className="lg:text-5xl text-2xl font-bold transform scale-y-125 origin-bottom">
            Quien Soy
          </h1>
          <p className="text-lg">( 01 )</p>
        </div>
      </div>
      <div className="lg:px-22 py-18 flex gap-32">
        <div className="relative h-100 lg:h-125 w-full">
          <Image
            src="/aboutme.jpg"
            alt="Asesora de café"
            fill
            priority
            className="object-cover "
          />
        </div>
        <div className="lg:w-max-md">
          texto It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.{" "}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
