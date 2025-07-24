# Portfolio Personal - Martin Fraticelli

Un portfolio moderno, minimalista y profesional construido con React y Vite, configurado para Martin Fraticelli - Ingeniero Electrónico y Desarrollador Web.

## Características

- ✨ Diseño minimalista y profesional
- 🌐 Soporte multiidioma (Español/Inglés)
- 🌓 Modo oscuro/claro con toggle
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 🎨 Animaciones fluidas con Framer Motion
- 🎯 SEO optimizado
- ⚡ Rendimiento optimizado con Vite

## Instalación

1. Clona el repositorio o copia los archivos del portfolio
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

4. Para construir el proyecto para producción:

```bash
npm run build
```

## Personalización

### 1. Información Personal

Edita los siguientes archivos para agregar tu información:

- **src/components/Hero.jsx**: Cambia "Tu Nombre" por tu nombre real
- **src/components/Contact.jsx**: Actualiza los enlaces de email, LinkedIn y GitHub
- **src/components/Footer.jsx**: Actualiza tu nombre en el footer

### 2. Proyectos

En **src/components/Projects.jsx**, actualiza el array `projects` con tus propios proyectos:

```javascript
const projects = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto',
    image: '/ruta-a-la-imagen.jpg',
    technologies: ['React', 'Node.js'],
    category: 'web',
    liveUrl: 'https://proyecto-live.com',
    githubUrl: 'https://github.com/usuario/proyecto',
  },
  // Más proyectos...
];
```

### 3. Imágenes

Agrega las siguientes imágenes en la carpeta `public`:

- **profile.jpg**: Tu foto de perfil (recomendado: 400x400px)
- **project1.jpg, project2.jpg, etc**: Imágenes de tus proyectos (recomendado: 800x600px)
- **cv.pdf**: Tu curriculum vitae
- **favicon.svg**: Icono del sitio

### 4. SEO

Actualiza los metadatos en **index.html**:

- Título del sitio
- Descripción
- URL canónica
- Imágenes Open Graph

### 5. Colores

Los colores se pueden personalizar en **tailwind.config.js**:

```javascript
colors: {
  primary: {
    light: '#3B82F6', // Color principal en modo claro
    dark: '#60A5FA',  // Color principal en modo oscuro
  },
  // Más colores...
}
```

## Estructura del Proyecto

```
portfolio/
├── public/
│   ├── profile.jpg
│   ├── project1.jpg
│   └── cv.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── contexts/
│   │   ├── ThemeContext.jsx
│   │   └── LanguageContext.jsx
│   ├── hooks/
│   │   └── useScrollPosition.js
│   ├── translations/
│   │   └── translations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Despliegue

El proyecto está configurado para ser desplegado fácilmente en:

- **Netlify**: Arrastra la carpeta `dist` después de ejecutar `npm run build`
- **Vercel**: Conecta tu repositorio de GitHub
- **GitHub Pages**: Usa el workflow de GitHub Actions incluido

## Tecnologías Utilizadas

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para tu portfolio personal.
