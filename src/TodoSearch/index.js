import React from "react";
import "./TodoSearch.css";

function TodoSearch({param,setParam}) {

  const onSearchValueHandler = (event) => {
    const p = event.target.value;
    setParam(p.toLowerCase());
    console.log(param);
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
    </React.Fragment>
  );
}

export { TodoSearch };
