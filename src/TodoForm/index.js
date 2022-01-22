import React from "react";
import { TodoContext } from "../TodoContext";

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
      {/* <label>Formulario</label> */}
      <textarea
        value={newValue}
        onChange={handleChange}
        placeholder="Escriba la tarea a pendiente a realizar"
      />
      <div>
        <button type="submit">
          {" "}
          Agregar{" "}
        </button>
        <button type="button" onClick={onCancel}>
          {" "}
          Cancelar{" "}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
