import React from "react";

function TodoCounter () {
    return(
        <h2>TODOs completados 2 de 3</h2>
    );
}

/*  Al momento de importarlo, podemos cambiar el nombre que queramos en la clausula del import.
export default TodoCounter; */

// Otra manera: Exportar de forma nombrada ==> se obliga a usar el nombre indicado entre {} al ser importado.
export { TodoCounter };