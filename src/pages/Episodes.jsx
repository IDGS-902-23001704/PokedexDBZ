import { useState, useEffect } from 'react';

export default function Episodes() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(data => setEpisodios(data.results))
      .catch(err => console.error("Error cargando episodios:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Episodios de Rick y Morty</h2>
      <ul>
        {episodios.map(ep => (
          <li key={ep.id} style={{ margin: '10px 0' }}>
            <strong>{ep.episode}</strong>: {ep.name} ({ep.air_date})
          </li>
        ))}
      </ul>
    </div>
  );
}