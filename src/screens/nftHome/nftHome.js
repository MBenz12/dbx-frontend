import { Col, Row } from "antd";
import React from "react";
import { Container, Button } from "react-bootstrap";
import "./nftHome.css";
import { Card } from "antd";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import {
  EllipsisOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import NftHomeOneComponent from "../../components/nfthomeOneComponent/NftHomeOneComponent";

function NftHome() {
  const { Meta } = Card;
  return (
    <div>
      <div style ={{backgroundColor : "#FFFF"}}>
      <div className="nftmain">
        <Container>
          <Row className="nftrow">
            <Col>
              <div>
                <h1 className="discover">
                  Discover, collect, and<br></br> sell extraordinary<br></br>{" "}
                  NFTs
                </h1>
              </div>
              <div>
                <p className="dolar">
                  Dolor sit amet, consectetur adipiscing elit.<br></br> Faucibus
                  ac ut turpis amet eleifend viverra.{" "}
                </p>
              </div>
              <br></br>
              <div className="btnmain">
                <div>
                  <button className="btn1">Explore</button>
                </div>
                <div> 
                  <button className="btn2">Create</button>
                </div>
              </div>
            </Col>
            <Col className="col2">
              <div>
                <img className="nftimg2" src="greenstar.png" alt="" />
                <img className="nftimg1" src="Group 2156.png" alt="" />
                <img className="nftimg3" src="Vector (5).png" alt="" />
                <img className="nftimg4" src="greenstar.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <div>
          <Container>
            <div className="hb1">
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
            </div>
          </Container>
        </div>
        <Container>
          <Row className="rows">
            <Col style={{ marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 140.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>CyberKongVX #5119</p>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <EllipsisOutlined
                        style={{ fontSize: "2rem", fontWeight: "800" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img className="group2123" src="Group 2123.png"></img>
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
            <Col style={{ marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 158.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>#37 The Boozer</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img className="group2123" src="Group 2123.png"></img>
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
            <Col style={{ marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 138.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Pep Troopers.</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
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
            <Col style={{ marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 139.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>ON1 #7467</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
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
      <br></br>
      <br></br>
      <div>
        <div>
          <Container>
            <div className="hb1">
              <div>
                {" "}
                <h1 className="hot">Live Auctions</h1>
              </div>
              <div className="arrr">
                <div className="arrdiv">
                  <ArrowLeftOutlined className="arr" />
                </div>
                <div className="arrdiv1">
                  <ArrowRightOutlined className="arr1" />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <Row className="rows">
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 156.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Hermitage Land #021</p>
                    <p style={{ fontWeight: "100" }}>Highest bid 1/1</p>
                  </div>
                  <div>
                    {" "}
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>0.074 WETH</p> &nbsp;
                  </div>
                </div>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
                <img className="group2113" src="Group 2113.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 134.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>HXH #0010</p>
                    <p style={{ fontWeight: "100" }}>Highest bid 1/1</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>0.034 WETH</p> &nbsp;
                  </div>
                </div>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
                <img className="group2113" src="Group 2114.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 157.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Bitcoin from sand.</p>
                    <p style={{ fontWeight: "100" }}>Highest bid 1/1</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>0.041 WETH</p> &nbsp;
                  </div>
                </div>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
                <img className="group2113" src="Group 2114.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 136.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>POKErn #0020</p>
                    <p style={{ fontWeight: "100" }}>Highest bid 1/1</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>0.03 WETH</p> &nbsp;
                  </div>
                </div>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <br></br>
      <div>
        <div className="hb">
          <Container>
            <div className="hb1">
              {" "}
              <h1 className="hot">Explore</h1>
            </div>
          </Container>
        </div>
        <Container>
          <Row className="rows">
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="Mask Group.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Soccer Doge #8455</p>
                  </div>
                  <div>
                    {" "}
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>From 0.1 ETH</p> &nbsp;
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
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 142.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>PHANTA BEAR #8035</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>4.2 ETH</p> &nbsp;
                    <p style={{ color: "#8F8F8F" }}>1/1</p>
                  </div>
                </div>
                <Button className="buttons" variant="outline-success">
                  Buy Now
                </Button>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 143.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Soccer Doge #8455.</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>From 0.1 ETH</p> &nbsp;
                    <p style={{ color: "#8F8F8F" }}>1/1</p>
                  </div>
                </div>
                <Button className="buttons" variant="outline-success">
                  Buy Now
                </Button>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 144.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Soccer Doge #8455</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>From 0.1 ETH</p> &nbsp;
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
      <div>
        <Container>
          <Row className="rows">
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png" alt=""></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 145.png"
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>CloneX #14217</p>
                  </div>
                  <div>
                    {" "}
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>67.778 ETH </p> &nbsp;
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
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 146.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Super Yeti #5588</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>4.4 ETH</p> &nbsp;
                    <p style={{ color: "#8F8F8F" }}>1/1</p>
                  </div>
                </div>
                <Button className="buttons" variant="outline-success">
                  Buy Now
                </Button>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 147.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Holy Cow #170</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>From 0.3 ETH</p> &nbsp;
                    <p style={{ color: "#8F8F8F" }}>1/1</p>
                  </div>
                </div>
                <Button className="buttons1" variant="outline-success">
                  Buy Now
                </Button>
              </Card>{" "}
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div>
                <img className="imges" src="Vector.png"></img>
              </div>
              <Card
                className="images"
                hoverable
                style={{ width: 260 }}
                cover={
                  <img
                    style={{ borderRadius: "1rem" }}
                    alt="example"
                    src="image 148.png"
                    alt=""
                  />
                }
              >
                <div className="div1">
                  <div>
                    <p>Crumby #479</p>
                  </div>
                  <div>
                    <EllipsisOutlined
                      style={{ fontSize: "2rem", fontWeight: "800" }}
                    />
                  </div>
                </div>
                <div className="div1">
                  <div>
                    <img
                      className="group2123"
                      src="Group 2123.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="bld">
                    <p style={{ color: "#4B9A2A" }}>From 0.585 ETH</p> &nbsp;
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
      <br></br>
      <br></br>
      <div className="endbtn">
        <button className="endbtn1">See more</button>
      </div>
      </div>
      <NftHomeOneComponent />
    </div>
  );
}

export default NftHome;
