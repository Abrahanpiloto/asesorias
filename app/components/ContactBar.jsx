import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className="w-full py-4 lg:py-0 px-22 lg:h-24 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-4">
        {/* Lado Izquierdo: Contactos */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {/* Email */}
          <div className="flex items-center gap-2">
            <HiOutlineMailOpen className="w-6 h-6 text-gray-500" />
            <span className="text-md lg:text-lg font-medium">
              cafe@especialidad.com
            </span>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-2">
            <FaWhatsapp className="w-6 h-6 text-gray-500" />
            <span className="text-md lg:text-lg font-medium">
              +51 999 999 999
            </span>
          </div>
        </div>

        {/* Lado Derecho: Redes Sociales */}
        <div className="flex flex-row items-center gap-3">
          <div className="bg-[#1f3440] p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
            <LuInstagram className="text-white w-5 h-5" />
          </div>
          <div className="bg-[#1f3440] p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
            <FaLinkedin className="text-white w-5 h-5" />
          </div>
          <div className="bg-[#1f3440] p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
            <FaFacebook className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
