export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-red-700 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo/Imagen principal */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full mb-6">
              <span className="text-4xl font-bold text-red-700">CAI</span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Diablos Rojos de Azul
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mb-4 text-red-100">
            Peña del Club Atlético Independiente
          </p>

          {/* Descripción */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-red-200">
            Somos la representación oficial del Club Atlético Independiente en la ciudad de Azul.
            Organizamos viajes, gestionamos trámites societarios y desarrollamos proyectos
            para el beneficio de nuestra comunidad.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#nosotros"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
            >
              Conocé más
            </a>
            <a
              href="#contacto"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors duration-200"
            >
              Contactanos
            </a>
          </div>

          {/* Estadísticas o información destacada */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+100</div>
              <div className="text-red-200">Socios activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+30</div>
              <div className="text-red-200">Años de historia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+50</div>
              <div className="text-red-200">Viajes organizados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
