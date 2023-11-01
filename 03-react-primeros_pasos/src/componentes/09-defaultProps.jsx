// DefaultProps
// Cuando tratamos con las default props lo unico que hacemos es agregar valores por defectos a las props.

// Ejemplo
import PropTypes from "prop-types";

const DefaultPropsExample = ( { saludo, pregunta } ) => {
    return(
        <>
            <div>
                <p>{ saludo }</p>
                <p>{ pregunta }</p>
            </div>
        </>
    );
};

export default DefaultPropsExample;


DefaultPropsExample.propTypes = {
    saludo: PropTypes.string.isRequired,
    pregunta: PropTypes.string.isRequired,
}

DefaultPropsExample.defaultProps = {
    saludo: "No hay saludo",
    pregunta: "No hay pregunta"
}