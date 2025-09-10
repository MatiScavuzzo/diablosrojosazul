'use client';

import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'consulta'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '', subject: 'consulta' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tenés alguna consulta? ¿Querés asociarte? ¿Necesitás información sobre nuestros servicios?
            Estamos acá para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xl">📍</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Azul, Provincia de Buenos Aires</p>
                  <p className="text-gray-600">Argentina</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xl">📞</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+54 2281 - XXX XXXX</p>
                  <p className="text-sm text-gray-500">Lunes a Viernes 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xl">✉️</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@diablosrojosazul.com</p>
                  <p className="text-sm text-gray-500">Respondemos en 24 horas</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xl">📱</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">+54 9 2281 - XXX XXXX</p>
                  <p className="text-sm text-gray-500">Respuesta inmediata</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Seguinos en redes</h4>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-black hover:text-red-600 transition-colors">
                  <span title="Instagram" className="text-lg"><InstagramIcon sx={{ fontSize: 60, ":hover": { fontSize: 70 } }} /></span>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-black hover:text-red-600 transition-colors">
                  <span title="Facebook" className="text-lg"><FacebookIcon sx={{ fontSize: 60, ":hover": { fontSize: 70 } }} /></span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+54 9 2281 XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="consulta">Consulta general</option>
                    <option value="asociacion">Asociación</option>
                    <option value="viajes">Viajes</option>
                    <option value="tramites">Trámites</option>
                    <option value="eventos">Eventos</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Contanos qué necesitás..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-200"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
