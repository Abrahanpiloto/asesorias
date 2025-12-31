import React from "react";

const ContactBar = () => {
  return (
    <div className="w-full bg-white py-4 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
        {/* Lado Izquierdo / Superior: Contactos Principales */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-3 w-full md:w-auto">
          {/* Email */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 border border-orange-500 rounded-lg">
              <Mail className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              hello@imsruthi.com
            </span>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 border border-orange-500 rounded-lg">
              <Phone className="w-4 h-4 text-orange-500 fill-orange-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              +901 5588 2500
            </span>
          </div>
        </div>

        {/* Lado Derecho / Inferior: Web y Redes Sociales */}
        <div className="flex flex-row justify-between md:justify-end items-center gap-8 w-full md:w-auto">
          {/* Website URL */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 border border-orange-500 rounded-lg">
              <Globe className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              www.mywebsite.com
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <div className="bg-black p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <Globe className="w-4 h-4 text-white" />{" "}
              {/* Usando Globe como placeholder del icono de red */}
            </div>
            <div className="bg-black p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <Linkedin className="w-4 h-4 text-white fill-white" />
            </div>
            <div className="bg-black p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <Facebook className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
