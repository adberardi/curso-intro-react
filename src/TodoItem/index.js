import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        id={props.text}
        value={props.text}
        onClick={() => props.completeTodo(props.text)}
      />{" "}
      <label htmlFor={props.text}> {props.text} </label>
      <button
        className="btn-cancel"
        type="button"
        onClick={() => props.deleteTodo(props.text)}
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
}

export { TodoItem };
