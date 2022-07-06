import React from "react";
import "./cards.css";
import { Card, Col, Row } from "antd";
import {
  EllipsisOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { Container, Button } from "react-bootstrap";

const { Meta } = Card;

function Cards() {
  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {" "}
          <h1 className="hot">Hot bids</h1>
        </div>
        <div className="arrr">
          <div className="arrdiv">
            <ArrowLeftOutlined className="arr" />
          </div>
          <div className="arrdiv1">
            <ArrowRightOutlined className="arr1" />
          </div>
        </div>
      </Container>
      <Container>
        <Row className="rows">
          <Col>
            <img className="imges" src="/assets/images/heart.png"></img>
            <Card
              className="images"
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  style={{ borderRadius: "1rem" }}
                  alt="example"
                  src="/assets/images/crd1.png"
                />
              }
            >
              <div className="div1">
                <p>CyberKongVX #5119</p>
                <div>
                  {" "}
                  <EllipsisOutlined
                    style={{ fontSize: "2rem", fontWeight: "800" }}
                  />
                </div>
              </div>
              <div className="div1">
                <div>
                  <img src="/assets/images/avatar.png"></img>
                </div>
                <div className="bld">
                  <p style={{ color: "#4B9A2A" }}>2.2 ETH</p> &nbsp;
                  <p style={{ color: "#8F8F8F" }}>1/1</p>
                </div>
              </div>
              <div>
                {" "}
                <Button className="buttons" variant="outline-success">
                  Buy Now
                </Button>
              </div>
            </Card>{" "}
          </Col>
          <Col>
            <img className="imges" src="/assets/images/heart.png"></img>
            <Card
              className="images"
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ borderRadius: "1rem" }}
                  alt="example"
                  src="/assets/images/crd2.png"
                />
              }
            >
              <div className="div1">
                <p>#37 The Boozer</p>
                <EllipsisOutlined
                  style={{ fontSize: "2rem", fontWeight: "800" }}
                />
              </div>
              <div className="div1">
                <div>
                  <img src="/assets/images/avatar.png"></img>
                </div>
                <div className="bld">
                  <p style={{ color: "#4B9A2A" }}>Open for bids</p> &nbsp;
                  <p style={{ color: "#8F8F8F" }}>1/1</p>
                </div>
              </div>
              <Button className="buttons1" variant="outline-success">
                Place a bid
              </Button>
            </Card>{" "}
          </Col>
          <Col>
            <img className="imges" src="/assets/images/heart.png"></img>
            <Card
              className="images"
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ borderRadius: "1rem" }}
                  alt="example"
                  src="/assets/images/crd3.png"
                />
              }
            >
              <div className="div1">
                <p>Pep Troopers.</p>
                <EllipsisOutlined
                  style={{ fontSize: "2rem", fontWeight: "800" }}
                />
              </div>
              <div className="div1">
                <div>
                  <img src="/assets/images/avatar.png"></img>
                </div>
                <div className="bld">
                  <p style={{ color: "#4B9A2A" }}>From 6.9 ETH</p> &nbsp;
                  <p style={{ color: "#8F8F8F" }}>1/1</p>
                </div>
              </div>
              <Button className="buttons" variant="outline-success">
                Buy Now
              </Button>
            </Card>{" "}
          </Col>
          <Col>
            <img className="imges" src="/assets/images/heart.png"></img>
            <Card
              className="images"
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ borderRadius: "1rem" }}
                  alt="example"
                  src="/assets/images/crd4.png"
                />
              }
            >
              <div className="div1">
                <p>ON1 #7467</p>
                <EllipsisOutlined
                  style={{ fontSize: "2rem", fontWeight: "800" }}
                />
              </div>
              <div className="div1">
                <div>
                  <img src="/assets/images/avatar.png"></img>
                </div>
                <div className="bld">
                  <p style={{ color: "#4B9A2A" }}>3.87 ETH</p> &nbsp;
                  <p style={{ color: "#8F8F8F" }}>1/1</p>
                </div>
              </div>
              <Button className="buttons" variant="outline-success">
                Buy Now
              </Button>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
