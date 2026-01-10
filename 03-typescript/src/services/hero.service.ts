import { heroes } from "../data/heroes.js";

export const findHeroById = ( id: number ) => {
    // find retorna la primera coincidencia, se usa acá por lo que se esta comparando un id "unico";
    return heroes.find( (hero) => hero.id === id );
}