import React from "react";
import { Col, Row } from "antd";

function Total(props) {
  return (
    <div>
      <Row id="row4">
        <Col span={8} offset={16}>
          <table>
            <tr>
              <th>Gross Total :</th>
              <td>Rs. {props.v}</td>
            </tr>
            <tr>
              <th>IGST @6% :</th>
              <td>Rs. {Math.floor(props.v * 0.06)}</td>
            </tr>
            <tr>
              <th>CGST @6% :</th>
              <td>Rs. {Math.floor(props.v * 0.06)}</td>
            </tr>
            <tr>
              <th>Net Total :</th>
              <td>Rs. {Math.floor(props.v * 1.12)}</td>
            </tr>
          </table>
        </Col>
      </Row>
    </div>
  );
}

export default Total;
