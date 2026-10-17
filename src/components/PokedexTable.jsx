import PropTypes from 'prop-types';

function PokedexTable({ personajes }) {
    return (
        <div className="table_container">
            <table className="pokedex_table">
                
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Especie</th>
                        <th>Estado</th>
                        <th>Origen</th>
                    </tr>
                </thead>

                <tbody>
                    {personajes.map((personaje) => (
                        <tr key={personaje.id}>
                            <td>
                                <img 
                                    src={personaje.image} 
                                    alt={`Foto de ${personaje.name}`} 
                                    className="table_image"
                                />
                            </td>
                            <td className="table_name">{personaje.name}</td>
                            <td>
                                <span className="table_badge">{personaje.species}</span>
                            </td>
                            <td>{personaje.status}</td>
                            <td>{personaje.origin.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

PokedexTable.propTypes = {
    personajes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            origin: PropTypes.shape({
                name: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired
};

export default PokedexTable;