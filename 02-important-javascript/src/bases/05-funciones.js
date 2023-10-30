// Funciones
// Debemos declarar las funciones como constantes para que no haya una sobreescritura por error.

function saludar (nombre) {
    return `Hola, ${ nombre }`;
}


console.log(saludar); // ƒ saludar(nombre) {
                      //  return `Hola, ${nombre}`;
                      // }

saludar = "ADIOS";
console.log(saludar); // ADIOS


const saludar2 = function (nombre){
    return `hola, ${nombre}`;
}

console.log(saludar2);// error porque ya esta declarada.


// Simplificar una funcion con estilo flecha.
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar3("Kay"))


// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito (Es decir, cambiar el return por parentesis)
// 3. Pruebas

function getUsuarioActivo ( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);//{uid: "ABC567", username: "Fernando"}

// 1, 2, 3
const getUsuarioActivoUpdate = (nombre) => ({
        uid: 'ABC567',
        username: nombre
});
    
console.log(getUsuarioActivoUpdate("Kaysel"));//{uid: "ABC567", username: "Kaysel"}