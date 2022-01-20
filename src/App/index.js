//import logo from './logo.svg';
import React from "react";
import { AppUI } from "./AppUI";
import { Layout } from "../Layout";
// import "./App.css";

// Custom Hooks
function useLocalStorage(itemName, initialValue) {
  const localStorageTodos  = localStorage.getItem(itemName);
  let parsedTodos;

  // Se verifica si ya existe informacion almacenada, sino se crea.
  if (!localStorageTodos) {
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [item, setItem] = React.useState(parsedTodos);

  const saveTodos = (newArr) => {
    localStorage.setItem(itemName,JSON.stringify(newArr));
    setItem(newArr);
  };

  return [
    item,
    saveTodos
  ];
}

function App() {
  const [todos, setTodos] = useLocalStorage('TODOS_V1',[]);

  const [search, setSearch] = React.useState("");

  let completed = todos.filter((index) => index.completed === true);

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


  /* Si una funcion requiere de un parametro que se emplea en el Html, es necesario usar la arrow function */
  const onCompleteTask = (txt) => {
    let listAux = todos;
    listAux = listAux.filter((index) => {
      if (index.text === txt) {
        index.completed = !index.completed;
        console.log(`Listo ${index.text}`);
      }
      return index;
    });
    setTodos(listAux);
  };


  const onDeleteTask = (txt) => {
      let i = todos.findIndex((index) => index.text === txt);
      let listNew = [...todos];
      listNew.splice(i,1);
      setTodos(listNew);
  }



  return (
    <React.Fragment>
      <Layout>
        <AppUI
          completed={completed.length}
          total={todos.length}
          param={search}
          setParam={setSearch}
          status={todos}
          setStatus={setTodos}
          listTodos={listTodos}
          onComplete={onCompleteTask}
          onDelete={onDeleteTask}
        />
        
      </Layout>
    </React.Fragment>
  );
}

export default App;