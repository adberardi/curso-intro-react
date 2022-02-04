import React from "react";
import CheckImg from "../assets/check.png";
import DeleteImg from "../assets/delete.png";
import "./TodoIcon.css";

function TodoIcon(param) {
  return (
    <div>
      <figure>
        {param.type === "delete" ? (
          <img src={DeleteImg} className="icon-dimen" />
        ) : (
          <img src={CheckImg} className="icon-dimen" />
        )}
      </figure>
    </div>
  );
}

export { TodoIcon };
