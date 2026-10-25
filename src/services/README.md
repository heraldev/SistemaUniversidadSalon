# services — Conexión con backend

- `adminService.js` y `authService.js` son la base para las llamadas a API.
- Centralizar aquí las solicitudes HTTP; las vistas solo consumen funciones.
- Acordar endpoint, método, campos y errores con el equipo de backend.
- Evitar escribir direcciones privadas, secretos o tokens directamente en Git.
- Manejar errores y validar las respuestas antes de mostrarlas.
- Los datos visuales actuales están simulados en las vistas; aún no hay integración real.
