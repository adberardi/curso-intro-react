import React from "react";
import { ReactComponent as CheckSVG } from "../assets/checkbox-marked.svg";
import { ReactComponent as DeleteSVG } from "../assets/trash-can.svg";
import "./TodoIcon.css";

function TodoIcon({ type, color="gray", onclick }) {
  const iconTypes = {
    check: color => <CheckSVG className={"Icon-svg Icon-svg--check"} fill={color} />,
    delete: color => <DeleteSVG className={"Icon-svg Icon-svg--delete"} fill={color}/>,
  };

  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onclick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
