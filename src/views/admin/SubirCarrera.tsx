import { Link } from 'react-router-dom';

export default function SubirCarrera() {
  return (
    <section>
      <Link to="/admin/carreras" className="back-link">Volver a carreras</Link>
      <h1 className="page-title page-title-spaced">Nueva carrera</h1>
      <div className="panel-card form-card">
        {/* El formulario no envía datos hasta tener backend. */}
        <form onSubmit={e => e.preventDefault()}>
          <div className="field">
            <label htmlFor="nombre">Nombre de la carrera</label>
            <input id="nombre" className="form-control" placeholder="Ej. Ingeniería Mecatrónica" />
          </div>
          <div className="field">
            <label htmlFor="facultad">Facultad / Área</label>
            <input id="facultad" className="form-control" placeholder="Ej. Ingeniería" />
          </div>
          <div className="field">
            <label htmlFor="descripcion">Descripción y plan de estudios</label>
            <textarea id="descripcion" className="form-control" rows={5} />
          </div>
          <div className="form-actions">
            <Link to="/admin/carreras" className="action-btn secondary">Cancelar</Link>
            <button className="action-btn" type="submit" disabled>Guardar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
