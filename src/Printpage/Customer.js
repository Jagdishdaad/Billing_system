import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";

function Customer() {
  const [randomusername, setrandomusername] = useState({});
  const [randomuserstreet, setrandomuserstreet] = useState({});
  const [randomuserlocation, setrandomuserlocation] = useState({});
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res.data.results[0].location);
        setrandomusername(res.data.results[0].name);
        setrandomuserlocation(res.data.results[0].location);
        setrandomuserstreet(res.data.results[0].location.street);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row2">
      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <h3>
            Bill To: {randomusername.title} {randomusername.first}{" "}
            {randomusername.last}
          </h3>
          <div>
            {randomuserstreet.number}
            {", "} {randomuserstreet.name}
            {", "}
          </div>
          <div>
            {" "}
            {randomuserlocation.city} {"-"} {randomuserlocation.postcode}
          </div>
          <div>{randomuserlocation.country}</div>
        </Col>
      </Row>
    </div>
  );
}

export default Customer;
