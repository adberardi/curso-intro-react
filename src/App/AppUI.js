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
  onComplete,
  onDelete
}) {

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
