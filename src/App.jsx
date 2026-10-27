import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#20232a', color: '#fff' }}>
        <Link to="/" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>
          Personajes
        </Link>
        <Link to="/episodes" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>
          Episodios
        </Link>
        <Link to="/locations" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>
          Locaciones
        </Link>
        <Link to="/about" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>
          Acerca de
        </Link>
      </nav>

      <h1 className="banner_principal" style={{ textAlign: 'center', margin: '20px 0' }}>
        Pokedex Rick & Morty
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;