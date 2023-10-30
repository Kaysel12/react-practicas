// Destructuracion de arreglos
// F2 para cambiar de forma general el llamado de una variable
const estudiante = ['perez', 'troncoso'];
const [ nombre, lastname ] = estudiante;
console.log(nombre, lastname);


// Tarea
// 1. en una funcion devolver unos datos
// 2. Destructurar y llamar a la funcion dentro del arreglo
const datosTrabajador = (apellido) => {
    return [apellido, ()=>{console.log("Hola Mundo")}];
}

const [ apellido, saludo ] = datosTrabajador("Ramirez");
saludo();//Hola Mundo
console.log(apellido);//Ramirez