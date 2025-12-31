import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className="w-full bg-white py-4 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
        {/* Lado Izquierdo / Superior: Contactos Principales */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-3 w-full md:w-auto">
          {/* Email */}
          <div className="flex items-center gap-2">
            <HiOutlineMailOpen className="w-6 h-6 text-gray-500" />

            <span className="text-sm font-medium text-gray-700">
              cafe@especialidad.com
            </span>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-2">
            <FaWhatsapp className="w-6 h-6 text-gray-500" />

            <span className="text-sm font-medium text-gray-700">
              +51 999 999 999
            </span>
          </div>
        </div>

        {/* Lado Derecho / Inferior: Web y Redes Sociales */}
        <div className="flex flex-row  md:justify-end items-center justify-center gap-8 w-full md:w-auto">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            <div className="bg-[#1f3440]  p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <LuInstagram className="text-white w-5 h-5" />
              {/* Usando Globe como placeholder del icono de red */}
            </div>
            <div className="bg-[#1f3440]  p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <FaLinkedin className="text-white w-5 h-5" />
            </div>
            <div className="bg-[#1f3440] p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <FaFacebook className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
