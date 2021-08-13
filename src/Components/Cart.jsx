import React from "react";
import { Table, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state); //redux에 있는 모든 state
  const dispatch = useDispatch();

  const getReducerDispatch = (e, val) => {
    dispatch({
      type: e.target.id,
      payload: {
        id: val.id,
      },
    });
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map((val, idx) => {
            return (
              <>
                <tr key={idx}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.quan}</td>
                  <td>
                    <button
                      id="수량증가"
                      onClick={(e) => getReducerDispatch(e, val)}
                    >
                      +
                    </button>
                    <button
                      id="수량감소"
                      onClick={(e) => getReducerDispatch(e, val)}
                    >
                      -
                    </button>
                    <button
                      id="항목삭제"
                      onClick={(e) => getReducerDispatch(e, val)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      {state.reducer2 ? (
        <Alert variant={"primary"}>
          <p>지금 구매하시면 20% 할인</p>
          <button onClick={() => dispatch({ type: "alert닫기" })}>닫기</button>
        </Alert>
      ) : null}
    </div>
  );
};

// function state를props화(state) {
//   return {
//     state: state.reducer,
//     alert열렸니: state.reducer2,
//   };
// }
// export default connect(state를props화)(Cart);
export default Cart;
