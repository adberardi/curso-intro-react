import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext("");

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [search, setSearch] = React.useState("");
  const [modal, setOpenModal] = React.useState(false);

  let completed = todos.filter((index) => index.completed === true);
  let numCompleted = completed.length;
  let total = todos.length;

  let listTodos = [];

  if (search.length >= 1) {
    listTodos = todos.filter((index) => {
      const txt = index.text;
      const txtLower = txt.toLowerCase();
      return txtLower.includes(search);
    });
  } else {
    listTodos = todos;
  }

  const onAdd = (newTodo) => {
    console.log(`onAdd ${newTodo}`);
    let newArr = [...todos];
    newArr.push({ completed: false, text: newTodo });
    saveTodos(newArr);
  };

  /* Si una funcion requiere de un parametro que se emplea en el Html, es necesario usar la arrow function */
  const onCompleteTask = (txt) => {
    let listAux = todos;
    listAux = listAux.filter((index) => {
      if (index.text === txt) {
        index.completed = !index.completed;
        // console.log(`Listo ${index.text}`);
      }
      return index;
    });
    saveTodos(listAux);
  };

  const onDeleteTask = (txt) => {
    let i = todos.findIndex((index) => index.text === txt);
    let listNew = [...todos];
    listNew.splice(i, 1);
    saveTodos(listNew);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        numCompleted,
        total,
        search,
        setSearch,
        todos,
        saveTodos,
        listTodos,
        onCompleteTask,
        onDeleteTask,
        modal,
        setOpenModal,
        onAdd,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
