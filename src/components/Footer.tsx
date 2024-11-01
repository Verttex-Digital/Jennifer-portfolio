const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Jennifer</h3>
            <p className="text-gray-400">
              Creando espacios hermosos que inspiran y transforman vidas.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre mí</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portafolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Información de Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Buenos Aires, Argentina</li>
              <li>+54 (3484) 567-8900</li>
              <li>jennifer@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Jennifer. Todos los derechos reservados.</p>
          <p className="mt-2">
            Desarrollado por <a href="https://www.instagram.com/verttexagencia_/" target="blank" className="text-gray-400 hover:text-white">Verttex Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
