import { useState } from "react";
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
      <Jumbotron className="background"></Jumbotron>
      <div className="container">
        <div className="row">
          {products.map((val, idx) => {
            return <Product product={products[idx]} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
