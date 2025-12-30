import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col lg:grid lg:grid-cols-[8fr_4fr] lg:overflow-hidden">
      {/* Columna izquierda (más ancha) */}
      <div className="bg-[#1f3440] flex lg:items-center relative order-2 lg:order-1 h-1/5 lg:h-auto">
        <div className="absolute top-42 left-20 z-0 rotate-22">
          <Image
            src="/granos-cafe.png"
            alt="Asesora de café"
            width={750}
            height={550}
            className="object-contain opacity-30"
          />
        </div>
        <div className="lg:w-full lg:max-w-3xl py-4 px-8 lg:pl-24 relative z-10 ">
          <h1 className="text-2xl lg:text-5xl font-semibold text-white lg:mb-6">
            Asesoría en café de especialidad para mejorar procesos y tomar
            mejores decisiones.
          </h1>

          <p className="lg:text-lg text-white/80 lg:mb-8 mb-2">
            Comparto mi experticia en café de especialidad a través de charlas y
            asesorías personalizadas.
          </p>

          <button className="bg-white text-[#1f3440] px-10 py-2 rounded-full font-medium">
            Contáctame
          </button>
        </div>
      </div>

      {/* Columna derecha (más angosta) */}
      <div className="relative w-full h-4/5 lg:h-full order-1 lg:order-2">
        <Image
          src="/girl.jpg"
          alt="Asesora de café"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
