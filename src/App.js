import { React, useState, createContext, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Product from "./Components/Product";
import Data from "./data.js";
import Cart from "./Components/Cart";

// import Detail from "./Components/Detail";
let Detail = lazy(() => import("./Components/Detail"));
export const StockContext = createContext();

function App() {
  function getMoreData() {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        setProudct([...products, ...result.data]);
      })
      .catch(() => {
        console.log("failed");
      });
  }

  const [stock, setStock] = useState([10, 11, 12]);
  const [products, setProudct] = useState(Data);
  return (
    <>
      <Navbar></Navbar>
      <Route exact path="/">
        <Jumbotron className="background"></Jumbotron>
        <div className="containers">
          <StockContext.Provider value={stock}>
            <div className="rows">
              {products.map((val, idx) => {
                return <Product product={products[idx]} key={idx} />;
              })}
            </div>
          </StockContext.Provider>
          <button className="btn__more" onClick={getMoreData}>
            상품 더보기
          </button>
        </div>
      </Route>
      <Route path="/cart">
        <Cart></Cart>
      </Route>
      <Route path="/detail/:id">
        <Suspense fallback={<div>로딩중...</div>}>
          <Detail product={products} 재고={stock} setStock={setStock} />
        </Suspense>
      </Route>
    </>
  );
}

export default App;
