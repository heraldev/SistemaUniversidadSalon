import { Link } from 'react-router-dom';

// Lista temporal hasta conectar la información real.
const carreras = [
  { nombre: 'Ingeniería en Software', facultad: 'Tecnologías de la Información' },
  { nombre: 'Licenciatura en Negocios', facultad: 'Administración' },
];

export default function AdminDashboard() {
  return (
    <section>
      <h1 className="page-title">Gestión de carreras</h1>
      <div className="admin-actions">
        <Link to="/admin/carreras/nueva" className="action-btn">Nueva carrera</Link>
      </div>
      <div className="panel-card">
        <h2 className="section-title">Carreras registradas</h2>
        <div className="table-scroll">
          <table className="custom-table">
            <thead><tr><th>Carrera</th><th>Facultad</th></tr></thead>
            <tbody>
              {carreras.map(carrera => (
                <tr key={carrera.nombre}>
                  <td>{carrera.nombre}</td>
                  <td>{carrera.facultad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
