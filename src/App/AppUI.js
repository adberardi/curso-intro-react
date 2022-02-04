import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { CreateTodoButton } from "../CreateTodoButton";
import { Loading } from "../Skeleton";
import { TodoError } from "../TodoError";
import { TodoEmpty } from "../TodoEmpty";

function AppUI() {
  const {
    error,
    loading,
    listTodos,
    todos,
    saveTodos,
    onCompleteTask,
    onDeleteTask,
    modal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <Loading/>}
        {(!loading && !listTodos.length) && <TodoEmpty />}

        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            status={todos}
            setStatus={saveTodos}
            complete={todo.completed}
            completeTodo={() => onCompleteTask(todo.text)}
            deleteTodo={() => onDeleteTask(todo.text)}
          />
        ))}
      </TodoList>

      {modal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
