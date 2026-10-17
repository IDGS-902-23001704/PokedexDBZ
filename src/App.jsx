import { useState, useEffect } from 'react';
import './App.css';
import PokedexTable from './components/PokedexTable'; 
import FilterBar from './components/FilterBar';

function App() {
  const [personajesRM, setPersonajesRM] = useState([]);
  
  const [tipoActivo, setTipoActivo] = useState('Todos');

  const obtenerPersonajes = async () => {
    try {
      // fetch para pedir los datos a la API 
      const peticion = await fetch('https://rickandmortyapi.com/api/character');
      const datos = await peticion.json();
      
      setPersonajesRM(datos.results);
    } catch (error) {
      console.log("Error al cargar los personajes:", error);
    }
  };

  useEffect(() => {
    obtenerPersonajes();
  }, []); 

  const tiposUnicos = ['Todos', 'Human', 'Alien', 'Otras Criaturas'];

  const personajesFiltrados = personajesRM.filter(personaje => {
    // Si el botón es 'Todos', dejamos pasar a todos.
    if (tipoActivo === 'Todos') return true;
    if (tipoActivo === 'Human') return personaje.species === 'Human';
    if (tipoActivo === 'Alien') return personaje.species === 'Alien';
    
    if (tipoActivo === 'Otras Criaturas') {
        return personaje.species !== 'Human' && personaje.species !== 'Alien';
    }
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