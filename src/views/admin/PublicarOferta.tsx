import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarCarreras, publicarCarrera, type Carrera } from '../../services/adminService';

export default function PublicarOferta() {
  const [borradores, setBorradores] = useState<Carrera[]>([]);
  const [seleccionadas, setSeleccionadas] = useState<number[]>([]);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [publicando, setPublicando] = useState(false);

  useEffect(() => {
    listarCarreras('BORRADOR')
      .then(setBorradores)
      .catch(e => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  function alternar(id: number) {
    setSeleccionadas(sel =>
      sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]
    );
  }

  async function onPublicar() {
    setPublicando(true);
    setError(null);
    setMensaje(null);
    try {
      for (const id of seleccionadas) {
        await publicarCarrera(id);
      }
      setMensaje(`${seleccionadas.length} carrera(s) publicada(s) correctamente.`);
      setSeleccionadas([]);
      setBorradores(prev => prev.filter(c => !seleccionadas.includes(c.id)));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setPublicando(false);
    }
  }

  return (
    <>
      <div className="page-intro">
        <Link to="/admin/carreras" className="back-link">Volver a carreras</Link>
        <div className="eyebrow mt-4">ADMINISTRACIÓN</div>
        <h1 className="page-title">Publicar oferta académica</h1>
        <p className="page-subtitle">
          Selecciona las carreras borrador que deseas publicar.
        </p>
      </div>
      <div className="panel-card" style={{ maxWidth: 760 }}>
        {error && <p className="text-danger">No se pudo conectar con el backend: {error}</p>}
        {borradores.length === 0 && !error && (
          <p className="text-muted">No hay carreras en estado BORRADOR por publicar.</p>
        )}
        {borradores.map(carrera => (
          <div className="form-check" key={carrera.id}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`carrera-${carrera.id}`}
              checked={seleccionadas.includes(carrera.id)}
              onChange={() => alternar(carrera.id)}
            />
            <label className="form-check-label" htmlFor={`carrera-${carrera.id}`}>
              {carrera.nombre} — {carrera.facultad}
            </label>
          </div>
        ))}
        {mensaje && <p className="text-success">{mensaje}</p>}
        <div className="d-flex justify-content-end gap-2 flex-wrap">
          <Link to="/admin/carreras" className="action-btn secondary">Cancelar</Link>
          <button
            className="action-btn"
            onClick={onPublicar}
            disabled={publicando || seleccionadas.length === 0}
          >
            {publicando ? 'Publicando…' : 'Publicar seleccionadas'}
          </button>
        </div>
      </div>
    </>
  );
}
