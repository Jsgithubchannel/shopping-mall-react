import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Product from "./Components/Product";
import Data from "./data.js";
import Detail from "./Components/Detail";

function App() {
  const [재고, 재고변경] = useState([10, 11, 12]);
  const [products, setProudct] = useState(Data);
  return (
    <>
      <Navbar></Navbar>
      <Route exact path="/">
        <Jumbotron className="background"></Jumbotron>
        <div className="container">
          <div className="row">
            {products.map((val, idx) => {
              return <Product product={products[idx]} key={idx} />;
            })}
          </div>
          <button
            className="btn__more"
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  setProudct([...products, ...result.data]);
                })
                .catch(() => {
                  console.log("failed");
                });
            }}
          >
            더보기
          </button>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail product={products} 재고={재고} 재고변경={재고변경} />
      </Route>
    </>
  );
}

export default App;
