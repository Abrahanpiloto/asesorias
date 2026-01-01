import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Diseño de Barras",
      focus: "Eficiencia Operativa",
      desc: "Optimización de flujos de trabajo y selección de maquinaria de alta gama para maximizar la velocidad de servicio sin perder calidad.",
    },
    {
      id: "02",
      title: "Ingeniería de Menú",
      focus: "Rentabilidad Estratégica",
      desc: "Creación de bebidas de autor y costeo detallado de recetas para asegurar márgenes de ganancia saludables y propuestas únicas.",
    },
    {
      id: "03",
      title: "Formación de Staff",
      focus: "Cultura de Especialidad",
      desc: "Capacitación técnica en barismo avanzado, hospitalidad y técnicas de venta consultiva para elevar la experiencia del cliente.",
    },
  ];

  return (
    <section className="bg-[#F0F0F0] py-16 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto xl:px-24 lg:px-16 px-6">
        {/* Cabecera del componente */}
        <div className="flex justify-between items-baseline border-b border-black pb-6 mb-12">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter transform scale-y-110 origin-bottom">
              Servicios
            </h2>
            <p className="text-xs md:text-xl text-red-600 font-mono tracking-widest uppercase">
              Soluciones B2B
            </p>
          </div>
          <div>
            <p className="text-red-500 text-lg"> - 03 - </p>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col h-full border-b border-gray-100 pb-8 md:border-none md:pb-0"
            >
              {/* Número y Badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-lg font-mono ">{service.id}</span>
                <span className="text-[10px] uppercase tracking-widest bg-white px-2 py-1 rounded text-gray-600">
                  {service.focus}
                </span>
              </div>

              {/* Título y Flecha */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <FaArrowRight
                  className=" hidden md:block text-gray-300 group-hover:text-red-600 transition-colors"
                  size={24}
                />
                <FaArrowDown
                  className="block md:hidden text-gray-300 group-hover:text-red-600 transition-colors"
                  size={24}
                />
              </div>

              {/* Descripción */}
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>

              {/* Línea decorativa solo visible en hover (Desktop) */}
              <div className="hidden md:block w-0 h-[2px] bg-red-600 mt-6 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
