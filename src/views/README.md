# views — Pantallas

- `student/`: páginas que usan alumnos.
- `admin/`: herramientas administrativas.
- `auth/`: inicio de sesión y autenticación.
- Cada pantalla tiene su componente propio. No mezclar permisos entre perfiles.
- No escribir conexiones HTTP directamente aquí; esas van en `services/`.
- Mostrar estados de carga, error y sin información cuando llegue la API.
