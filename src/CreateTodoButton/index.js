import React from "react";
import AddImg from "../assets/Add.png";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <div className="container-btn">
      <button className="btn" type="button" onClick={() => onClickButton()}>
        <figure className="img-container">
          <img className="img-dimen" src={AddImg} />
          Agregar nueva tarea
        </figure>
      </button>
    </div>
  );
}

export { CreateTodoButton };
