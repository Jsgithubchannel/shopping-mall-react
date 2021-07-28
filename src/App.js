import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Product from "./Components/Product";
import Data from "./data.js";
import Detail from "./Components/Detail";

function App() {
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
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail product={products} />
      </Route>
    </>
  );
}

export default App;
