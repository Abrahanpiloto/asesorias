import Image from "next/image";
import React from "react";
import CountStadistics from "./CountStadistics";

const AboutMe = () => {
  const stats = [
    { value: 6, label: "Años de experiencia" },
    { value: 80, label: "Proyectos completados" },
    { value: 50, label: "Clientes satisfechos" },
  ];

  return (
    <section className="bg-[#F0F0F0] lg:py-32 py-16 px-4 overflow-hidden">
      {/* Contenedor del Título - Ajuste de padding responsivo */}
      <div className="max-w-7xl mx-auto xl:px-24 lg:px-16 px-2">
        <div className="flex justify-between items-baseline border-b border-black/80 pb-6">
          <h2 className="lg:text-6xl md:text-5xl text-3xl transform scale-y-125 origin-bottom  tracking-tighter">
            Quien Soy
          </h2>
          <p className="md:text-lg text-sm text-red-600 font-mono"> - 01 -</p>
        </div>
      </div>

      {/* Contenedor de Contenido - De columna (móvil) a fila (escritorio) */}
      <div className="max-w-7xl w-full mx-auto xl:px-24 lg:px-16 px-2 mt-12 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">
        {/* Imagen - Ajuste de altura responsivo */}
        <div className="relative w-full lg:w-1/3 h-[400px] md:h-[800px] lg:h-[600px]">
          <Image
            src="/aboutme.jpg"
            alt="Asesora de café"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Texto y Estadísticas */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="text-gray-800  text-lg leading-relaxed flex flex-col gap-6">
            <p>
              Texto It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. Texto It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout.
            </p>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </p>
          </div>

          {/* Estadísticas - Grid de 2 columnas en móvil, flex en escritorio */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-8 gap-y-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start ">
                <div className="grid grid-cols-[max-content_auto] items-center">
                  <CountStadistics
                    to={stat.value}
                    startWhen={true}
                    className="md:text-6xl text-4xl font-semibold tabular-nums"
                  />
                  <span className="md:text-5xl text-3xl font-light text-red-600 ml-1">
                    +
                  </span>
                </div>
                <p className="font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-gray-500 leading-tight">
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
