import React from "react";
import "./style.css";
import { Row, Col } from "antd";

function StakeBtrOneComponent() {
  return (
    <div className="stakebtrmain">
      <div>
        <Row justify="space-between">
          <Col xs={24} md={10} lg={10}>
            <div className="textdiv">
              <h1 className="staketext">Stake BTR For Lockups</h1>
              <div>
                <p className="staketext1">
                  BTC / ETH / XRP / USDT / ADA Superted
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={10}>
            <div className="imgdiv">
              <img className="stakebtrimg" src="stakebtr.png" alt="" />
              <img className="stakebtrimg1" src="stakebtr1.png" alt="" />
              <img className="stakebtrimg2" src="stakebtr2.png" alt="" />
              <img className="stakebtrimg3" src="stakebtr6.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StakeBtrOneComponent;
