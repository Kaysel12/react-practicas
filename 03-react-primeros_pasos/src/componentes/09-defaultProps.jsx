// DefaultProps
// Cuando tratamos con las default props lo unico que hacemos es agregar valores por defectos a las props.

// PropTypes
// Los proptypes se utilizan para agregar reglas a los props de un componente.
// Es decir, se crean parametros con restrincciones y tambien se puede marcar si es obligatorio.

// Ejemplo
import PropTypes from "prop-types";

const PropTypeExample = ( { saludo, pregunta } ) => {
    return(
        <>
            <div>
                <p>{ saludo }</p>
                <p>{ pregunta }</p>
            </div>
        </>
    );
};

export default PropTypeExample;


// De esta forma se evita usar typescript y se asegura el desarrollo.
PropTypeExample.propTypes = {
    saludo: PropTypes.string.isRequired,
    pregunta: PropTypes.string.isRequired,
}