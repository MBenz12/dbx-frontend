import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Tag, Input, Slider, Switch } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "./style.css";
function GraphComponent() {
  return (
    <div>
      <div className="headofgraphcomponent">
        <Container>
          <div className="spacofgraphheadcompoennt">
            <div className="displayflexofgraph">
              <div>
                <h5>XRP/USDT</h5>
              </div>
              <div>
                <h5 className="greycolormilja">Price</h5>
                <h5 className="redcolormilja">0.75950</h5>
              </div>
              <div>
                <h5 className="greycolormilja">24h Chg</h5>
                <h5 className="redcolormilja">-1</h5>
              </div>
              <div>
                <h5 className="greycolormilja">24h High</h5>
                <h5>0.75950</h5>
              </div>
              <div>
                <h5 className="greycolormilja">24h Vol(XRP)</h5>
                <h5>0.74950</h5>
              </div>
              <div>
                <h5 className="greycolormilja">24h Vol(USDT)</h5>
                <h5>0.75950</h5>
              </div> 
            </div>
            <div>
              <img src={"carbon_light.png"} />
            </div>
          </div>
        </Container>
      </div>

      {/* mobile view of header graph */}

      <div className="mobviewofheadergraph">
        <Container>
          <Container>
            <Row className="bottomgapmobview" justify="space-between">
              <Col>
                <h3>XRP/USDT</h3>
              </Col>
              <Col>
                <img className="carbonimgmobview" src={"carbon_light.png"} />
              </Col>
            </Row>
            <Row className="bottomgapmobview" justify="space-between">
              <Col>
                <h3 className="greycolormilja">Price</h3>
              </Col>
              <Col>
                <h3 className="redcolormilja">0.73950</h3>
              </Col>
            </Row>
            <Row className="bottomgapmobview" justify="space-between">
              <Col>
                <h3 className="greycolormilja">24h Chg</h3>
              </Col>
              <Col>
                <h3 className="redcolormilja">0.73950</h3>
              </Col>
            </Row>
            <Row className="bottomgapmobview" justify="space-between">
              <Col>
                <h3 className="greycolormilja">24h High</h3>
              </Col>
              <Col>
                <h3>0.73950</h3>
              </Col>
            </Row>
            <Row className="bottomgapmobview" justify="space-between">
              <Col>
                <h3 className="greycolormilja">24h Vol(XRP)</h3>{" "}
              </Col>
              <Col>
                <h3>0.73950</h3>
              </Col>
            </Row>
            <Row className="bottomgapmobview" justify="space-between">
              <Col>
                <h3 className="greycolormilja">24h Vol(USDT)</h3>{" "}
              </Col>
              <Col>
                <h3>0.73950</h3>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      {/* end of mobile view of header */}

      <div className="chartsplace">
        <div className="aligintoright">
          <button className="kbutton">K line</button>
          <button className="dpethbutton">Depthg</button>
        </div>
        <div className="displayflexofimages">
          <img className="imgofgraph" src={"graph1.png"} />
          <img className="imgofgraph" src={"graph2.png"} />
          <div>
            <p className="lineheightofdiv">121212</p>
            <p className="lineheightofdiv">121212</p>
            <p className="lineheightofdiv">121212</p>
            <p className="lineheightofdiv">121212</p>
            <p className="lineheightofdiv">121212</p>
          </div>
        </div>
        <div className="displaflexsss">
          <p className="greycolormilja">0.000721</p>
          <p className="greycolormilja">7.0021</p>
          <p className="greycolormilja">72.001</p>
          <p className="greycolormilja">72.1111</p>
          <p className="greycolormilja">72.221</p>
          <p className="greycolormilja">72331</p>
          <p className="greycolormilja">72441</p>
          <p className="greycolormilja">72551</p>
        </div>
      </div>

      <div className="bottomRowofgraphs">
        <Row className="mobileviewofrow" gutter={14} justify="center">
          <Col lg={12} md={20} xs={20}>
            <div className="fisrtdivofbottomgraphs">
              <div>
                <h4 className="bottomcolorborder"> Limit</h4>
              </div>
              <div className="greycolormilja marketquestiommark">
                Market <QuestionCircleOutlined />
              </div>
              <div className="greycolormilja marketquestiommark">
                Trigger Order <QuestionCircleOutlined />
              </div>
            </div>
          </Col>
          <Col lg={12} md={20} xs={20}>
            <div className="fisrtdivofbottomgraphs">
              <Tag color="green">3X Long</Tag>
              <Tag color="red">3X Short</Tag>
              <Tag color="gold">Future</Tag>
              <Tag className="displaynone" color="lime">
                Loans
              </Tag>
            </div>
          </Col>
        </Row>
        <div className="linediveoo" />
        <Row justify="center">
          <Col className="firstcoloumofrow" lg={12} md={20}>
            <Container>
              <div className="displayflexspacebetwwen">
                <h4 className="colorofreen">Buy XRP</h4>
                <h4 className="greycolormilja">USDT Available:--</h4>
              </div>
              <Input
                className="marginofinputsss"
                addonBefore="Price"
                addonAfter="USDT"
                placeholder="Enter your Price"
                size="large"
              />
              <Input
                className="marginofinputsss"
                addonBefore="Amount"
                addonAfter="XRP"
                placeholder="Enter Amount"
                size="large"
              />
              <Slider
                className="colortrykrtyhuwy"
                defaultValue={0}
                dots={true}
                step={10}
              />

              <h4 className="greycolormilja margintTopiffs ">Value --USDT</h4>
              <button className="bottombutton">Log In or Sign Up</button>
            </Container>
          </Col>
          <Col className="firstcoloumofrow" lg={12} md={20}>
            <Container>
              <div className="displayflexspacebetwwen">
                <h4 className="redcolormilja">Sell XRP</h4>
                <h4 className="greycolormilja">USDT Available:--</h4>
              </div>
              <Input
                className="marginofinputsss"
                addonBefore="Price"
                addonAfter="USDT"
                placeholder="Enter your Price"
                size="large"
              />
              <Input
                className="marginofinputsss"
                addonBefore="Amount"
                addonAfter="XRP"
                placeholder="Enter Amount"
                size="large"
              />
              <Slider
                className="colortrykrtyhuwy"
                defaultValue={0}
                dots={true}
                step={10}
              />

              <h4 className="greycolormilja margintTopiffs ">Value --USDT</h4>
              <button className="bottombutton">Log In or Sign Up</button>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GraphComponent;
