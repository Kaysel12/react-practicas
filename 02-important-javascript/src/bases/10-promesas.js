import { getHeroesById } from './bases/08-importExportFunciones-arreglos';
// import { heroes } from './data/heroes';

// Una promesa trabaja en tiempo real con los datos de una api
// tiene dos funciones por defecto; reject y resolve.
// resolve:then, reject:catch, resolve&reject:finally (despues de usar then y catch).

const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesById(2);
        resolve(heroe);
        reject("No se encontró el heroe");
    }, 2000);
} )

promesa
    .then( heroe => console.log("Heroe", heroe) )
    .catch( err => console.log(err) );


// De la forma correcta en la que se utiliza, es la siguiente.
const getHeroesByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            heroe != undefined ? resolve(heroe) : reject("Heroe no encontrado");
        }, 2000);
    } )
}

getHeroesByIdAsync(10)
                    .then( heroes => console.log(heroes) )
                    .catch( err => console.log(err) )

                    
// Optimizada la respuesta
getHeroesByIdAsync(1)
                    .then( console.log )
                    .catch( console.warn )