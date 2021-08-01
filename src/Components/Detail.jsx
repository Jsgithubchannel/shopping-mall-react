import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
  const [alert, setAlert] = useState(true);
  let history = useHistory();
  let { id } = useParams();
  let foundedProduct = props.product.find((e) => {
    return e.id == id;
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
        </div>
        <div className="col-md-6 mt-4">
          {alert === true ? (
            <div className="alert-popup">재고가 얼마 남지 않았습니다.</div>
          ) : null}
          <h4 className="pt-5">{foundedProduct.title}</h4>
          <p>{foundedProduct.content}</p>
          <p>{foundedProduct.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고변경([9, 10, 11]);
            }}
          >
            주문하기
          </button>
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
      <Info 재고={props.재고}></Info>
    </div>
  );
};

function Info(props) {
  return <p>재고:{props.재고[0]}</p>;
}

export default Detail;
