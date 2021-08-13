import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import "./Detail.scss";
import { connect } from "react-redux";

const Detail = (props) => {
  const [alert, setAlert] = useState(true);
  const [누른탭, 누른탭변경] = useState(0);
  const [스위치, 스위치변경] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
          <img src={foundedProduct.imgSrc} width="50%" alt="outfit" />
        </div>
        <div className="col-md-6 mt-4">
          {alert === true ? (
            <div className="alert-popup">재고가 얼마 남지 않았습니다.</div>
          ) : null}

          <Info 재고={props.재고}></Info>
          <h4 className="pt-5">{foundedProduct.title}</h4>
          <p>{foundedProduct.content}</p>
          <p>{foundedProduct.price}</p>
          <div className="quan-in">
            <input
              type="text"
              name="quantity"
              placeholder="수량을 입력하세요"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.setStock([9, 10, 11]);
              props.dispatch({
                type: "항목추가",
                payload: {
                  id: foundedProduct.id,
                  name: foundedProduct.title,
                  quan: Number(quantity),
                },
              });

              history.push("/cart");
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
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
};

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });
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

function state를props화(state) {
  return {
    state: state.reducer,
  };
}

export default connect(state를props화)(Detail);
