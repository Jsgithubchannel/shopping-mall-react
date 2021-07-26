import "./App.css";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron className="background"></Jumbotron>

      <div className="container">
        <div className="row">
          <div className="product">product 1</div>
          <div className="product">product 2</div>
          <div className="product">product 3</div>
        </div>
      </div>
    </>
  );
}

export default App;
