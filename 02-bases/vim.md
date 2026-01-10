# ⌨️ Guía Maestra de Vim: Referencia Completa (Optimizado para VS Code)

Esta guía incluye la lógica nativa de Vim y cómo recuperar los comandos que VS Code "bloquea" al activar la extensión.

---

## 1. 🎯 Navegación Fundamental (Modo Normal)
| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `h` | ⬅️ Izquierda | Mueve el cursor un carácter a la izquierda. |
| `j` | ⬇️ Abajo | Mueve el cursor una línea abajo. |
| `k` | ⬆️ Arriba | Mueve el cursor una línea arriba. |
| `l` | ➡️ Derecha | Mueve el cursor un carácter a la derecha. |
| `w` | **Next Word** | Salta al inicio de la siguiente palabra. |
| `e` | **End Word** | Salta al final de la palabra actual. |
| `b` | **Back** | Salta al inicio de la palabra anterior. |

---

## 2. ⚡ Movimientos Rápidos y Saltos
| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `0` | Inicio Línea | Salta al puro inicio de la línea (incluye espacios). |
| `^` | Inicio Texto | Salta al primer carácter con texto (ideal para código). |
| `$` | Final Línea | Salta al puro final de la línea. |
| `gg` | Top | Salta a la primera línea del archivo. |
| `G` | Bottom | Salta a la última línea del archivo. |
| `%` | Match | Salta entre parejas de `()`, `[]` o `{}`. |
| `f` + `<char>` | Find | Salta a la siguiente letra indicada en la misma línea. |

---

## 3. 📝 Edición: Copiar, Borrar y Pegar
*Nota: En Vim, borrar (`d`) es lo mismo que "Cortar".*

| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `i` | **Insert** | Entra en modo inserción antes del cursor. |
| `Esc` | **Normal Mode** | Regresa al modo normal (limpia comandos parciales). |
| `x` | Borrar char | Elimina el carácter bajo el cursor. |
| `dd` | Borrar línea | Corta la línea completa actual. |
| `3dk` | Borrar Arriba | Borra la línea actual y las 3 de arriba. |
| `yy` | **Yank** | Copia la línea actual. |
| `p` | **Put** | Pega debajo de la línea o después del cursor. |
| `u` | **Undo** | Deshacer (Vim ignora el Ctrl+Z por defecto). |
| `Ctrl + r` | **Redo** | Rehacer (Equivalente al Ctrl+Y). |

---

## 4. 👁️ Selección y Bloques (Modo Visual)
| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `v` | Visual | Selección carácter por carácter. |
| `V` | **Visual Line** | Selecciona la línea completa (lo que pedías). |
| `Ctrl + v` | **Visual Block** | Selección de columnas (vertical). |
| `>` | Indent | Tabula a la derecha. |
| `<` | Unindent | Tabula a la izquierda. |
| `A` |Salta al final de la línea y entra en modo insert. |

---

## 5. ⚙️ Comandos de Sistema (Modo `:`)
| Comando | Acción |
| :--- | :--- |
| `:w` | Guardar archivo. |
| `:q` | Salir (Cerrar pestaña). |
| `:q!` | Salir sin guardar. |
| `:wq` | Guardar y salir. |
| `:t.` | **Duplicar línea** (Equivalente a Shift+Alt+Down). |

---

## 6. 🔍 Búsqueda y Reemplazo
| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `/[texto]` | Buscar | Busca hacia adelante. Pulsa `n` para ir al siguiente. |
| `:%s/a/b/g` | Reemplazar | Cambia "a" por "b" en todo el documento. |

---

## 7. 🚀 Combos de Eficiencia (La Magia)
* **`ciw`**: Borra la palabra actual y te deja escribir (Change Inner Word).
* **`.` (punto)**: Repite la última acción de edición.
* **`o`**: Abre línea abajo y entra en modo insert.
* **`A`**: Salta al final de la línea y entra en modo insert.

---

## 8. ⚠️ Conflictos con VS Code (Equivalencias)
Vim desactiva los atajos clásicos de Windows/Mac. Aquí cómo hacerlos "a la Vim":

