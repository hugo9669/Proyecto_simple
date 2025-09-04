# Documentación
Descripción.
Este es un proyecto de aplicación web de gestión de tareas que permite a los usuarios crear, visualizar, marcar como completadas y eliminar tareas de manera interactiva.
Funcionalidades Principales
1. Crear tareas: Los usuarios pueden agregar nuevas tareas escribiendo un título
2. Ver tareas: Lista todas las tareas existentes
3. Marcar como completada: Hacer clic en una tarea para marcarla como terminada (se tacha)
4. Eliminar tareas: Botón de eliminar para quitar tareas no deseadas
1. Frontend
El frontend se desarrolló utilizando las siguientes tecnologías:
• Vite: Herramienta de construcción rápida para proyectos frontend.
• React: Librería de JavaScript para la construcción de interfaces de usuario.
• TailwindCSS: Framework CSS para un diseño rápido y adaptable.

2. Backend
El backend se desarrolló con las siguientes tecnologías:
• Node.js: Entorno de ejecución de JavaScript en el lado del servidor.
• Express: Framework minimalista para la creación de servidores HTTP y APIs REST.

3. Base de Datos
La base de datos utilizada en el diseño del sistema es MySQL (puede adaptarse a PostgreSQL o SQLite). 
4. Herramientas de desarrollo
Las herramientas de desarrollo utilizadas fueron:
•	Vite.
•	ESLint: Linter para mantener la calidad del código JavaScript.
•	SWC: Compilador rápido de JavaScript y TypeScript (Usado en JavaScript para nuestro proyecto).


¿Por qué se eligieron estas tecnologías?
1. Arquitectura Full-Stack JavaScript
•	Node.js + Express: Permite usar JavaScript tanto en el frontend como en el backend, facilitando el desarrollo y mantenimiento.
•	API REST: Arquitectura estándar y escalable para la comunicación entre cliente y servidor.

2. React para la Interfaz de Usuario
•	Componentes reutilizables: Facilita la creación de interfaces modulares (TodoForm, TodoList)
•	Estado local: Hooks como useState y useEffect para manejar el estado de la aplicación
•	Virtual DOM: Renderizado eficiente y actualizaciones optimizadas

3. Vite como Bundler
•	Desarrollo rápido: Hot Module Replacement (HMR) para cambios instantáneos.
•	Configuración simple: Configuración mínima necesaria para proyectos React.
•	SWC: Compilación más rápida que Babel para mejor experiencia de desarrollo.

4. Herramientas de Calidad
•	ESLint: Mantiene estándares de código y detecta errores potenciales.
•	CORS: Permite que el frontend se comunique con el backend en diferentes puertos durante el desarrollo.

