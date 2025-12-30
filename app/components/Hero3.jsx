import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen min-h-screen flex flex-col lg:grid lg:grid-cols-[8fr_4fr] lg:h-screen lg:overflow-hidden">
      {/* Columna con Texto (Abajo en móvil, Izquierda en LG) */}
      <div className="bg-[#1f3440] flex items-center relative order-1 lg:order-1 py-12 lg:py-0 min-h-[50vh] lg:min-h-0">
        {/* Granos de café - Ajustados para mobile */}
        <div className="absolute top-10 left-[-10%] lg:top-42 lg:left-20 z-0 rotate-22">
          <Image
            src="/granos-cafe.png"
            alt="Textura café"
            width={400} // Más pequeño en móvil
            height={300}
            className="object-contain opacity-20 lg:opacity-30 lg:w-187.5"
          />
        </div>

        <div className="w-full max-w-3xl px-6 sm:px-12 lg:pl-24 relative z-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 lg:mb-6 leading-tight">
            Asesoría en café de especialidad para mejorar procesos y tomar
            mejores decisiones.
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 lg:mb-8">
            Comparto mi experticia en café de especialidad a través de charlas y
            asesorías personalizadas.
          </p>

          <button className="bg-white text-[#1f3440] px-10 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Contáctame
          </button>
        </div>
      </div>

      {/* Columna con Imagen (Arriba en móvil, Derecha en LG) */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-full order-2 lg:order-2">
        <Image
          src="/girl.jpg"
          alt="Asesora de café"
          fill
          priority
          className="object-cover object-top lg:object-center"
        />
      </div>
    </section>
  );
}
