import React from "react";
import "./TodoError.css";
import imageError from "../assets/error-image.svg";

function TodoError({ error }) {
  return (
    <figure className="image-container">
      <img className="image-error" src={imageError} />
      <figcaption className="text">
        Ooops ha ocurrido un error {error}
      </figcaption>
    </figure>
  );
}

export { TodoError };
