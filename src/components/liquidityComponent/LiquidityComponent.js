import React from "react";
import "./style.css";
import { Card } from "antd";
import { Container } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";

function LiquidityComponent() {
  return (
    <div>
      <div className="main">
        <div className="mains">
          <div>
            <Card className="card1" bordered={false}   >
              <Container className="cont">
                <div className="div1l">
                  <div>
                    {" "}
                    <img src="/assets/images/img1.png"></img>
                  </div>
                  <h6 className="h66">
                    Input:
                    <br />
                    <span className="h666">ETH</span>
                  </h6>
                </div>{" "}
                <div className="down">
                  <a>
                    {" "}
                    <DownOutlined />
                  </a>
                </div>
              </Container>{" "}
              <Container>
                <Input className="inpu" placeholder="0.097|" />
              </Container>
              <p className="ppp">&nbsp;&nbsp;Balance: 20.3647367364 ETH</p>
            </Card>
          </div>
          <div className="imgggg">
            <img className="imggg" src="/assets/images/img2.png"></img>
          </div>
          <div>
            <Card className="card1" bordered={false}  >
              <Container className="cont">
                <div className="div1l">
                  <div>
                    {" "}
                    <img src="/assets/images/img3.png"></img>
                  </div>
                  <h6 className="h66">
                    Input:
                    <br />
                    <span className="h666">CX1</span>
                  </h6>
                </div>{" "}
                <div className="down">
                  <a>
                    {" "}
                    <DownOutlined />
                  </a>
                </div>
              </Container>{" "}
              <Container>
                <Input className="inpu" placeholder="Swap amount" />
              </Container>
              <p className="ppp">&nbsp;&nbsp;Balance: 20.3647367364 ETH</p>
            </Card>
          </div>
        </div>
      </div>
      <div className="div333">
        {" "}
        <button className="buttonn">Connect to a wallet</button>
      </div>
    </div>
  );
}

export default LiquidityComponent;
