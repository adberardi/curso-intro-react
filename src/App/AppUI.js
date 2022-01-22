import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { CreateTodoButton } from "../CreateTodoButton";

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
        {error && <p>Error cargando la informacion, preocupate</p>}
        {loading && <p>Cargando informacion, dame un chance</p>}
        {!loading && !listTodos.length && <p>Crea una nueva tarea</p>}

        {listTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            status={todos}
            setStatus={saveTodos}
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
