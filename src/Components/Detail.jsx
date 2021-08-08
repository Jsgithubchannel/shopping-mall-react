import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Detail = (props) => {
  const [alert, setAlert] = useState(true);
  const [누른탭, 누른탭변경] = useState(0);
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
          <img
            src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            width="50%"
            alt="outfit"
          />
        </div>
        <div className="col-md-6 mt-4">
          {alert === true ? (
            <div className="alert-popup">재고가 얼마 남지 않았습니다.</div>
          ) : null}

          <Info 재고={props.재고}></Info>
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => 누른탭변경(0)}>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => 누른탭변경(1)}>
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 누른탭={누른탭} />
    </div>
  );
};

function TabContent(props) {
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (props.누른탭 === 2) {
    return <div>2번째 내용입니다</div>;
  }
}

function Info(props) {
  return <p>재고:{props.재고[0]}</p>;
}

export default Detail;
