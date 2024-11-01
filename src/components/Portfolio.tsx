const projects = [
  {
    id: 1,
    title: 'Hogar Minimalista Moderno',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Apartamento de Lujo',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Oficina Corporativa',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Hotel Boutique',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Loft Urbano',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Diseño de Restaurante',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Portafolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora una colección de mis proyectos recientes, que muestran una variedad de estilos y soluciones de diseño interior.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
