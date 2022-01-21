import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const {search, setSearch} = React.useContext(TodoContext);

  const onSearchValueHandler = (event) => {
    const p = event.target.value;
    setSearch(p.toLowerCase());
    console.log(search);
  };

  return (
    <React.Fragment>
      <div className="canvas">
        <input
          type="text"
          className="inputSearch"
          value={search}
          placeholder="Indique parametro..."
          onChange={onSearchValueHandler}
        />
      </div>
    </React.Fragment>
  );
}

export { TodoSearch };
