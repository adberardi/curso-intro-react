import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className={`TodoItem ${props.complete && "TodoItem-selected"}`}>
      <CompleteIcon
        completed={props.complete}
        onComplete={props.completeTodo}
      />

      <label
        className={`text ${props.complete && "text-line"}`}
        htmlFor={props.text}
      >
        {" "}
        {props.text}{" "}
      </label>
      <DeleteIcon completed={props.complete} onDelete={props.deleteTodo} />
    </div>
  );
}

export { TodoItem };
