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
  // { id: 0, name: "멋진옷", quan: 2 },
  // { id: 1, name: "예쁜옷", quan: 5 },
  // { id: 2, name: "샤랄라한옷", quan: 1 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    let found = state.findIndex((a) => {
      return a.id === 액션.payload.id;
    });
    let copy = [...state];
    found >= 0
      ? (copy[found].quan += 액션.payload.quan)
      : copy.push(액션.payload);
    return copy;

    // if (found >= 0) {
    //   let copy = [...state];
    //   copy[found].quan += 액션.payload.quan;
    //   return copy;
    // } else {
    //   let copy = [...state];
    //   copy.push(액션.payload);
    //   return copy;
    // }
  } else if (액션.type === "항목삭제") {
    let copy = [...state];
    copy = copy.filter((elem) => 액션.payload.id !== elem.id);
    return copy;
  } else if (액션.type === "수량증가") {
    let copy = [...state];

    copy.map((elem) =>
      elem.id === 액션.payload.id ? { ...elem, quan: elem.quan++ } : elem
    );
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    copy.map((elem) =>
      elem.id === 액션.payload.id && elem.quan !== 0
        ? { ...elem, quan: elem.quan-- }
        : elem
    );
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
