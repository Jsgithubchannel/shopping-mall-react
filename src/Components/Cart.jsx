import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = (props) => {
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
          {props.state.map((val) => {
            return (
              <>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.quan}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

function state를props화(state) {
  return {
    state: state,
  };
}
export default connect(state를props화)(Cart);
// export default Cart;
