// El event loop siguen ciertas reglas

/*
    1. Callbacks en el microtask se ejecutan primero
    2. Todos los callbacks dentro del timer queue se ejecutan
    3. Callbacks en el microtask queue (si hay) se ejecutan despúes de los
    callback timer, primero tareas en el nextTick queue y luego las tareas en el primise queue
    4. Callbacks de I/O se ejecutan
    5. Callbacks en el microtask queue se ejecutan (si hay), y luego el primise queue (si hay)
    6. Todos los callbacks en el chrck queue sse ejecutan
    7. Callbacks en el microtask se ejecutan despúes de dada callback en el check queue. (Siguiendo el mismo orden anteriot, nectYick y luego promise)
    8. Todos los collbacks eb el close queue son ejecutados
    9. Por una ultima vez en el mismo ciclo, los microtask queue son ejecutados de la misma forma, nextTick y luego promise queue

    https://www.builder.io/blog/visual-guide-to-nodejs-event-loop
*/