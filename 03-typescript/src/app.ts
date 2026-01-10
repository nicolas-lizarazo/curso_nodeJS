// fue necesario descargar tsx para poder compilar ts con node

import { findHeroById } from "./services/hero.service.js";

const hero = findHeroById( 2 );

// si hay heroe lo haga y si no imprima hero not found
console.log(hero?.name ?? 'Hero not found!!');