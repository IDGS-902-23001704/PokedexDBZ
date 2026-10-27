import { useState, useEffect } from 'react';
import PokedexTable from '../components/PokedexTable'; 
import FilterBar from '../components/FilterBar';

export default function Home() {
  const [personajesRM, setPersonajesRM] = useState(() => {
    const personajesGuardados = localStorage.getItem('personajes_rm');
    return personajesGuardados ? JSON.parse(personajesGuardados) : [];
  });
  
  const [tipoActivo, setTipoActivo] = useState(() => {
    return localStorage.getItem('filtro_activo') || 'Todos';
  });

  useEffect(() => {
    localStorage.setItem('filtro_activo', tipoActivo);
  }, [tipoActivo]);

  const obtenerPersonajes = async () => {
    try {
      const peticion = await fetch('https://rickandmortyapi.com/api/character');
      const datos = await peticion.json();
      setPersonajesRM(datos.results);
      localStorage.setItem('personajes_rm', JSON.stringify(datos.results));
    } catch (error) {
      console.log("Error al cargar los personajes:", error);
    }
  };

  useEffect(() => {
    if (personajesRM.length === 0) {
      obtenerPersonajes();
    }
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
    <div>
      <h2 className="banner_principal">Catálogo de Personajes</h2>
      <FilterBar 
        tipos={tiposUnicos} 
        tipoActivo={tipoActivo} 
        onSeleccionar={setTipoActivo} 
      />
      <PokedexTable personajes={personajesFiltrados} />
    </div>
  );
}