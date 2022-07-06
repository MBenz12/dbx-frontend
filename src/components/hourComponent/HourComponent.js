import { Row, Col } from "antd";
import React from "react";
import "./style.css";

function HourComponent() {
  return (
    <div className="Mainhour">
      <div>
        <h1 className="hourtext">24-Hour Volume 1,683,423,977 USD</h1>
        <h6 className="hourtext1">
          Bitrue goes to great lengths to ensure the safety of your assets. Our
          security team
          <br /> implements new improvements and controls every week.
        </h6>
      </div>
      <div>
        <Row justify="space-between" style={{ marginTop: "5.5rem" }}>
          <Col xs={24} md={7} lg={7} className="colhour">
            <div className="mainblogdiv">
              <div>
                <img className="hourlogo" src="blogo.png" alt="" />
              </div>
              <div>
                <p className="hourtext2">Recognized by the XRP community</p>
              </div>
              <div>
                <p className="hourtext3">
                  Recommended by Ripple Top 5 exchange by XRP Trading valume.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={7} lg={7} className="colhour">
            <div className="Reliablediv">
              <div>
                <img className="tlogologo" src="tlogo.png" alt="" />
              </div>
              <div>
                <p className="Reliabletext">Reliable Security</p>
              </div>
              <div>
                <p className="hourtext3">
                  Multi-signature cold wallet Brating from third party
                </p>
              </div>
            </div> 
          </Col>
          <Col xs={24} md={7} lg={7} className="colhour">
            <div className="pluslogodiv">
              <div>
                <img className="hourlogo" src="pluslogo.png" alt="" />
              </div>
              <div>
                <p className="hourtext2">
                  Quickly buy & sell digital currencies
                </p>
              </div>
              <div>
                <p className="hourtext3">
                  Credit card & wire transfer transactions supported. Ultra-low
                  fees with multiple currencies supported
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HourComponent;
