// Carreras de ejemplo hasta que se conecte el backend.
const carreras = [
  { id: 1, tipo: 'Ingeniería', nombre: 'Ingeniería en Software', descripcion: 'Aprende desarrollo web, aplicaciones móviles y bases de datos.' },
  { id: 2, tipo: 'Licenciatura', nombre: 'Licenciatura en Negocios', descripcion: 'Formación en administración, negocios y finanzas.' },
];

export default function CatalogoCarreras() {
  return (
    <section>
      <h1 className="page-title">Oferta académica disponible</h1>
      <div className="career-grid">
        {carreras.map(carrera => (
          <article key={carrera.id} className="career-card">
            <span className="career-type">{carrera.tipo}</span>
            <h2>{carrera.nombre}</h2>
            <p>{carrera.descripcion}</p>
            {/* La pantalla de detalle se implementará después. */}
            <button type="button" className="action-btn secondary">Ver más información</button>
          </article>
        ))}
      </div>
    </section>
  );
}
