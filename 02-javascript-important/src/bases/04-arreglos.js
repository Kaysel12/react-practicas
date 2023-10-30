// Arreglos
// let array = new Array(100);
let array = [1, 2, 3, 4];
console.log(array);//(4) [1, 2, 3, 4]

let array2 = [...array];
array2.push(5);
console.log(array2);//(5) [1, 2, 3, 4, 5]


// para tratar con el metodo map y multiplicar por multiplo de dos
let arrayMultiplo = array2.map( function (x){ return x * 2 } );
console.log(arrayMultiplo);//(5) [2, 4, 6, 8, 10]