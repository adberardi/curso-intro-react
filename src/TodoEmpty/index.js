import React from "react";
import imageEmpty from "../assets/Empty-amico.svg";
import "./TodoEmpty.css";

function TodoEmpty() {
  return (
    <figure className="image-container">
      <img className="image-empty" src={imageEmpty} />
      <figcaption className="text">Vaya esto esta vacio!</figcaption>
    </figure>
  );
}

export { TodoEmpty };
