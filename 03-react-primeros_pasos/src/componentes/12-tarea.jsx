// Tarea
// Crear un boton para reducir
// Crear un boton para aumentar
// Crear un boton para restablecer a 0

import React, {useState} from "react";

const TareaUseState = () => {
    
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const disminuir = () => {
        setContador(contador - 1);
    };

    const restaurar = () => {
        setContador(0)
    }
    
    return(
        <>
            <h1>Contador Avanzado</h1>
            <p>{ contador }</p>

            <button className="button" onClick={ aumentar }>+</button>
            <button className="button" onClick={ disminuir }>-</button>
            <button className="button" onClick={ restaurar }>Restaurar</button>
        </>
    );
}

export default TareaUseState;