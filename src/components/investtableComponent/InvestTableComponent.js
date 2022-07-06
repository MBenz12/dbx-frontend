import { Input } from "antd";
import React from "react";
import "./style.css";

function InvestTableComponent() {
  return (
    <div className="MainInvestTable">
      <div>
        <div className="maininvesttable">
          <div className="investtable">
            <div>
              <p className="mytext">My Investmets</p>
            </div>
            <div>
              <button className="Detailbtn">
                Details
                <img className="arrowlogo" src="arrow.png" alt="" />
              </button>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex" }}>
            <div>
              <p className="usdtext">0 USDT</p>
              <p className="rewardtext22">Total Rewards</p>
            </div>
            <div>
              <p className="usdtext1">0 USDT</p>
              <p className="rewardtext1">Total Investment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flexdiv">
        <div>
          <div style={{ display: "flex" }}>
            <p className="flextext">Flexible</p>
            <p className="flextext1">Lock-ups</p>
          </div>
        </div>
        <div>
          <img className="searchlogo1" src="search.png" alt="" />
          <Input className="searcbar1" placeholder="Search"></Input>
        </div>
      </div>
    </div>
  );
}

export default InvestTableComponent;
