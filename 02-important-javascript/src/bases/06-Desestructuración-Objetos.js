// Desestructuración de un objeto
const persona = {
    edad: 45,
    nombre: "José Matías",
    clave: "RD13454"
}
console.log(persona);//{edad: 45, nombre: "José Matías", clave: "RD13454"}

// const { clave, nombre, edad } = persona;
// console.log(clave);
// console.log(nombre);
// console.log(edad);

// Destructuracion de un objeto en una funcion
const destructurarPersona = ( {nombre, edad} ) => {
    console.log(nombre, edad);
}

destructurarPersona(persona);

// Otra forma
const { nombre, edad } = destructurarPersona(persona);
console.log(nombre, edad);