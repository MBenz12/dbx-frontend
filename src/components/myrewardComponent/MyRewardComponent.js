import { Row, Col } from "antd";
import React from "react";
import "./style.css";

function MyRewardComponent() {
  return (
    <div className="Mainreward">
      <div>
        <h3 className="rewardtext">My Reward</h3>
        <Row justify="space-between">
          <Col xs={24} md={10} lg={5}>
            <div className="maindiv11">
              <div className="rewarddiv">
                <div>
                  <img className="ttimg" src="tt.png" alt="" />
                </div>
                <div style={{ marginLeft: ".8rem" }}>
                  <p>USDT</p>
                  <p>USDT Rewards</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={5}>
            <div className="maindiv11">
              <div className="rewarddiv">
                <div>
                  <img className="ttimg" src="bb.png" alt="" />
                </div>
                <div style={{ marginLeft: ".8rem" }}>
                  <p>BTR</p>
                  <p>BTR Rewards</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={5}>
            <div className="maindiv11">
              <div className="rewarddiv">
                <div>
                  <img className="ttimg" src="ss.png" alt="" />
                </div>
                <div style={{ marginLeft: ".8rem" }}>
                  <p>USDT</p>
                  <p>USDT Investment</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={5}>
            <div className="maindiv11">
              <div className="rewarddiv">
                <div>
                  <img className="ttimg" src="bbb.png" alt="" />
                </div>
                <div style={{ marginLeft: ".8rem" }}>
                  <p>BTR</p>
                  <p>BTR Investment</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyRewardComponent;
