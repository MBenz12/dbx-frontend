import { Col, Row } from "antd";
import React from "react";
import "./style.css";

function InvestmentComponent() {
  return (
    <div className="Maininvest77">
      <div>
        <Row justify="space-between">
          <Col xs={24} md={10} lg={10}>
            <div className="textdiv">
              <h1 className="Investtext">Cryptocurrency Investments</h1>
              <div>
                <p className="Investtext1">Earn Passive Income on your Coins</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={10}>
            <div className="investimgdiv">
              <div>
                <img className="investimg" src="invest2.png" alt="" />
              </div>
              <div>
                <img className="investimg1" src="invest6.png" alt="" />
              </div>
              <div>
                <img className="investimg2" src="invest5.png" alt="" />
              </div>
              <div>
                <img className="investimg3" src="investimg.png" alt="" />
              </div>
            </div>
            <div className="vipdiv">
              <div style={{ width: "15rem" }}>
                <p style={{ fontSize: "1.1rem" }}>BTR Balance</p>
                <p style={{ fontSize: "1.1rem" }}>0</p>
              </div>
              <div className="hrdiv"></div>
              <div style={{ width: "15rem" }}>
                <p style={{ fontSize: "1.1rem" }}>Remaining VIP Cap (USDT)</p>
                <p style={{ fontSize: "1.1rem" }}>0</p>
              </div>
            </div>
            <div className="detailsdiv">
              <p style={{ fontSize: "1.2rem" }}>Details</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default InvestmentComponent;
