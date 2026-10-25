# Portal Oferta Académica — Frontend

Proyecto escolar de Desarrollo Web Integral. React + TypeScript + Vite, React Router y Bootstrap 5.

## Iniciar
1. Abrir una terminal en esta carpeta.
2. Ejecutar `npm install` (solo la primera vez).
3. Ejecutar `npm run dev` y abrir la dirección indicada.
4. Revisar los cambios con `npm run build` antes de subirlos.

## Reglas simples del equipo
- Cada integrante trabaja en una rama propia, no directamente en `main`.
- Antes de trabajar, actualizar desde `upstream/main` e incorporar los cambios a su rama.
- No cambiar rutas, nombres de componentes ni contratos de API sin avisar al equipo.
- Mantener componentes pequeños, nombres claros y CSS común en `src/App.css`.
- Los datos mostrados hoy son **simulados**. No confundirlos con datos del backend.
- No subir `.git`, `node_modules`, `.env` ni contraseñas en ZIP o commits.
- Probar en escritorio y celular; comprobar navegación y `npm run build`.
- Hacer commits descriptivos y abrir Pull Request hacia el repositorio original.

## Carpetas
- `src/`: código del frontend, componentes y estilos.
- `src/views/`: pantallas divididas por tipo de usuario.
- `src/routes/`: direcciones URL y navegación.
- `src/services/`: comunicación futura con backend.
- `public/`: imágenes y recursos estáticos.

## Integración futura con backend
Conservar el diseño y reemplazar arreglos simulados de las vistas por datos obtenidos de `src/services/`. Manejar estados de carga, errores y lista vacía. Nunca colocar URLs sensibles ni contraseñas en componentes. La autorización real debe validarse también en el backend.

## Diseño simple
La presentación utiliza estilos básicos en `src/App.css` y `src/index.css`.
Para mantener uniforme el frontend, utiliza las clases ya existentes (`career-card`, `panel-card`, `action-btn`) antes de crear nuevos estilos.
Las carreras que se muestran son ejemplos; no se guardan ni consultan datos reales todavía.
