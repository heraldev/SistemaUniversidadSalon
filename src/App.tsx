import { Link, NavLink, useLocation } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './index.css';
import './App.css';

export default function App() {
  const esAdmin = useLocation().pathname.startsWith('/admin');

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link className="brand" to="/alumno/carreras">Portal Oferta Académica</Link>
          <nav className="header-links" aria-label="Navegación principal">
            {esAdmin && <NavLink to="/alumno/carreras" className="header-link">Ver carreras</NavLink>}
            <NavLink to="/admin/carreras" className="header-link">Panel admin</NavLink>
          </nav>
        </div>
      </header>
      <main className="container main-area"><AppRouter /></main>
    </div>
  );
}
