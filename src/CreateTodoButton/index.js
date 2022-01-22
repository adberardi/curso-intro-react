import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  }
  
  return (
    <div className="container-btn">
      <button className="btn" type="button" onClick={() => onClickButton()}>
        <img src="./Assets/Add.png" alt="" height="24" width="24" />
      </button>
    </div>
  );
}

export { CreateTodoButton };
