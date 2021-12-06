import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [param, setParam] = React.useState("");

  const onSearchValueHandler = (event) => {
    setParam(event.target.value);
    console.log(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="canvas">
        <input
          type="text"
          className="inputSearch"
          value={param}
          placeholder="Indique parametro..."
          onChange={onSearchValueHandler}
        />
      </div>
      <p> {param} </p>
    </React.Fragment>
  );
}

export { TodoSearch };
