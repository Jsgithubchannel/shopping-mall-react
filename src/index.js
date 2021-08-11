import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === "alert닫기") {
    state = false;
  }
  return state;
}

const 초기값 = [
  { id: 0, name: "멋진옷", quan: 2 },
  { id: 1, name: "예쁜옷", quan: 5 },
  { id: 2, name: "샤랄라한옷", quan: 1 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    let copy = [...state];
    for (let idx in copy) {
      console.log(액션.payload.id, idx);
      if (액션.payload.id === parseInt(idx)) {
        copy[액션.payload.id].quan++;
        break;
      } else {
        copy.push(액션.payload);
      }
    }
    return copy;
  } else if (액션.type === "수량증가") {
    let copy = [...state];
    copy[액션.payload.id].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    if (copy[액션.payload.id].quan !== 0) {
      copy[액션.payload.id].quan--;
    }
    return copy;
  } else {
    return state;
  }
}

const store = createStore(combineReducers({ reducer, reducer2 }));

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
