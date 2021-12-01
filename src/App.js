//import logo from './logo.svg';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Layout } from "./Layout";
// import "./App.css";

const todos = [
  { text: "Comprar cebolla", completed: false },
  { text: "Curso Intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <Layout>
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} />
          ))}
        </TodoList>

        <CreateTodoButton />
      </Layout>
    </React.Fragment>
  );
}

export default App;
