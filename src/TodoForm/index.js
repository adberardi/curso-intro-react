import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
import imageAdd from "../assets/agregartarea.png";

function TodoForm() {
  const [newValue, setNewValue] = React.useState("");

  const { setOpenModal, onAdd } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newValue);
    onAdd(newValue);
    setOpenModal(false);
  };

  const handleChange = (event) => {
    setNewValue(event.target.value);
    console.log(newValue);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <a href="https://www.flaticon.es/iconos-gratis/anadir" title="añadir iconos">Añadir iconos creados por Freepik - Flaticon</a> */}
      <figure className="container-image">
        <img className="image" src={imageAdd} alt="Agregar Tarea" />
      </figure>
      <textarea
        value={newValue}
        onChange={handleChange}
        className="textArea"
        placeholder="Escriba la tarea a pendiente a realizar"
      />
      <div className="container-form">
        <button type="submit" className="btnAdd">
          {" "}
          Agregar{" "}
        </button>
        <button type="button" className="btnCancel" onClick={onCancel}>
          {" "}
          Cancelar{" "}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
