import React from "react";
import { useHistory } from "react-router-dom";

const Detail = () => {
  let history = useHistory();
  return (
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
          <button
            onClick={() => {
              history.push("/");
            }}
            className="btn btn-danger"
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;