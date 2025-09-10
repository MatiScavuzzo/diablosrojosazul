export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Peña de Azul del Club Atlético Independiente es una asociación civil
            que representa al Club en nuestra ciudad y trabaja por el bienestar de la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Historia */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 mb-4">
              Fundada hace más de 30 años, la Peña de Azul nació del amor y la pasión
              de un grupo de hinchas de Independiente que querían mantener viva la llama
              roja en nuestra ciudad.
            </p>
            <p className="text-gray-600 mb-4">
              Desde entonces, hemos crecido como organización, siempre manteniendo
              nuestros valores de solidaridad, compañerismo y compromiso con la comunidad.
            </p>
            <p className="text-gray-600">
              Hoy somos reconocidos no solo por nuestro apoyo al club, sino también
              por nuestro trabajo social en Azul y la región.
            </p>
          </div>

          {/* Imagen placeholder */}
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🏟️</div>
              <p>Foto de la peña</p>
            </div>
          </div>
        </div>

        {/* Misión y Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              Representar al Club Atlético Independiente en Azul, organizando actividades
              que fortalezcan los lazos entre los hinchas y promoviendo proyectos sociales
              que beneficien a toda la comunidad.
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Pasión por Independiente</li>
              <li>• Solidaridad y compañerismo</li>
              <li>• Compromiso social</li>
              <li>• Transparencia en la gestión</li>
              <li>• Respeto y tolerancia</li>
            </ul>
          </div>
        </div>

        {/* Comisión Directiva */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Comisión Directiva</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h4 className="font-semibold text-gray-900">Presidente</h4>
              <p className="text-gray-600">Nombre del Presidente</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h4 className="font-semibold text-gray-900">Secretaria</h4>
              <p className="text-gray-600">Nombre de la Secretaria</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900">Tesorero</h4>
              <p className="text-gray-600">Nombre del Tesorero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
