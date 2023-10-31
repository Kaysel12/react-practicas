// Los props
// Es una comunicacion que hay entre componentes para hacerlo mas dinamico el tema de la informacion

export const PropsComunication = ( props ) => {
    
    return(
        <>
            <h3>{ props.title }</h3>
            <h3>{ props.comment }</h3>
        </>
    )
}

// Ademas, Usamos la herramienta component de nuestro navegador para ver los props y demas

// Regulrmente se utiliza de otra forma, es decir, destructurando el objeto props.
export const PropsComunication2 = ( { title, comment } ) => {
    
    return(
        <>
            <h3>{ title }</h3>
            <h3>{ comment }</h3>
        </>
    )
}