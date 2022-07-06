import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";

function Analytics() {
  return (
    <div className="MainAnalytics">
      <Container>
        <Row className="rowana"  justify="space-between">
          <Col xs={10} md={10} lg={5}>
            <div className="mainanadiv"> 
              <div>
                <img src="/assets/images/bitcoin.png"></img>
                &nbsp;
                <span className="txtana"></span>BTC
              </div>
              <h1 className="marg">$4.600</h1>
              <img className="marg1" src="/assets/images/Vector1.png"></img>
            </div>
             
          </Col>
          <div className="anahr"></div>
          <Col xs={10} md={10} lg={5}>
            <div className="mainanadiv">
              <div>
                <img src="/assets/images/ethe.png"></img>
                &nbsp;
                <span className="txtana"></span>ETH
              </div>
              <h1 className="marg">$7.273</h1>
              <img className="marg1" src="/assets/images/Vector2.png"></img>
            </div>
          </Col>
          <div className="anahr"></div>
          <Col xs={10} md={10} lg={5}>
            <div className="mainanadiv">
              <div>
                <img src="/assets/images/xrp.png"></img>
                &nbsp;
                <span className="txtana"></span>XRP
              </div>
              <h1 className="marg">$2.965</h1>
              <img className="marg1" src="/assets/images/Vector3.png"></img>
            </div>
          </Col>
          <div className="anahr"></div>
          <Col xs={10} md={10} lg={5}>
            <div className="mainanadiv">
              <div>
                <img src="/assets/images/litecoin.png"></img>
                &nbsp;
                <span className="txtana"></span>XRP
              </div>
              <h1 className="marg">$1.900</h1>
              <img className="marg1" src="/assets/images/Vector4.png"></img>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="centerdivana">
        <div className="centerdivana1">
          {" "}
          <div>
          <img src="/assets/images/promotion.png"></img>
          </div>
          <div>
          <h5>Alteration to Power piggy Cap Op...</h5>
          </div>
          <div>
          <h5>12:15</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;