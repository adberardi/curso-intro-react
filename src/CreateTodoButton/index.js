import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <div className="container-btn">
      <button className="btn" type="button">
        <img src="./Assets/Add.png" alt="" height="24" width="24" />
      </button>
    </div>
  );
}

export { CreateTodoButton };
