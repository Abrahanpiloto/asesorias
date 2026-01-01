import React from "react";

const Experience = () => {
  const experiences = [
    {
      year: "2018",
      role: "Barista Senior & Lead Trainer",
      company: "www.taller-ejemplo.com",
      type: "Presencial",
      desc: "Gestión de barras de especialidad y diseño de programas de formación técnica. Especialista en calibración de perfiles de extracción y latte art avanzado para hostelería de alta gama.",
      active: false,
    },
    {
      year: "2019",
      role: "Head Roaster (Jefa de Tueste)",
      company: "www.tostaduria-ejemplo.com",
      type: "Híbrido",
      desc: "Creación de curvas de tueste para variedades exóticas y procesos experimentales. Control de calidad sensorial bajo estándares SCA y gestión de inventario de café verde (Green Buying).",
      active: true,
    },
    {
      year: "2020-2022",
      role: "Q-Grader & Control de Calidad",
      company: "www.cafe-ejemplos.com",
      type: "Fulltime",
      desc: "Catación profesional y puntuación de microlotes en origen. Análisis físico del grano y supervisión de procesos de fermentación (anaeróbicos y naturales) para exportación directa.",
      active: false,
    },
    {
      year: "2023+",
      role: "Consultora de Café de Especialidad",
      company: "www.ejemplo.com",
      type: "Fulltime",
      desc: "Asesoría integral para la apertura de barras de especialidad y diseño de laboratorios de tueste. Juez técnica en campeonatos nacionales de Barismo y Brewers Cup.",
      active: false,
    },
  ];

  return (
    <section className="bg-white py-12 md:py-24 lg:py-32 px-4 font-sans">
      <div className="max-w-7xl mx-auto xl:px-24 lg:px-16 px-4">
        {/* Título Responsivo */}
        <div className="flex justify-between items-baseline border-b border-black pb-4 md:pb-6 mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter transform scale-y-110 origin-bottom">
            Experiencia
          </h1>
          <p className="text-xs sm:text-sm md:text-lg text-red-600 font-mono tracking-widest">
            - 02 -
          </p>
        </div>

        {/* Tabla de Experiencia */}
        <div className="flex flex-col">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-8 md:py-12 border-b border-gray-100 last:border-none md:border-none"
            >
              {/* Columna 1: Años - Centrado en mobile, izquierda en desktop */}
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">
                  {item.year}
                </span>
                <span className="text-gray-600 text-base sm:text-lg font-medium">
                  {item.role}
                </span>
              </div>

              {/* Columna 2: Empresa y Línea (Oculta borde en mobile para mejor flujo) */}
              <div className="relative pl-0 md:pl-12 md:border-l md:border-gray-200">
                {/* El indicador (círculo) - Solo visible en desktop (md) para mantener limpieza en mobile */}
                <div
                  className={`hidden md:flex absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 bg-white items-center justify-center
                  ${item.active ? "border-red-600" : "border-black"}`}
                >
                  {item.active && (
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {item.company}
                  </h3>
                  <span className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Columna 3: Descripción */}
              <div className="text-gray-500 leading-relaxed text-sm sm:text-[15px] md:pr-8">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
