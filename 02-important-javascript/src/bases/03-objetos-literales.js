// Objetos literales

const persona = {
    nombre: "Jose",
    apellido: "Martinez",
    edad: 45,
    direccion: {
        avenida: "los proceres",
        sector: "martinez tronx",
        postal: 45555
    }
};

// copia con el operador spred
const personaCopia = { ...persona };
personaCopia.nombre = "Kaysel";

console.table(persona);
console.table(personaCopia);
