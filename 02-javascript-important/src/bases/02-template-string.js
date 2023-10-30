const nombre = 'Fernando';
const apellido = 'Abreu';

const nombreCompleto = 
`
${apellido} 
${nombre}
${1 + 1}
${getSaludo()}
`;

function getSaludo() {
    return 'Hola mundo'
}

console.log(nombreCompleto);