import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }
  
  return (
    <div className="container-btn">
      <button className="btn" type="button" onClick={() => onClickButton()}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
