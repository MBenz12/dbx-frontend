import React from "react";
import "./style.css";
import { Table} from "antd";
import Eye from "../../Images/eye.png";
import Arrow from "../../Images/arrow.png"

 
const columns = [
  {
    title: "Total Assets",
    dataIndex: "Assets",
    key: "Assets",
    render: (text,record) => {
      return (
        <div>
          <div style={{display: "flex"}}>
            <p style={{color: "#14192D"}}>{text}</p>
            <p style={{color: "#8F8F8F", marginLeft: ".5rem"}}>{record.text2}</p>
          </div>
        </div>
      );
    }
  },
  {
    title: "Gain/Loss Today",
    dataIndex: "Today",
    key: "Today",
    render: (text) => <p style={{color: "#14192D"}}>{text}</p>
  },
  {
    title: "Gain/Loss Overall",
    dataIndex: "Overall",
    key: "Overall",
    render: (text) => {
      return (
        <div>
          <div>
            <p style={{color: "#14192D"}}> {text}</p>
          </div>
        </div>
      );
    }
  }
];

const data = [
  {
    key: "1",
    Assets: "0 USTD ",
    text2: "~0 BTC",
    Today: "0.00",
    Overall: "0.00"
  }
];
const data1 = [
  {
    key: "1",
    Assets: "0 USTD ",
    text2: "~0 BTC",
  }
];
const data2 = [
  { 
    key: "1",
    Assets: "0 USTD ",
    text2: "~0 BTC",
  }
];

function OverviewComponent() {
  return (
    <div className="maindivofopenorders11">
      <div className="maineysdivvv">
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <h1>Overview</h1>
            </div>
            <div>
              <img className="eyelogo" src={Eye} alt="" />
            </div>
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div>
            <h5 className="assetstext" style={{ marginTop: ".5rem" }}>
              Export Assets Transaction Hostory
            </h5>
          </div>
          <div>
          <img style={{width: ".7rem", marginLeft: ".5rem",marginTop: ".7rem"}} src={Arrow} alt=""/>
          </div>
        </div>
      </div>
      <div className="displayflexofopenorders11"></div>
      <div className="marginoftoptable11">
        <Table className="tablestyling11" columns={columns} dataSource={data} />
      </div>

      <div className="maineysdiv1">
        <div>
          <div>
            <h1>Spot</h1>
          </div>
        </div>
        <div>
          <div className="assetbtndiv">
            <div>
              <button className="assetbtn">Purchase</button>
            </div>
            <div>
              <button className="assetbtn1">Deposit</button>
            </div>
            <div>
              <button className="assetbtn1">Withdraw</button>
            </div>
            <div>
              <button className="assetbtn1">Transfer</button>
            </div>
          </div>
        </div> 
      </div>
      <div className="displayflexofopenorders11"></div>
      <div className="marginoftoptable11">
        <Table
          showHeader={false}
          className="tablestyling11"
          columns={columns}
          dataSource={data1}
        />
      </div>

      <div className="maineysdivvv">
        <div>
          <div>
            <h1>Futures</h1>
          </div>
        </div>
        <div>
          <div>
            <div>
              <button className="assetbtn">Transfer</button>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexofopenorders11"></div>
      <div className="marginoftoptable11">
        <Table
          showHeader={false}
          className="tablestyling11" 
          columns={columns}
          dataSource={data2}
        />
      </div>
    </div>
  );
}

export default OverviewComponent;
