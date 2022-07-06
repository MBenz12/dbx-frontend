import { Col, Input, Row } from "antd";
import React from "react";
import "./style.css";

function RewardTwoComponent() {
  return (
    <div className="Mainrewardtwo">
      <Row justify="space-between">
        <Col xs={24} md={8} lg={8}>
          <div className="protectdiv">
            <img className="protectimg" src="protect.png" alt="" />
            <img className="protectimg1" src="protect1.png" alt="" />
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "1rem"
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <Input
                  className="inputinvest"
                  placeholder="Please enter the USDT amount"
                ></Input>
              </div>
              <div>
                <button className="investbtn">Invest Now</button>
              </div>
            </div>
            <div>
              <p className="locktext">Lock-up: About O BTR</p>
            </div>
            <div className="boxdiv11">
              <div>
                <p>
                  1. Stake your BTR to increase the amount you can invest in our
                  lock-up investments whenever you like. 1 BTR entitles you to
                  the equivalent of 0.4 USD.
                </p>
                <p>
                  2. For example, if you lock up 1,000 BTR, you can have a cap
                  of 1000 * 0.4 = 400 USDT for BTC/ETH / XRP/USDT / ADA.
                </p>
                <p>
                  3 Your BTR will be locked at the same time as the principal
                  When the investment matures and the
                </p>
                <p>
                  4. Stake your BTR to increase the amount you can invest in our
                  lock-up investments whenever you like. 1 BTR entitles you to
                  the equivalent of 0.4 USD.
                </p>
                <p>
                  4. Stake your BTR to increase the amount you can invest in our
                  lock-up investments whenever you like. 1 BTR entitles you to
                  the equivalent of 0.4 USD.
                </p>
                <p>
                  4. Stake your BTR to increase the amount you can invest in our
                  lock-up investments whenever you like. 1 BTR entitles you to
                  the equivalent of 0.4 USD.
                </p>
                <p>
                  4. Stake your BTR to increase the amount you can invest in our
                  lock-up investments whenever you like. 1 BTR entitles you to
                  the equivalent of 0.4 USD.
                </p>
              </div>
            </div>
            <div className="box1div11">
              <div>
                <button className="butbtn">Buy BTR</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div> 
  );
}

export default RewardTwoComponent;
