import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import TodosApp from "./TodosApp";
// import ConnectedCounter from "../containers/connectedCounter";
// import CounterHook from "./CounterHook";
// import List from "./List";
// import UncontrolledForm from "./UncontrolledForm";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO</h1>
        <TodosApp />

        {/* <ConnectedCounter /> */}
        {/* <CounterHook /> */}
        {/* <List /> */}
      </div>
    </Provider>
  );
}

export default App;
