export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-table-tennis text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">VLF Sports</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              La plataforma líder para el seguimiento y análisis del pádel profesional y amateur en España.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Explorar */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explorar</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-chart-line w-4"></i>
                  Rankings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-trophy w-4"></i>
                  Torneos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-building w-4"></i>
                  Clubes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-users w-4"></i>
                  Jugadores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-calendar w-4"></i>
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-mobile-alt w-4"></i>
                  App Móvil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-chart-bar w-4"></i>
                  Estadísticas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-calendar-plus w-4"></i>
                  Reservas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-graduation-cap w-4"></i>
                  Academia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-store w-4"></i>
                  Tienda
                </a>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-question-circle w-4"></i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-headset w-4"></i>
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-book w-4"></i>
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-shield-alt w-4"></i>
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <i className="fas fa-file-contract w-4"></i>
                  Términos
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">Contacto Directo</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <i className="fas fa-envelope w-4"></i>
                  <span>info@vlfsports.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <i className="fas fa-phone w-4"></i>
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <i className="fas fa-map-marker-alt w-4"></i>
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-2">Mantente informado</h3>
              <p className="text-gray-300 text-sm">
                Recibe las últimas noticias y actualizaciones del mundo del pádel
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 lg:w-64 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 VLF Sports. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 