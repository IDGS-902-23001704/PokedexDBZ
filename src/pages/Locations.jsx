import { useState, useEffect } from 'react';

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(res => res.json())
      .then(data => {
        setLocations(data.results);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar ubicaciones:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Cargando ubicaciones...</p>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Ubicaciones del Multiverso</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {locations.map(loc => (
          <div key={loc.id} style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{loc.name}</h3>
            <p style={{ margin: '5px 0' }}><strong>Tipo:</strong> {loc.type}</p>
            <p style={{ margin: '5px 0' }}><strong>Dimensión:</strong> {loc.dimension}</p>
          </div>
        ))}
      </div>
    </div>
  );
}