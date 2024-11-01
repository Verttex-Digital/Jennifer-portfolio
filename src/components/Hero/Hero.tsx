const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Fondo de diseño de interiores"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Creando Espacios<br />Que Inspiran
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformando tu visión en espacios hermosos y funcionales que cuentan tu historia única.
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Ver mis trabajos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
