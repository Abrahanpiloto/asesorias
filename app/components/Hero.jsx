export default function Hero() {
  return (
    <section className="relative w-screen h-screen flex overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/bg-hero3.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Imagen de granos de café (decorativa) */}
      <img
        src="/granos-cafe.png"
        alt="Coffee beans decoration"
        className="absolute left-22 opacity-50 top-2/4 w-1/2  z-0"
      />

      {/* Contenido responsive */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-14 mt-32">
        <div className="">
          <h1
            style={{ fontFamily: "var(--font-newsreader)" }}
            className="text-xl sm:text-5xl md:text-6xl lg:text-5xl  text-gray-200 mb-4"
          >
            Consultoría experta en café de especialidad, <br /> te guio para
            optimizar tu negocio <br /> y así tomar decisiones estratégicas.
          </h1>

          <p
            style={{ fontFamily: "var(--font-poppins)" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl "
          >
            Comparto mi experticia en café de especilidad a través de charlas y
            asesorias personalizadas.
          </p>
        </div>
        <button className="bg-gray-200 px-18 py-2 rounded-3xl mt-7 font-bold cursor-pointer hover:bg-yellow-950 hover:text-white">
          Contactame
        </button>
      </div>
    </section>
  );
}
