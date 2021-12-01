import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  /* Si una funcion requiere de un parametro que se emplea en el Html, es necesario usar la arrow function */
  const onComplete = (txt) => {
    console.log(`Completando tarea ${txt}`);
  };

  /* Si una funcion no requiere de algun parametro, basta con emplear solo el objeto dentro del evento */
  const onDelete = () => {
    console.log(`Borrando tarea`);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        id={props.text}
        value={props.text}
        onClick={() => onComplete(props.text)}
      />{" "}
      <label htmlFor={props.text}> {props.text} </label>
      <button className="btn-cancel" type="button" onClick={onDelete}>
        {" "}
        X{" "}
      </button>
    </div>
  );
}

export { TodoItem };
