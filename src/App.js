import { useState } from "react";

import "./App.css";

import Todos from "./todo/Todo";
import { Provider } from "react-redux";
import { state, store } from "./todo/TodoSlice";
import { store1 } from "./Counter/CounterSlice";
import Counter from "./Counter/Counter";


function App() {
  return(
  <div className="App">
  <h2>Todo-List Assignment</h2>
  <Provider store={state}>
    <Todos />
  </Provider>
  <h3 style={{ marginTop: "150px" }}>Counter Assignment</h3>
  <Provider store={store1}>
    <Counter />
  </Provider>
</div>
  );
}

export default App;