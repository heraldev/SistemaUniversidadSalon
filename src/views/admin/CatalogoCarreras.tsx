export default function CatalogoCarreras() {
  return (
    <div>
      <h2 className="mb-4 text-center">Ofertas Académicas</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 bg-light">
            <div className="card-body">
              <span className="badge bg-primary mb-2">Ingeniería</span>
              <h4 className="card-title">Ingeniería en Software</h4>
              <p className="card-text text-muted">Aprende desarrollo web, móvil, bases de datos y arquitectura de sistemas.</p>
              <button className="btn btn-outline-primary btn-sm">Ver Plan de Estudios</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 bg-light">
            <div className="card-body">
              <span className="badge bg-success mb-2">Licenciatura</span>
              <h4 className="card-title">Licenciatura en Negocios</h4>
              <p className="card-text text-muted">Formación integral en gestión empresarial y finanzas corporativas.</p>
              <button className="btn btn-outline-primary btn-sm">Ver Plan de Estudios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}