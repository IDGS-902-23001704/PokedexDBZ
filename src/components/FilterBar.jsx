import PropTypes from 'prop-types';
import '../styles/LanguagesCard.css'; 

function FilterBar({tipos, tipoActivo, onSeleccionar}){
    return(
        <div className="filter_bar">
            {tipos.map(tipo => (
                <button 
                    key={tipo}
                    onClick={() => onSeleccionar(tipo)}
                    className={tipo === tipoActivo ? 'activo' : ''}
                >
                    {tipo}
                </button>
            ))}
        </div>
    )
};

FilterBar.propTypes = {
    tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
    tipoActivo: PropTypes.string.isRequired,
    onSeleccionar: PropTypes.func.isRequired
};

export default FilterBar;