import React from "react";
import './TodoCounter.css';

function TodoCounter ({completed, total}) {
    return(
        <div className="layout-head"> 
        <h2 className="TodoCounter">TODOs completados {completed} de {total}</h2>

        </div>
    );
}

/*  Al momento de importarlo, podemos cambiar el nombre que queramos en la clausula del import.
export default TodoCounter; */

// Otra manera: Exportar de forma nombrada ==> se obliga a usar el nombre indicado entre {} al ser importado.
export { TodoCounter };