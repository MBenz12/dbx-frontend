import { Col, Row } from "antd";
import React from "react";
import "./style.css";

function CryptoComponent() {
  return (
    <div className="Maincrypto">
      <Row justify="space-around">
        <Col xs={24} md={10} lg={10}>
          <div>
            <h1 className="crytotext">#1Cryptocurrency</h1>
            <h1 className="crytotext1"> Management Platform </h1>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h4 className="crytotext2">
              Buy, inves,& borrow digital assets all in one place
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "3.5rem"
            }}
          >
            <div>
              <input className="crytoinput" placeholder="Email Address"></input>
            </div>
            <div>
              <p className="getbtn">Get Started</p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={10} lg={10}>
          <img className="framepic" src="frame.png" alt="" />
          <div className="mainimg">
            <img className="dollarimg" src="dollar.png" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CryptoComponent;
