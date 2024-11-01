const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80"
              alt="Jennifer"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Sobre Mí</h2>
            <p className="text-gray-600 mb-6">
              Con más de 8 años de experiencia en diseño de interiores, me especializo en
              crear espacios armoniosos que combinan funcionalidad con belleza estética. Mi
              enfoque integra principios de diseño contemporáneo con elementos atemporales
              para crear espacios que reflejan la personalidad y el estilo de vida único de
              cada cliente.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-40 font-medium">Educación:</div>
                <div>Licenciatura en Diseño de Interiores, Instituto de Diseño</div>
              </div>
              <div className="flex items-center">
                <div className="w-40 font-medium">Experiencia:</div>
                <div>Más de 8 años</div>
              </div>
              <div className="flex items-center">
                <div className="w-40 font-medium">Especialización:</div>
                <div>Espacios Residenciales y Comerciales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
