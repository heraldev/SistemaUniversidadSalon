import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarCarreras, type Carrera } from '../../services/adminService';

export default function AdminDashboard() {
  const [carreras, setCarreras] = useState<Carrera[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    listarCarreras()
      .then(setCarreras)
      .catch(e => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setCargando(false));
  }, []);

  return (
    <section>
      <h1 className="page-title">Gestión de carreras</h1>
      <div className="admin-actions">
        <Link to="/admin/carreras/nueva" className="action-btn">Nueva carrera</Link>
        <Link to="/admin/carreras/publicar" className="action-btn secondary">Publicar oferta</Link>
      </div>
      <div className="panel-card">
        <h2 className="section-title">Carreras registradas</h2>
        {cargando && <p className="text-muted">Cargando carreras…</p>}
        {error && <p className="text-danger">No se pudo conectar con el backend: {error}</p>}
        {!cargando && !error && (
          <div className="table-scroll">
            <table className="custom-table">
              <thead>
                <tr><th>ID</th><th>Carrera</th><th>Facultad</th><th>Estado</th></tr>
              </thead>
              <tbody>
                {carreras.map(carrera => (
                  <tr key={carrera.id}>
                    <td>{carrera.id}</td>
                    <td>{carrera.nombre}</td>
                    <td>{carrera.facultad}</td>
                    <td>
                      <span className={carrera.estado === 'PUBLICADA' ? 'badge bg-success' : 'badge bg-secondary'}>
                        {carrera.estado}
                      </span>
                    </td>
                  </tr>
                ))}
                {carreras.length === 0 && (
                  <tr><td colSpan={4} className="text-muted">Sin carreras registradas.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
