import { Col, Row } from "antd";
import React from "react";
import "./style.css";
import DB from "../../Images/DB.png";
import Telegram from "../../Images/telegram.png";
import Twi from "../../Images/twi.png";

function FooterComponent() {
  return (
    <div className="MainFooter">
      <div>
        <Row justify="space-between" style={{ width: "70vw" }}>
          <Col xs={24} md={10} lg={4} className="footercoll1">
            <div>
              <div>
                <img className="footerlogo" src={DB} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "2.5rem"
                }}
              >
                <div>
                  <img style={{ width: "3rem" }} src={Telegram} alt="" />
                </div>
                <div>
                  <img style={{ width: "3rem" }} src={Twi} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={4}>
            <div className="footercoll1">
              <p className="footertext">Useful Link</p>
              <p className="footertext1">About Us</p>
              <p className="footertext1">Help Center</p>
              <p className="footertext1">API</p>
              <p className="footertext1">Event</p>
            </div>
          </Col>
          <Col xs={24} md={10} lg={4}>
            <div className="footercoll1">
              <p className="footertext">Legal</p>
              <p className="footertext1">Terms</p>
              <p className="footertext1">Privacy</p>
            </div>
          </Col>
          <Col xs={24} md={10} lg={4}>
            <div className="footercoll1">
              <p className="footertext">Trading</p>
              <p className="footertext1">Fees</p>
            </div>
          </Col>
          <Col xs={24} md={10} lg={4}>
            <div className="footercoll1">
              <p className="footertext">Contact Us</p>
              <p className="footertext1">Submit a request</p>
              <p className="footertext1">Locate a Lost Deposit</p>
              <p className="footertext1">Telegram</p>
              <p className="footertext1">Listing Application</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterComponent;
