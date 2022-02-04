import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className={`TodoItem ${props.complete && "TodoItem-selected"}`}>
      <div className="field-checkbox">
        <input
          type="checkbox"
          id={props.text}
          value={props.text}
          checked={props.complete}
          onChange={() => props.completeTodo(props.text)}
        />
      </div>
      {props.complete && <TodoIcon type="complete" />}

      <label
        className={`text ${props.complete && "text-line"}`}
        htmlFor={props.text}
      >
        {" "}
        {props.text}{" "}
      </label>
      <button
        className="btn-cancel"
        type="button"
        onClick={() => props.deleteTodo(props.text)}
      >
        <TodoIcon type="delete" />
      </button>
    </div>
  );
}

export { TodoItem };
