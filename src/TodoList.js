import React from "react";
import './TodoList.css';

function TodoList(props) {
  return (
    <section >
      <div className="TodoList">{props.children}</div>
    </section>
  );
}

export { TodoList };
