//import logo from './logo.svg';
import React from "react";
import { AppUI } from "./AppUI";
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



  return (
    <React.Fragment>
      <Layout>
        <AppUI
          completed={completed.length}
          total={task.length}
          param={search}
          setParam={setSearch}
          status={task}
          setStatus={setTask}
          listTodos={listTodos}
        />
        
      </Layout>
    </React.Fragment>
  );
}

export default App;
