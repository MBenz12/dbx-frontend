import React from "react";
import "./style.css";
import { Row, Col } from "antd";

function FarmingCompoent() {
  return (
    <div className="mainFarming">
      <Row justify="space-between">
        <Col xs={24} md={10} lg={10}>
          <div className=" ">
            <h1 className="farmningtext">Yeild Farming</h1>
            <h6 className="farmningtext1">
              Bitrue is the greatest place on earth for making your portfolio
              grow{" "}
            </h6>
            <div className="farmingyeild">
              <div className="farminfvoldiv">
                <h4>24.08 M</h4>
                <p style={{fontWeight:"normal"}}>Volume on Bitrue </p>
              </div>
              <div className="farminfStakeddiv">
                <h4>1,015,822.64</h4>
                <p style={{fontWeight:"normal"}}>Staked on Bitrue (USDT) </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={10} lg={10} className="farmingcol">
          <div className="farmingimg">
            <img className="farmingimg1" src="framing.png" alt="" />
            <img className="farmingimg2" src="framing2.png" alt="" />
            <img className="stargreen" src="stargreen.png" alt="" />
            <img className="green" src="green.png" alt="" />
            <img className="star1" src="stargreen.png" alt="" />
            <img className="star2" src="stargreen.png" alt="" />
          </div>
          <div className="mainopacitydiv">
            <div className="mainstakediv">
              <div>
                <p className="Currenttext">Current Stake (USDT)</p>
                <p>0</p>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>
                  <p className="Esttext">Est. Profit (USDT)</p>
                  <p className="zero">0</p>
                </div>
                <div>
                  <p className="Esttext">Total Earnings (USDT)</p>
                  <p className="zero">0</p>
                </div>
              </div>
            </div>
            <div className="mainbtndiv">
              <button className="investdiv">
                <p>Investment List</p>
              </button>
              <button className="investdiv1">
                <p>History</p>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FarmingCompoent;
