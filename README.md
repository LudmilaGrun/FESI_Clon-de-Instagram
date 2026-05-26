README - Clon Web de Instagram con React
Descripción del proyecto

Este proyecto consiste en el desarrollo de un clon web de Instagram realizado con React. La aplicación consume imágenes de gatos desde una API externa y las muestra en formato de publicaciones similares a una red social moderna.

El diseño visual fue inspirado en un diseño de Figma con una estética moderna y minimalista, respetando la estructura visual de Instagram.

La aplicación incluye:

Feed de publicaciones
Historias
Perfil de usuario emulado
Modal de visualización individual de publicaciones
Interacciones con likes
Diseño responsive y moderno
Tecnologías utilizadas
React
Axios
CSS
JavaScript
Vite
API utilizada

Se utilizó:

The Cat API

API:
The Cat API

Endpoint utilizado:

https://api.thecatapi.com/v1/images/search?limit=10
Diseño de referencia en Figma

Diseño utilizado como inspiración:

Instagram Web UI Recreated - Figma

El proyecto intentó respetar:

Distribución visual
Espaciados
Colores
Estilo moderno
Tipografías
Diseño general del feed y perfil
Organización del proyecto

El proyecto fue dividido en componentes reutilizables para mantener el código organizado y facilitar el mantenimiento.

Estructura general
src/
│
├── components/
│   ├── Encabezado/
│   ├── BarraLateral/
│   ├── Feed/
│   ├── Historias/
│   ├── Historia/
│   ├── Publicacion/
│   ├── EncabezadoPublicacion/
│   ├── AccionesPublicacion/
│   ├── InfoPublicacion/
│   ├── ModalPublicacion/
│
├── data/
│   └── historias.js
│
├── App.jsx
│
└── main.jsx
Componentes creados
App

Componente principal de la aplicación.

Se encarga de renderizar:

Barra lateral
Encabezado
Feed principal
Encabezado

Representa la barra superior de la aplicación.

Incluye:

Título
Buscador
Botón de nuevo posteo
Íconos de acciones
BarraLateral

Representa el perfil del usuario emulado y el menú lateral.

Incluye:

Foto de perfil
Biografía
Estadísticas
Botón editar perfil
Navegación visual
Feed

Componente encargado de:

Consumir la API
Guardar publicaciones
Mostrar historias
Mostrar publicaciones
Manejar la publicación seleccionada

Este componente utiliza:

useEffect
useState
Axios
Historias

Renderiza todas las historias disponibles utilizando el componente Historia.

Historia

Muestra:

Foto de perfil
Nombre de usuario
Publicacion

Representa una publicación individual del feed.

Incluye:

Encabezado
Imagen
Likes
Información de la publicación
EncabezadoPublicacion

Muestra:

Foto de perfil
Nombre de usuario
Menú visual
AccionesPublicacion

Maneja las acciones de interacción:

Like
Guardado
Compartir
InfoPublicacion

Muestra:

Descripción
Likes
Información adicional
ModalPublicacion

Permite visualizar una publicación individual de forma ampliada.

Incluye:

Imagen grande
Usuario
Likes
Comentarios simulados
Botón de cierre
Uso de props

Las props fueron utilizadas para comunicar componentes entre sí.

Ejemplos:

Información de publicaciones
Usuarios
Likes
Funciones de interacción
Publicación seleccionada

Ejemplo:

<Publicacion publicacion={publicacion} />
Hooks utilizados
useState

Fue utilizado para:

Guardar publicaciones
Manejar likes
Guardar la publicación seleccionada
Manejar el estado del modal
useEffect

Fue utilizado para:

Consumir la API al cargar la página
Consumo de API

La aplicación consume imágenes utilizando Axios.

La petición se realiza dentro de useEffect al iniciar la aplicación.

Las imágenes obtenidas son transformadas en publicaciones con:

Usuario
Likes
Descripción
Imagen
Visualización individual de publicaciones

La visualización individual fue resuelta mediante un modal.

Cuando el usuario selecciona una publicación:

se guarda en un estado
se abre un modal
se muestra información ampliada

Información mostrada:

Imagen ampliada
Usuario
Likes
Descripción
Comentarios simulados
Perfil de usuario emulado

La aplicación incluye un usuario ya logueado de manera simulada.

Se muestran:

Foto de perfil
Nombre
Biografía
Seguidores
Seguidos
Cantidad de publicaciones

No se implementó sistema de login ni autenticación real.

Diseño visual

Se trabajó un diseño moderno inspirado en Instagram.

Características:

Degradados estilo Instagram
Tarjetas modernas
Historias circulares
Modal visual
Feed dinámico
Tipografía moderna
Distribución similar a redes sociales reales
Cómo ejecutar el proyecto
1. Clonar el repositorio
git clone URL_DEL_REPOSITORIO
2. Instalar dependencias
npm install
3. Ejecutar el proyecto
npm run dev