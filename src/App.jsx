import { useState, useEffect } from 'react';
import './App.css';
import PokedexTable from './components/PokedexTable'; 
import FilterBar from './components/FilterBar';

function App() {
  // inicializa los personajes leyendo primero de localStorage si existen
  const [personajesRM, setPersonajesRM] = useState(() => {
    const personajesGuardados = localStorage.getItem('personajes_rm');
    return personajesGuardados ? JSON.parse(personajesGuardados) : [];
  });
  
  // inicializa el filtro leyendo de localStorage (si no hay nada, usa 'Todos')
  const [tipoActivo, setTipoActivo] = useState(() => {
    return localStorage.getItem('filtro_activo') || 'Todos';
  });

  // cuando que cambie el filtro activo, lo guarda en localStorage
  useEffect(() => {
    localStorage.setItem('filtro_activo', tipoActivo);
  }, [tipoActivo]);

  const obtenerPersonajes = async () => {
    try {
      // fetch para pedir los datos a la API 
      const peticion = await fetch('https://rickandmortyapi.com/api/character');
      const datos = await peticion.json();
      
      setPersonajesRM(datos.results);
      // gurda la lista de personajes en localStorage convertida a texto (JSON)
      localStorage.setItem('personajes_rm', JSON.stringify(datos.results));
    } catch (error) {
      console.log("Error al cargar los personajes:", error);
    }
  };

  useEffect(() => {
    obtenerPersonajes();
  }, []); 

  const tiposUnicos = ['Todos', 'Human', 'Alien', 'Otras Criaturas'];

  const personajesFiltrados = personajesRM.filter(personaje => {
    if (tipoActivo === 'Todos') return true;
    if (tipoActivo === 'Human') return personaje.species === 'Human';
    if (tipoActivo === 'Alien') return personaje.species === 'Alien';
    
    if (tipoActivo === 'Otras Criaturas') {
      return personaje.species !== 'Human' && personaje.species !== 'Alien';
    }
    return true;
  });

  return (
    <>
      <h1 className="banner_principal">Pokedex: Rick & Morty</h1>
      
      <FilterBar 
        tipos={tiposUnicos} 
        tipoActivo={tipoActivo} 
        onSeleccionar={setTipoActivo} 
      />

      <PokedexTable personajes={personajesFiltrados} />
    </>
  )
}

export default App;