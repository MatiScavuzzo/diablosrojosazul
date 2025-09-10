# 🔴 Diablos Rojos de Azul

**Landing Page de la Peña del Club Atlético Independiente en Azul**

Una página web moderna y responsive que representa a la Peña de Azul del Club Atlético Independiente, mostrando sus servicios, historia y facilitando el contacto con la comunidad hincha.

## 🏟️ Sobre el Proyecto

La Peña de Azul del Club Atlético Independiente es una asociación civil que representa al Club en la ciudad de Azul, Buenos Aires. Esta landing page permite a los hinchas y potenciales socios conocer los servicios, actividades y formas de contacto de la peña.

### ✨ Características

- **🎨 Diseño Responsive** - Optimizado para móviles, tablets y desktop
- **⚡ Performance** - Construido con Next.js 15 y Turbopack
- **🎯 SEO Optimizado** - Metadata completa para motores de búsqueda
- **📱 Navegación Intuitiva** - Menú responsive con scroll suave
- **📧 Formulario de Contacto** - Sistema de contacto integrado (Para implementar lógica)

## 🚀 Tecnologías Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework de React
- **[React 19](https://react.dev/)** - Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS
- **[Material-UI Icons](https://mui.com/material-ui/material-icons/)** - Iconografía
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rápido

## 📁 Estructura del Proyecto

```
diablosrojosazul/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navegación principal
│   │   └── Footer.tsx      # Footer con enlaces
│   └── sections/
│       ├── HeroSection.tsx # Sección principal
│       ├── AboutUs.tsx     # Sobre nosotros
│       ├── Services.tsx    # Servicios ofrecidos
│       └── Contact.tsx     # Formulario de contacto
└── public/
    └── images/             # Imágenes y logos
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ o Bun
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/MatiScavuzzo/diablosrojosazul.git
   cd diablosrojosazul
   ```

2. **Instalar dependencias**

   ```bash
   # Con npm
   npm install

   # Con yarn
   yarn install

   # Con pnpm
   pnpm install

   # Con bun
   bun install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   # Con npm
   npm run dev

   # Con yarn
   yarn dev

   # Con pnpm
   pnpm dev

   # Con bun
   bun run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con Turbopack

# Producción
npm run build        # Build optimizado para producción
npm run start        # Servidor de producción

# Con bun
bun run dev          # Desarrollo
bun run build        # Build
bun run start        # Producción
```

## 🌐 Deploy en Vercel

### Deploy Automático

1. **Conectar con GitHub**

   - Subir el código a GitHub
   - Conectar el repositorio con Vercel
   - Deploy automático en cada push

2. **Deploy Manual**

   ```bash
   # Instalar Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

### Variables de Entorno (Opcional)

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_CONTACT_EMAIL=info@diablosrojosazul.com
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en Tailwind:

- **Rojo Principal**: `bg-red-700` (#dc2626)
- **Rojo Secundario**: `bg-red-600` (#dc2626)
- **Rojo Claro**: `bg-red-50` (#fef2f2)

### Contenido

Para modificar el contenido:

- **Textos**: Editar directamente en los componentes
- **Imágenes**: Agregar en `public/images/`
- **Contacto**: Actualizar información en `Contact.tsx`

## 📱 Secciones de la Página

### 🏠 **Hero Section**

- Presentación principal
- Call-to-actions
- Estadísticas de la peña

### 👥 **Sobre Nosotros**

- Historia de la peña
- Misión y valores
- Comisión directiva

### 🚌 **Servicios**

- Viajes a la cancha
- Gestión de trámites
- Sorteos mensuales
- Proyectos sociales
- Eventos y encuentros
- Comunicación

### 📞 **Contacto**

- Formulario de contacto
- Información de contacto
- Redes sociales

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🏆 Créditos

- **Club Atlético Independiente** - Por la inspiración y los colores
- **Peña de Azul** - Por el contenido y la información
- **Next.js Team** - Por el framework increíble
- **Vercel** - Por la plataforma de deploy

## 📞 Contacto

- **GitHub**: [@MatiScavuzzo](https://github.com/MatiScavuzzo)
- **Sitio Web**: [diablosrojosazul.com](https://diablosrojosazul.com)
- **Proyecto**: Landing page para la Peña de Azul del Club Atlético Independiente

---

**¿Querés contactarme?**

- Para temas del proyecto: [Abrir un issue](https://github.com/MatiScavuzzo/diablosrojosazul/issues)
- Para contacto personal: [Email](mailto:mati.ntvg@hotmail.com)

---

**¡Todo Rojo! 🔴🔴**

_Desarrollado con ❤️ para la Peña de Azul del Club Atlético Independiente_
