import React, { useState } from "react";
import "./MainPage.css";
import { Divider, Row, Table } from "antd";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function MainPage() {
  const [tempname, settempname] = useState("");
  const [tempprice, settempprice] = useState("");
  const [tempquantity, settempquantity] = useState("");
  const [{ products }, dispatch] = useStateValue();

  const store_name = (e) => {
    settempname(e.target.value);
  };
  const store_price = (e) => {
    settempprice(e.target.value);
  };
  const store_quantity = (e) => {
    settempquantity(e.target.value);
  };
  const store_entry = (e) => {
    e.preventDefault();
    if (tempquantity !== "" && tempname !== "" && tempprice !== "")
      dispatch({
        type: "ADD_TO_PRODUCTS",
        item: {
          product_name: tempname,
          price: tempprice,
          quantity: tempquantity,
          total: tempprice * tempquantity,
        },
      });

    console.log(products);

    settempname("");
    settempprice("");
    settempquantity("");
  };

  return (
    <div className="main_page">
      <Divider>
        <h3>Add Products</h3>
      </Divider>
      <div className="product_entry">
        <form>
          <label id="name_label">
            <h2>Product Name</h2>
            <input
              id="name"
              type="text"
              value={tempname}
              required="required"
              onChange={store_name}
            />
          </label>
          <br />
          <label id="price_label">
            <h2>Price</h2>
            <input
              id="price"
              type="number"
              min="0.00"
              step="0.01"
              required="required"
              onChange={store_price}
              value={tempprice}
            />
          </label>
          <br />
          <label id="quantity_label">
            <h2>Quantity</h2>
            <input
              id="quantity"
              type="number"
              min="0"
              required="required"
              onChange={store_quantity}
              value={tempquantity}
            />
          </label>
          <br />
          <label>
            <button onClick={store_entry}>Submit</button>
          </label>
        </form>
      </div>
      <div className="product_table">
        <Row id="product_row">
          <Table dataSource={products} pagination={false}>
            <Table.Column title="Items" dataIndex="product_name" />
            <Table.Column title="Price" dataIndex="price" />
            <Table.Column title="Quantity" dataIndex="quantity" />
            <Table.Column title="Total" dataIndex="total" />
          </Table>
        </Row>
      </div>
      <Link to="/printpage">
        <button id="print_button">Print</button>
      </Link>
    </div>
  );
}

export default MainPage;
