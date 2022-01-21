//import logo from './logo.svg';
import React from "react";
import { AppUI } from "./AppUI";
import { Layout } from "../Layout";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <React.Fragment>
      <TodoProvider>
        <Layout>
          <AppUI />
        </Layout>
      </TodoProvider>
    </React.Fragment>
  );
}

export default App;
