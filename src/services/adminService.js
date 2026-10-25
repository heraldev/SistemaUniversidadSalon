// Servicio de administración de carreras: consume la API REST del backend
// (Spring Boot, puerto 8081). El backend expone /api/carreras con CORS
// habilitado para http://localhost:5173.
const API_BASE = 'http://localhost:8081/api/carreras';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`Error ${res.status} llamando a ${API_BASE}${path}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const listarCarreras = (estado = null) =>
  request(estado ? `?estado=${encodeURIComponent(estado)}` : '');

export const obtenerCarrera = (id) => request(`/${id}`);

export const crearCarrera = (carrera) =>
  request('', { method: 'POST', body: JSON.stringify(carrera) });

export const actualizarCarrera = (id, datos) =>
  request(`/${id}`, { method: 'PUT', body: JSON.stringify(datos) });

export const eliminarCarrera = (id) =>
  request(`/${id}`, { method: 'DELETE' });

export const publicarCarrera = (id) =>
  request(`/${id}/publicar`, { method: 'POST' });
