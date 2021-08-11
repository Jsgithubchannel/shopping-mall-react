import React from "react";
import { Table, Alert } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

const Cart = (props) => {
  const state = useSelector((state) => state); //redux에 있는 모든 state
  console.log(state.reducer);
  const dispatch = useDispatch();

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
                      onClick={() => {
                        dispatch({
                          type: "수량증가",
                          payload: {
                            id: val.id,
                            name: val.name,
                            quan: val.quan,
                          },
                        });
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "수량감소",
                          payload: {
                            id: val.id,
                            name: val.name,
                            quan: val.quan,
                          },
                        });
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      {props.alert열렸니 ? (
        <Alert variant={"primary"}>
          <p>지금 구매하시면 20% 할인</p>
          <button onClick={() => props.dispatch({ type: "alert닫기" })}>
            닫기
          </button>
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