| Acción Deseada | Atajo Clásico (Bloqueado) | **Comando Vim (Modo Normal)** |
| :--- | :--- | :--- |
| **Seleccionar Todo** | `Ctrl + A` | `ggVG` |
| **Copiar** | `Ctrl + C` | `y` (en modo visual) o `yy` |
| **Pegar** | `Ctrl + V` | `p` |
| **Cortar** | `Ctrl + X` | `d` |
| **Guardar** | `Ctrl + S` | `:w` + `Enter` |
| **Buscar** | `Ctrl + F` | `/` |
| **Deshacer** | `Ctrl + Z` | `u` |

> **Tip:** Si quieres usar `Ctrl + C` o `Ctrl + V` de forma normal en VS Code, debes ir a Configuración -> Extensiones -> Vim -> **Use Ctrl Keys** y desactivarlo (aunque esto quita poder a Vim).

## 9. 🚠 Movimientos de Pantalla y Desplazamiento
*Ideales para moverte sin usar el scroll del mouse.*

| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `H` | **High** | Mueve el cursor a la parte superior de la pantalla. |
| `M` | **Middle** | Mueve el cursor al centro de la pantalla. |
| `L` | **Low** | Mueve el cursor a la parte inferior de la pantalla. |
| `Ctrl + u` | **Up** | Sube media pantalla (Scroll up). |
| `Ctrl + d` | **Down** | Baja media pantalla (Scroll down). |
| `zz` | **Center** | Centra la línea actual en la pantalla. |

---

| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `viw` | **Select Word** | Selecciona la palabra actual bajo el cursor. |
| `viw` + `b` | **Back Select** | Si te pasas con `w`, presiona `b` para retroceder la selección. |
| `viW` | **Select Block** | Selecciona el bloque completo (incluye guiones y puntos). |
| `it` | **Inner Tag** | Selecciona el contenido dentro de una etiqueta HTML/XML. |
| `at` | **A Tag** | Selecciona la etiqueta completa y su contenido. |
| `i"` | **Inner Quotes** | Selecciona el texto dentro de comillas dobles. |
| `i(` o `i{` | **Inner Block** | Selecciona el contenido dentro de paréntesis o llaves. |
| `as` | **A Sentence** | Selecciona una oración completa. |## 10. 🎯 Objetos de Texto (Text Objects)
*La clave para editar código rápido. Se usan después de `v` (seleccionar), `d` (borrar) o `y` (copiar).*

---

## 11. 🪄 Edición Avanzada y Multi-línea
| Comando | Acción | Descripción |
| :--- | :--- | :--- |
| `r + <char>` | **Replace** | Reemplaza el carácter actual por otro sin entrar en modo insert. |
| `R` | **Replace Mode** | Modo sobreescritura (como la tecla Insert). |
| `~` | **Swap Case** | Cambia de mayúscula a minúscula o viceversa. |
| `J` | **Join** | Une la línea de abajo con la actual con un espacio. |
| `I` | **Insert Head** | Salta al inicio de la línea y entra en modo insert. |
| `C` | **Change Line** | Borra desde el cursor hasta el final y entra en modo insert. |

---

## 12. 📦 Registros (Portapapeles Múltiples)
*Vim permite tener varios textos copiados a la vez.*

* **`"ad`**: Corta la selección y la guarda en el registro **'a'**.
* **`"ap`**: Pega el contenido que guardaste en el registro **'a'**.
* **`"+y`**: Copia al portapapeles del sistema (Windows/Mac).
* **`"+p`**: Pega desde el portapapeles del sistema.

---

## 13. 🚩 Marcas de Posición (Bookmarks)
| Comando | Acción |
| :--- | :--- |
| `m + [a-z]` | **Mark**: Crea una marca en la posición actual con una letra (ej. `ma`). |
| `' + [a-z]` | **Jump**: Salta a la línea de la marca indicada (ej. `'a`). |

---

## 14. 🛠️ Comandos de Utilidad en VS Code
| Comando | Acción |
| :--- | :--- |
| `gd` | **Go to Definition**: Salta a la definición de la función o variable. |
| `gh` | **Show Hover**: Muestra la información del símbolo (tipo tooltip). |
| `af` | (En modo visual) Selecciona toda la función actual. |