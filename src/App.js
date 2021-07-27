import "./App.scss";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron className="background"></Jumbotron>

      <div className="container">
        <div className="row">
          <div className="product">
            <img
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt="jacket"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="product">
            <img
              src="https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt="sweater"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="product">
            <img
              src="https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
              alt="skirt"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
