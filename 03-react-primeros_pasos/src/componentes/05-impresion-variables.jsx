// Imprimir variables en React

// Para imprimir variables o funciones solo necesitamos usar corchetes {} y dentro poner la variable.

// En caso de que queramos subir un objeto debemos utilizar JSON.stringify, de esta forma
// Podremos imprimirlo.

const object = {
    message: "Hola Mundo",
    title: "Fernando"
}

function saludo() {
    return "Hola, Kay"
}

export const ImpresionVariable = () => {
    
    return (
        <>
        <code>{ JSON.stringify(object) }</code>
        <h1>{ saludo() }</h1>
        </>
    )    
}

// Nota
// Es recomendable que si no hay necesidad de poner una funcion o variable estatica dentro del componente
// no se debe hacer. Lo mejor es dejarla afuera para que cuando se vuelva a renderizar no vuelva a declarar el
// espacio de memoria nuevamente.