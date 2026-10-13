import { useState } from 'react'
import './App.css'
import PokedexGrid from './components/PokedexGrid'
import FilterBar from './components/FilterBar'

function App() {
  // Datos de los personajes
  const personajesDBZ = [
    { id: 1, nombre: "Goku", anio: 1984, tipo: "Saiyajin", descripcion: "Guerrero criado en la Tierra.", emoji: "🥋", color: "#ff7b00", imagen: "/goku.png" },
    { id: 2, nombre: "Vegeta", anio: 1988, tipo: "Saiyajin", descripcion: "Orgulloso príncipe Saiyajin.", emoji: "👑", color: "#0044ff", imagen: "/vegeta.png" },
    { id: 3, nombre: "Piccolo", anio: 1988, tipo: "Namekiano", descripcion: "Guerrero táctico originario de Namekusein.", emoji: "🟢", color: "#00aa00", imagen: "/piccolo.png" },
    { id: 4, nombre: "Freezer", anio: 1989, tipo: "Demonio del Frío", descripcion: "Emperador del mal y conquistador de planetas.", emoji: "❄️", color: "#aa00ff", imagen: "/freezer.png" },
    { id: 5, nombre: "Gohan", anio: 1988, tipo: "Híbrido", descripcion: "Hijo mayor de Goku con un poder oculto inmenso.", emoji: "📚", color: "#ff0000", imagen: "/gohan.png" }
  ];

  // 1. Estado para guardar el filtro seleccionado (Por defecto mostramos 'Todos')[cite: 2]
  const [tipoActivo, setTipoActivo] = useState('Todos');

  // 2. Extraemos los tipos únicos para los botones (Saiyajin, Namekiano, etc.) y agregamos la opción 'Todos'
  const tiposUnicos = ['Todos', ...new Set(personajesDBZ.map(personaje => personaje.tipo))];

  // 3. Filtramos los personajes: si dice 'Todos', pasamos el arreglo completo, si no, solo los que coinciden con el tipo
  const personajesFiltrados = tipoActivo === 'Todos' 
    ? personajesDBZ 
    : personajesDBZ.filter(personaje => personaje.tipo === tipoActivo);

  return (
    <>
      <h1 className="banner_principal">Pokedex DBZ</h1>
      
      {/* Barra de Filtros: Le pasamos los tipos, el tipo actual y la función para cambiarlo[cite: 2] */}
      <FilterBar 
        tipos={tiposUnicos} 
        tipoActivo={tipoActivo} 
        onSeleccionar={setTipoActivo} 
      />

      {/* Renderizamos las tarjetas, pero ahora usando el arreglo filtrado */}
      <PokedexGrid personajes={personajesFiltrados} />
    </>
  )
}

export default App;