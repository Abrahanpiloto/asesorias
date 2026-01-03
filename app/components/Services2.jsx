"use client";
import React, { useState } from "react";
// Usaremos FaPlus y FaMinus para que sea más intuitivo como "desplegable"
import { FaPlus, FaMinus } from "react-icons/fa";

const Services = () => {
  // Estado para controlar qué servicio está abierto en cada sección
  // Usamos null para que todos comiencen cerrados
  const [openServiceId, setOpenServiceId] = useState(null);

  const toggleService = (id) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  const servicesB2B = [
    {
      id: "b2b-01",
      title: "Diseño de Barras",
      focus: "Eficiencia Operativa",
      desc: "Optimización de flujos de trabajo y selección de maquinaria de alta gama para maximizar la velocidad de servicio sin perder calidad.",
    },
    {
      id: "b2b-02",
      title: "Ingeniería de Menú",
      focus: "Rentabilidad Estratégica",
      desc: "Creación de bebidas de autor y costeo detallado de recetas para asegurar márgenes de ganancia saludables y propuestas únicas.",
    },
    {
      id: "b2b-03",
      title: "Formación de Staff",
      focus: "Cultura de Especialidad",
      desc: "Capacitación técnica en barismo avanzado, hospitalidad y técnicas de venta consultiva para elevar la experiencia del cliente.",
    },
  ];

  const qualityServices = [
    {
      id: "qc-01",
      title: "Auditoría Sensorial",
      focus: "Consistencia",
      desc: "Evaluación técnica presencial para garantizar que la calidad del espresso y filtrados se mantenga constante todos los días.",
    },
    {
      id: "qc-02",
      title: "Curaduría de Grano",
      focus: "Sourcing",
      desc: "Selección estratégica de microlotes y contacto directo con fincas para asegurar un suministro de café exclusivo y rentable.",
    },
    {
      id: "qc-03",
      title: "Protocolos de Limpieza",
      focus: "Mantenimiento",
      desc: "Implementación de rutinas de cuidado preventivo para maquinaria de alta gama, extendiendo su vida útil y protegiendo el sabor.",
    },
  ];

  // Componente interno para evitar repetir código
  const ServiceItem = ({ service }) => {
    const isOpen = openServiceId === service.id;

    return (
      <div className="border-b border-black/10">
        <button
          onClick={() => toggleService(service.id)}
          className="w-full py-6 flex justify-between items-center text-left group"
        >
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm text-gray-400">
              {service.id.split("-")[1]}
            </span>
            <h3
              className={`text-xl md:text-2xl font-bold transition-colors ${
                isOpen ? "text-red-600" : "group-hover:text-red-600"
              }`}
            >
              {service.title}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:block uppercase tracking-widest bg-gray-200 px-3 py-1 rounded-full text-[10px] font-bold">
              {service.focus}
            </span>
            {isOpen ? (
              <FaMinus className="text-red-600" />
            ) : (
              <FaPlus className="text-gray-400" />
            )}
          </div>
        </button>

        {/* Contenido Desplegable con animación simple */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[300px] pb-8" : "max-h-0"
          }`}
        >
          <div className="pl-0 md:pl-16 max-w-2xl">
            <span className="md:hidden inline-block mb-2 uppercase tracking-widest bg-red-400 px-2 py-0.5 rounded text-white text-[10px] font-bold">
              {service.focus}
            </span>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#F0F0F0] py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* BLOQUE 1: SOLUCIONES B2B */}
        <div className="flex justify-between items-end border-b border-black pb-6 mb-8">
          <div>
            <h2 className="text-4xl md:text-7xl tracking-tighter transform scale-y-110 origin-bottom mb-2">
              Servicios
            </h2>
            <p className="text-xs md:text-sm text-red-600 font-mono tracking-[0.2em] uppercase">
              Soluciones B2B
            </p>
          </div>
          <p className="text-red-500 font-mono"> - 03 - </p>
        </div>

        <div className="mb-20">
          {servicesB2B.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>

        {/* BLOQUE 2: CONTROL & CALIDAD */}
        <div className="flex justify-between items-end border-b border-black pb-6 mb-8 mt-24">
          <div>
            <p className="text-xs md:text-sm text-red-600 font-mono tracking-[0.2em] uppercase">
              Control & Calidad
            </p>
          </div>
        </div>

        <div>
          {qualityServices.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
