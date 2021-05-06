import React from "react";
import { Col, Divider, Row } from "antd";

function Shopkipper() {
  return (
    <div>
      <Row>
        <Divider>Invoice</Divider>
      </Row>
      <Row id="row1">
        <Col span={8}>
          <h3>OVIOUS</h3>
          <div>Canara Bank Side,</div>
          <div>Lanka Road,</div>
          <div>Varanasi - 221005</div>
        </Col>
        <Col span={8} offset={8}>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>10-01-2018</td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td>10-01-2018</td>
            </tr>
          </table>
        </Col>
      </Row>
    </div>
  );
}

export default Shopkipper;
