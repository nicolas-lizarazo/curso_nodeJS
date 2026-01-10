// funcion-anonima-autoinvocada-asincrona

import { yarg } from "./config/plugins/yargs.plugin.js";
import { ServerApp } from "./presentation/server-app.js";

// funcion anonima autoinvocada asincrona

// se llama a si misma la funcion
(() => {
    console.log('ejecutando');
})();
            
(async() => {
    await main();
    console.log('Ejecutando');
})();

async function main() {
    
    const { b:base, l:limit, s:showTable, n: fileName, d:fileDestination, e:fileExtension } = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination, fileExtension });

}

// casos de uso
// uno poder construir la tabla
// otro file system (grabar en file system)