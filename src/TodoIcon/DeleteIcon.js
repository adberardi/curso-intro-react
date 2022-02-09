import React from "react";
import { TodoIcon } from '.';

function DeleteIcon({completed, onDelete}) {
    return( <TodoIcon type="delete" color={completed ? "red" : "gray"} onclick={onDelete} />);
}

export { DeleteIcon };