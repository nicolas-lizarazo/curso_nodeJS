import { yarg } from "./config/plugins/yargs.plugin.js";

//     "dev": "node --loader ts-node/esm src/app.ts -b 10 -s --name \"Tabla de multiplicar\"",

console.log(process.argv);

console.log(yarg);

// obtener un valor

console.log(yarg.b);
console.log(yarg.name);