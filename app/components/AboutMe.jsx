import Image from "next/image";
import React from "react";
import CountStadistics from "./CountStadistics";

const AboutMe = () => {
  const stats = [
    { value: 6, label: "Años de experiencia" },
    { value: 100, label: "Proyectos completados" },
    { value: 100, label: "Clientes satisfechos" },
  ];

  return (
    <section className="bg-[#F0F0F0] lg:py-32 py-8">
      <div className="lg:px-22 px-12">
        <div className="flex justify-between items-baseline  border-b pb-8">
          <h1 className="lg:text-5xl text-2xl font-bold transform scale-y-125 origin-bottom">
            Quien Soy
          </h1>
          <p className="text-lg text-red-600"> - 01 -</p>
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
        <div className="lg:w-max-md flex flex-col gap-8">
          <div className=" text-lg leading-7 flex flex-col">
            <p>
              Texto It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </p>
            <p>
              Texto It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters.
            </p>
          </div>

          {/* ------ Counts ----------- */}
          <div className="flex flex-wrap gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start">
                {/* Usamos un grid para mantener el signo + en su lugar */}
                <div className="grid grid-cols-[max-content_auto] items-center">
                  {/* 'tabular-nums' hace que el 1, el 6 y el 0 ocupen el mismo ancho de carácter */}
                  <CountStadistics
                    to={stat.value}
                    startWhen={true}
                    className="text-5xl font-bold tabular-nums"
                  />

                  {/* El signo + se mantiene pegado pero estable gracias a tabular-nums */}
                  <span className="text-5xl font-light text-red-600 ml-1">
                    +
                  </span>
                </div>

                <p className="font-semibold text-sm uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
