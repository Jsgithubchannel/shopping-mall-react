import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(() => {
  return [
    { id: 0, name: "멋진옷", quan: 2 },
    { id: 1, name: "예쁜옷", quan: 5 },
    { id: 2, name: "샤랄라한옷", quan: 1 },
  ];
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
