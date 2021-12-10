import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  completed,
  total,
  param,
  setParam,
  status,
  setStatus,
  listTodos,
}) {
  /* Si una funcion requiere de un parametro que se emplea en el Html, es necesario usar la arrow function */
  const onComplete = (txt) => {
    let listAux = status;
    listAux = listAux.filter((index) => {
      if (index.text === txt) {
        index.completed = !index.completed;
        console.log(`Listo ${index.text}`);
      }
      return index;
    });
    setStatus(listAux);
  };


  const onDelete = (txt) => {
      let i = status.findIndex((index) => index.text === txt);
      let listNew = [...status];
      listNew.splice(i,1);
      setStatus(listNew);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completed.length} total={total.length} />

      <TodoSearch param={param} setParam={setParam} />

      <TodoList>
        {listTodos.length >= 1
          ? listTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                status={status}
                setStatus={setStatus}
                completeTodo={() => onComplete(todo.text)}
                deleteTodo={() => onDelete(todo.text)}
              />
            ))
          : "No existe esta tarea"}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
