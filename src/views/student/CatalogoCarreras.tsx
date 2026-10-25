import { useEffect, useState } from 'react';
import { listarCarreras, type Carrera } from '../../services/adminService';

export default function CatalogoCarreras() {
  const [carreras, setCarreras] = useState<Carrera[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    listarCarreras('PUBLICADA')
      .then(setCarreras)
      .catch(e => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setCargando(false));
  }, []);

  return (
    <section>
      <h1 className="page-title">Oferta académica disponible</h1>
      {cargando && <p className="text-muted">Cargando carreras…</p>}
      {error && <p className="text-danger">No se pudo conectar con el backend: {error}</p>}
      {!cargando && !error && (
        <div className="career-grid">
          {carreras.map(carrera => (
            <article key={carrera.id} className="career-card">
              <span className="career-type">{carrera.facultad}</span>
              <h2>{carrera.nombre}</h2>
              <p>{carrera.descripcion}</p>
              <button type="button" className="action-btn secondary">Ver más información</button>
            </article>
          ))}
          {carreras.length === 0 && (
            <p className="text-muted">Aún no hay carreras publicadas.</p>
          )}
        </div>
      )}
    </section>
  );
}
