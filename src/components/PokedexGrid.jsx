import PropTypes from 'prop-types';
import LanguageCard from './LanguageCard';

function PokedexGrid({ personajes }) {
    return (
        <>
            <div className="cards_container">
                {personajes.map((personaje) => (
                    <LanguageCard 
                        key={personaje.id} 
                        nombre={personaje.nombre}
                        anio={personaje.anio}
                        tipo={personaje.tipo}
                        descripcion={personaje.descripcion}
                        emoji={personaje.emoji}
                        color={personaje.color}
                        imagen={personaje.imagen} 
                    />
                ))}
            </div>
        </>
    );
}

PokedexGrid.propTypes = {
    personajes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            anio: PropTypes.number.isRequired,
            tipo: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            emoji: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired 
        })
    ).isRequired
};

export default PokedexGrid;