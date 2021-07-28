import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Product from "./Components/Product";
import Data from "./data.js";

function App() {
  const [products, setProudct] = useState(Data);
  return (
    <>
      <Navbar />

      <Route exact path="/">
        <Jumbotron className="background"></Jumbotron>
        <div className="container">
          <div className="row">
            {products.map((val, idx) => {
              return <Product product={products[idx]} key={idx} />;
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>22000</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>
    </>
  );
}

export default App;
