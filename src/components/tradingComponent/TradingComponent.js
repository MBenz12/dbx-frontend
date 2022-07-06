import { Col, Row } from "antd";
import React from "react";
import "./style.css";

function TradingComponent() {
  return (
    <div className="Maintrading">
      <div>
        <h3 className="tradetext">One-Stop Trading Platfrom</h3>
        <h4 className="tradetext1">
          Bitrue use blockchain and new technologies to allow all users
          <br />
          to access fair financial services
        </h4> 
      </div>
      <div>
        <Row justify="space-between" style={{ marginTop: "4rem" }}>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="mainexchangediv">
              <div className="exchangediv">
                <img className="imglogo" src="exchange.png" alt="" />
              </div>
              <p className="exchangetext">Exchange</p>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="cryptodiv">
              <div className="exchangediv">
                <img className="imglogo" src="crypto.png" alt="" />
              </div>
              <p className="exchangetext">Buy Crypto</p>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="leveragediv">
              <div className="exchangediv">
                <img className="imglogo" src="leverage.png" alt="" />
              </div>
              <p className="exchangetext">Leveraged ETFs</p>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="aboutdiv">
              <div className="exchangediv">
                <img className="imglogo" src="about.png" alt="" />
              </div>
              <p className="exchangetext">About BTR</p>
            </div>
          </Col>
        </Row>

        <Row justify="space-between" style={{ marginTop: "2rem" }}>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="mainexchangediv">
              <div className="exchangediv">
                <img className="imglogo" src="personal.png" alt="" />
              </div>
              <p className="exchangetext">Loans</p>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="cryptodiv">
              <div className="exchangediv">
                <img className="imglogo" src="donation.png" alt="" />
              </div>
              <p className="exchangetext">Power Piggy</p>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="voting-boxdiv">
              <div className="exchangediv">
                <img className="imglogo" src="voting-box.png" alt="" />
              </div>
              <p className="exchangetext">Vote</p>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} className="collll">
            <div className="aboutdiv">
              <div className="exchangediv">
                <img className="imglogo" src="shield.png" alt="" />
              </div>
              <p className="exchangetext">BTR Lockups</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TradingComponent;
