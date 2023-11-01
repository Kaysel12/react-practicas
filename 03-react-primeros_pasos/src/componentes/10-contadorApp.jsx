// Haremos una aplicacion contador
import PropTypes from 'prop-types'
import { useState } from 'react';

const ContadorApp = () => {
    
    const [valor, setValor] = useState(0);

    const aumentar = () => {
        const valorFinal = setValor(valor + 1);
        return valor;
    };

    return(
        <>
            <h1>Contador:</h1>
            <p> { valor } </p>

            <div>
                <button onClick={ (value) => aumentar(value) }>Dar Click</button>
            </div>
        </>
    );
};

export default ContadorApp;

ContadorApp.protoType = {
    valor: PropTypes.number,
}