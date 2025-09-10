import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                Diablos Rojos de Azul
              </h3>
              <p className="text-gray-300 text-sm">
                Peña del Club Atlético Independiente
              </p>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Representamos al Club Atlético Independiente en la ciudad de Azul,
              organizando actividades para hinchas y desarrollando proyectos
              sociales para el beneficio de nuestra comunidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:text-red-700 transition-colors">
                <span title="Instagram" className="text-lg"><InstagramIcon sx={{ fontSize: 50, ":hover": { fontSize: 60 } }} /></span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:text-red-700 transition-colors">
                <span title="Facebook" className="text-lg"><FacebookIcon sx={{ fontSize: 50, ":hover": { fontSize: 60 } }} /></span>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Azul, Buenos Aires
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                +54 2281 - XXX XXXX
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                info@diablosrojosazul.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                WhatsApp disponible
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Diablos Rojos de Azul. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Enlace al club oficial */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Sitio web oficial del Club Atlético Independiente:
          </p>
          <a
            href="https://www.clubaindependiente.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition-colors font-semibold"
          >
            www.clubaindependiente.com.ar
          </a>
        </div>
      </div>
    </footer>
  );
}
