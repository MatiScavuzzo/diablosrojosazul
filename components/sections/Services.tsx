import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CakeIcon from '@mui/icons-material/Cake';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Services() {
  const services = [
    {
      icon: <ModeOfTravelIcon sx={{ fontSize: 70 }} />,
      title: "Viajes a la Cancha",
      description: "Organizamos viajes al Estadio Libertadores de América para que puedas alentar al Rojo desde las tribunas.",
      features: [
        "Transporte cómodo y seguro",
        "Grupos organizados",
        "Experiencia inolvidable"
      ]
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 70 }} />,
      title: "Gestión de Trámites",
      description: "Te ayudamos con todos los trámites societarios del Club Atlético Independiente y la peña.",
      features: [
        "Nuevos socios",
        "Actualizaciones de datos",
        "Consultas y asesoramiento"
      ]
    },
    {
      icon: <CakeIcon sx={{ fontSize: 70 }} />,
      title: "Sorteos Mensuales",
      description: "Todos los meses sorteamos tortas de cumpleaños entre nuestros socios activos.",
      features: [
        "Sorteo mensual para socios al día",
        "Tortas artesanales",
        "Celebración especial"
      ]
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 70 }} />,
      title: "Proyectos Sociales",
      description: "Desarrollamos iniciativas que benefician a toda la comunidad de Azul.",
      features: [
        "Campañas solidarias",
        "Eventos comunitarios",
        "Apoyo a instituciones",
        "Responsabilidad social"
      ]
    },
    {
      icon: <CelebrationIcon sx={{ fontSize: 70 }} />,
      title: "Eventos y Encuentros",
      description: "Organizamos encuentros, asados y eventos para fortalecer los lazos entre hinchas.",
      features: [
        "Partidos de visitantes",
        "Eventos especiales",
        "Actividades familiares"
      ]
    },
    {
      icon: <PhoneAndroidIcon sx={{ fontSize: 70 }} />,
      title: "Comunicación",
      description: "Mantenemos informados a todos nuestros socios sobre las últimas novedades.",
      features: [
        "Grupos de WhatsApp",
        "Redes sociales",
        "Noticias del club",
        "Información actualizada"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios para nuestros socios y la comunidad,
            siempre con el objetivo de fortalecer los lazos rojos en Azul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="mb-4 text-red-600 text-8xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-md text-gray-600">
                    <span className="text-red-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información sobre membresía */}
        <div className="mt-16 bg-red-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Querés ser parte de la familia roja?</h3>
          <p className="text-lg mb-6 text-red-100">
            Asociate a la peña y disfrutá de todos estos beneficios, además de formar parte
            de una comunidad apasionada por Independiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
            >
              Asociate ahora
            </a>
            <a
              href="#contacto"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors duration-200"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
