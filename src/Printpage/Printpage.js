import React from "react";
import "./Printpage.css";
import "antd/dist/antd.css";
import { useStateValue } from "../StateProvider";
import { getProductsTotal } from "../reducer";
import Customer from "./Customer";
import Shopkipper from "./Shopkipper";
import Total from "./Total";
import { Row, Table } from "antd";

function Printpage() {
  const [{ products }] = useStateValue();
  const value = getProductsTotal(products);

  return (
    <div className="printpage">
      <Shopkipper />
      <Customer />
      <div>
        <Row id="row3">
          <Table dataSource={products} pagination={false}>
            <Table.Column title="Items" dataIndex="product_name" />
            <Table.Column title="Price" dataIndex="price" />
            <Table.Column title="Quantity" dataIndex="quantity" />
            <Table.Column title="Total" dataIndex="total" />
          </Table>
        </Row>
      </div>
      <Total v={value} />
    </div>
  );
}

export default Printpage;
