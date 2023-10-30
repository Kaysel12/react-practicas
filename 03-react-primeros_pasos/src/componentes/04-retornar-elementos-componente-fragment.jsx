// Retornar elementos en el componente Fragment.

// Esto quiere decir que necesitamos siempre tener una etiqueta padre para ponder renderizarlo en la web
export const ComponenteFragment = () => {
    return (
        <div>
            <p>Hola como estas</p>
            <h1>Francisco</h1>
        </div>
    )
}
// La forma correcta si queremos agregar un fragmento y no tener que marcar un div, es la siguiente.
// De esta manera no rompemos nuestro diseño con otra etiqueta
export const ComponenteFragment2 = () => {
    return (
        <>
            <p>Hola como estas</p>
            <h1>Francisco</h1>
            <p>Hola como estas</p>
            <h1>Marta</h1>
        </>
    )
}
