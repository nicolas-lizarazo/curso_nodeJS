# Guía de Funciones: Map, Filter y Reduce

Estas funciones son los pilares de la programación funcional. Su principal ventaja es que **no modifican el arreglo original** (inmutabilidad), lo que hace que tu código sea más predecible y fácil de testear.

---

## 1. `map()`: Transformación
Úsalo cuando quieres **transformar cada elemento** de una lista y obtener una nueva lista con la misma cantidad de elementos.

* **Propósito:** Cambiar el formato o valor de los datos.
* **Relación:** Entrada (n) $\rightarrow$ Salida (n).
* **Uso común:** Extraer nombres de objetos, convertir monedas o renderizar componentes visuales.

## 2. `filter()`: Selección
Úsalo cuando quieres **extraer elementos** que cumplan con una condición específica.

* **Propósito:** Descartar lo que no necesitas.
* **Relación:** Entrada (n) $\rightarrow$ Salida (n - descartados).
* **Uso común:** Buscadores, eliminar ítems de un carrito o filtrar por categorías.

## 3. `reduce()`: Acumulación
Úsalo cuando quieres procesar una colección para reducirla a **un solo valor final**.

* **Propósito:** Consolidar información.
* **Relación:** Entrada (n) $\rightarrow$ Salida (1).
* **Uso común:** Sumatorias de precios, promedios o agrupar datos complejos en un solo objeto.

---

## Cuadro Comparativo

| Función | Acción Principal | Resultado esperado |
| :--- | :--- | :--- |
| **`map`** | **Transformar** | Un arreglo nuevo con cambios. |
| **`filter`** | **Filtrar** | Un arreglo nuevo con menos elementos. |
| **`reduce`** | **Acumular** | Un único valor (número, string, objeto). |

---

## Ejemplo Práctico (JavaScript)

Imagina que gestionas una tienda:

```javascript
const carrito = [
  { nombre: 'Laptop', precio: 1000, categoria: 'tech' },
  { nombre: 'Mouse', precio: 25, categoria: 'tech' },
  { nombre: 'Libro', precio: 15, categoria: 'edu' }
];

## Parametros cada una
// 1. FILTER: Obtener solo productos de tecnología
const soloTech = carrito.filter(item => item.categoria === 'tech');

// 2. MAP: Obtener solo los nombres de los productos para una lista
const nombres = carrito.map(item => item.nombre);

// 3. REDUCE: Calcular el costo total del carrito
const total = carrito.reduce((acumulado, item) => acumulado + item.precio, 0);
```

# Cheat Sheet: Map, Filter & Reduce en JavaScript

Estas funciones permiten manipular arreglos de forma declarativa, sin usar bucles `for` tradicionales, lo que resulta en un código más limpio y fácil de mantener.

---

## 1. Definiciones Rápidas

| Función | Propósito | Resultado |
| :--- | :--- | :--- |
| **`map()`** | **Transformar** cada elemento. | Un nuevo arreglo (mismo tamaño). |
| **`filter()`** | **Seleccionar** elementos bajo una condición. | Un nuevo arreglo (igual o más pequeño). |
| **`reduce()`** | **Consolidar** todos los elementos. | Un único valor (número, objeto, etc.). |

---

## 2. Parámetros y Sintaxis

### `map` y `filter`
Ambos comparten la misma estructura de parámetros en su función de callback.

```javascript
const nuevoArreglo = arreglo.map((elemento, indice, array) => {
    // Retorna el nuevo valor (en map) o un booleano (en filter)
});
```
elemento: El valor actual del arreglo que se está procesando.

indice (Opcional): La posición actual (0, 1, 2...).

array (Opcional): Referencia al arreglo original completo.

reduce
Es el más complejo porque requiere un acumulador y un valor inicial.

```JavaScript

const resultado = arreglo.reduce((acumulador, elemento, indice, array) => {
    // Retorna el nuevo valor del acumulador para la siguiente vuelta
    return acumulador + elemento;
}, valorInicial);
```
acumulador: El valor que se va "arrastrando" de iteración en iteración.

valorInicial (Muy recomendado): El valor con el que empieza el acumulador. Si no se pone, toma el primer elemento del arreglo.

3. Ejemplo Práctico Maestro
Supongamos que tenemos una lista de productos en un carrito:

```JavaScript

const productos = [
  { id: 1, nombre: 'Monitor', precio: 300, categoria: 'Tech' },
  { id: 2, nombre: 'Teclado', precio: 50, categoria: 'Tech' },
  { id: 3, nombre: 'Libro', precio: 20, categoria: 'Libros' },
];

// 1. FILTER: Solo queremos los productos de 'Tech'
const tecnologia = productos.filter(p => p.categoria === 'Tech');

// 2. MAP: Queremos una lista con solo los precios aumentados un 10% (IVA)
const preciosConIva = productos.map(p => p.precio * 1.10);

// 3. REDUCE: Queremos saber el costo total de todos los productos
const totalFactura = productos.reduce((total, p) => total + p.precio, 0);
```
4. Cuándo usar cada uno (Resumen)
¿Necesitas cambiar los datos? (Ej: De objetos a strings): Usa map.

¿Necesitas quitar datos? (Ej: Eliminar usuarios inactivos): Usa filter.

¿Necesitas un solo resultado? (Ej: Sumas, promedios, o crear un mapa/diccionario): Usa reduce.

¿Necesitas ejecutar un efecto secundario? (Ej: Guardar en DB o imprimir en consola): Usa forEach.

Pro Tip: Puedes encadenarlos. Por ejemplo: productos.filter(p => p.precio > 100).map(p => p.nombre) Esto te daría los nombres de los productos que cuestan más de 100.