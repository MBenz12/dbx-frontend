import React from "react";
import "./style.css";

function MyInvestComponent() {
  return (
    <div className="MainInvestTable1">
      <div>
        <div className="maininvesttable11">
          <div className="investtable22">
            <div>
              <p className="mytext1">My Investmets</p>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex" }}>
            <div>
              <p className="usdtext111">0 USDT</p>
              <p className="rewardtext11">Total Rewards</p>
            </div>
            <div>
              <p className="usdtext11">0 USDT</p>
              <p className="rewardtext12">Total Investment</p>
            </div>
          </div>
        </div> 
      </div>
      <div className="flexdiv1">
        <div>
          <div>
            <p className="flextext111">Avaiable Coins</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInvestComponent;
