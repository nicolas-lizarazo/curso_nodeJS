// poner tiempo de ejecucion
setTimeout(cb1, 0);
// forma tarea asincrona que se ejecuta inmediatamente
Promise.resolve().then(cb2);
// propio de node
process.nextTick(cb3);
// leer un archivo
fs.readFile('file.txt',cb4);
// tambien algo propio que se ejcuta y recibe una funcion, como todas es un callback
setImmediate(cb5);

// -----------Event Loop------------
// Blocking & Single-threaded

// while (true) { // while es bloqueante

// }

// moreWork(); // nunca se ejecutara

// LIBUV permite a node ejecutar multiples hilos no bloqueantes
// libuv ejecuta tareas asincronas. Se ejecuta todo el codigo sincrono primero
// cuando sale de libuv vuelve al codigo de ejecucion sincrono
// trabaja como FIFO sin importar tiempo

// node app crea funcion Global() // main()
// al cerrar la app salta // exit code 0