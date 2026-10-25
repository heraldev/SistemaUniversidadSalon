import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { crearCarrera } from '../../services/adminService';

export default function SubirCarrera() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [facultad, setFacultad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGuardando(true);
    setError(null);
    try {
      await crearCarrera({ nombre, facultad, descripcion });
      navigate('/admin/carreras');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setGuardando(false);
    }
  }

  return (
    <section>
      <Link to="/admin/carreras" className="back-link">Volver a carreras</Link>
      <h1 className="page-title page-title-spaced">Nueva carrera</h1>
      <div className="panel-card form-card">
        <form onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="nombre">Nombre de la carrera</label>
            <input
              id="nombre"
              className="form-control"
              placeholder="Ej. Ingeniería Mecatrónica"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="facultad">Facultad / Área</label>
            <input
              id="facultad"
              className="form-control"
              placeholder="Ej. Ingeniería"
              value={facultad}
              onChange={e => setFacultad(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="descripcion">Descripción y plan de estudios</label>
            <textarea
              id="descripcion"
              className="form-control"
              rows={5}
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
            />
          </div>
          {error && <p className="text-danger">No se pudo guardar: {error}</p>}
          <div className="form-actions">
            <Link to="/admin/carreras" className="action-btn secondary">Cancelar</Link>
            <button className="action-btn" type="submit" disabled={guardando}>
              {guardando ? 'Guardando…' : 'Guardar borrador'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
