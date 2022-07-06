import React from "react";
import { Row, Col } from "antd";
import "./style.css";

function AccountComponent() {
  return (
    <div className="Mainaccount">
      <div>
        <img className="accimg" src="acc.png" alt="" />
        <Row justify="space-between">
          <Col xs={24} md={10} lg={10} className="accountcol">
            <div>
              <h1 className="accounttext">Create Your Account</h1>
            </div>
            <p className="accounttext1">
              Amet minim mollit non deserunt ullamco
              <br /> est sit aliqua dolor do amet sint.{" "}
            </p>
          </Col>
          <Col xs={24} md={10} lg={10} className="accountcol1">
            <div>
              <div className="accinputdiv">
                <p>Enter your email address</p>
                <div className="accsignbtn">
                  <p>Sign up now</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AccountComponent;
