import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Ponte en Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hablemos sobre tu próximo proyecto y hagamos realidad tu visión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-neutral-900" />
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-gray-600">+1 (234) 567-8900</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-neutral-900" />
              <div>
                <h3 className="font-medium">Correo Electrónico</h3>
                <p className="text-gray-600">jennifer@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Instagram className="w-6 h-6 text-neutral-900" />
              <div>
                <h3 className="font-medium">Instagram</h3>
                <p className="text-gray-600">Perajennifer</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Tu Nombre"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Tu Correo Electrónico"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tu Mensaje"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
