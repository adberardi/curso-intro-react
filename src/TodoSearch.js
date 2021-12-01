import React from "react";
import "./TodoSearch.css";

function TodoSearch() {

  const onSearchValueHandler = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="canvas">
      <input type="text" className="inputSearch" placeholder="Indique parametro..." onChange={onSearchValueHandler} />
    </div>
  );
}

export { TodoSearch };
