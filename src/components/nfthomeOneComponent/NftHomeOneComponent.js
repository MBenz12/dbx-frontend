import React from "react";
import "./style.css";
import { Row, Col } from "antd";

function NftHomeOneComponent() {
  return (
    <div className="MainNftHomeOne111222">
      <div>
        <h1 className="conducttext">
          Download the Rarible app to explore any NFTs
        </h1>
      </div>
      <div>
        <Row justify="space-between" style={{ marginTop: "4rem" }}>
          <Col xs={24} md={10} lg={10}>
            <div className="compdiv">
              <img className="compimg" src="comp.png" alt="" />
            </div>
          </Col>
          <Col xs={24} md={10} lg={10} className="bitcoll">
            <div className="bitdiv">
              <p className="bittext">
                The Bitrue website & app provide you with
                <br />
                simple & fast trading methods
              </p>
              <hr className="hrbit" />
            </div>
            <div className="applediv">
              <div className="downdiv">
                <div>
                  <img style={{ width: "3rem" }} src="apple.png" alt="" />
                </div>
                <div>
                  <p className="downtext">Download on the</p>
                  <p className="downtext1">iOS</p>
                </div>
              </div>
            </div>

            <div className="Androiddiv">
              <div className="downdiv">
                <div>
                  <img style={{ width: "3.5rem" }} src="and.png" alt="" />
                </div>
                <div>
                  <p className="Androidtext">Download on the</p>
                  <p className="Androidtext1">Android</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NftHomeOneComponent;
