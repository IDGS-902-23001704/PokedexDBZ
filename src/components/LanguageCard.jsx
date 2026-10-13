import PropTypes from 'prop-types'
import "../styles/LanguagesCard.css"

// se agrega imagen a los parámetros de la funcion
function LanguageCard( {nombre, anio, tipo, descripcion, emoji, color, imagen} ) {
    return(
        <article className='card' style={{"--card-color": color}}>
            
            
            <div className="card_image_container">
                <img src={imagen} alt={`Foto de ${nombre}`} className="card_image" />
            </div>

            <div className="card__header">
                <span className="card__emoji"> {emoji} </span>
                <h2 className="card__title"> {nombre}</h2>
            </div>

            <span className="card__badge"> {tipo} </span>

            <p className='card__description'> {descripcion} </p>

            <>
                <footer className='card__footer'>
                    Creado en {anio}
                </footer>
            </>
        </article>
    )
}

LanguageCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    anio: PropTypes.number.isRequired,
    tipo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired 
}

export default LanguageCard;