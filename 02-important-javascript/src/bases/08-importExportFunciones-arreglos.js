import { heroes } from '../data/heroes';

// Trayendo datos con funciones.
const getHeroesById = (id) => heroes.find( (x) => x.id === id);
// console.log( getHeroesById(1) );//{id: 1, name: "Batman", owner: "DC"}

// Trayendo datos con una variable.
const found = heroes.find( (x) => x.id === 3 );
// console.log(found);//{id: 3, name: "Superman", owner: "DC"}

// Trayendo los datos con un filtro
const getHeroesByOwner = (owner) => {
    return heroes.filter( (x) => x.owner === owner)
}
// console.log( getHeroesByOwner("DC") );//(3) [{…}, {…}, {…}]

export { getHeroesById, getHeroesByOwner }