// Servicio de autenticación. El backend aún no expone endpoints de auth;
// por ahora simula un login local para habilitar la navegación por rol.
export function login(usuario, rol = 'admin') {
  // Simulación: en una versión real se llamaría a POST /api/auth/login
  return Promise.resolve({ usuario, rol });
}

export function logout() {
  return Promise.resolve(null);
}
