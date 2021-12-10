//import logo from './logo.svg';
import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Layout } from "../Layout";
// import "./App.css";

const todos = [
  { text: "Comprar cebolla", completed: false },
  { text: "Curso Intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  const [task, setTask] = React.useState(todos);
  const [search, setSearch] = React.useState("");

  let completed = task.filter((index) => index.completed === true);

  let listTodos = [];

  if (search.length >= 1) {
    listTodos = task.filter((index) => {
      const txt = index.text;
      const txtLower = txt.toLowerCase();
      return txtLower.includes(search);
    });
  } else {
    listTodos = task;
  }

  /* Si una funcion requiere de un parametro que se emplea en el Html, es necesario usar la arrow function */
  const onComplete = (txt) => {
    let listAux = task;
    listAux = listAux.filter((index) => {
      if (index.text === txt) {
        index.completed = !index.completed;
      }
      return index;
    });
    setTask(listAux);
  };

  return (
    <React.Fragment>
      <Layout>
        <TodoCounter completed={completed.length} total={task.length} />

        <TodoSearch param={search} setParam={setSearch} />

        <TodoList>
          {listTodos.length >= 1
            ? listTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  status={task}
                  setStatus={setTask}
                  completeTodo={() => onComplete(todo.text)}
                />
              ))
            : "No existe esta tarea"}
        </TodoList>

        <CreateTodoButton />
      </Layout>
    </React.Fragment>
  );
}

export default App;
