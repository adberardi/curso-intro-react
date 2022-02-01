import React from "react";

function TodoError({ error }) {
    return(
        <p>Se ha presentado el siguiente error: {error}</p>
    );
}

export { TodoError };