import React from "react";
import "./style.css";
import { Table, Input, Checkbox } from "antd";
import Eye from "../../Images/eye.png";
import Search from "../../Images/search.png";
import AssetsTable from "../myassetTableComponent/AssetsTable";
import Arrow from "../../Images/arrow.png";

const columns = [
  {
    title: "Total Assets",
    dataIndex: "Assets",
    key: "Assets",
    render: (text) => {
      return (
        <div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      );
    }
  }
];

const data = [
  {
    key: "1",
    Assets: "0 USTD  ~0 BTC"
  }
];

function MyAssetComponent() {
  return (
    <div className="maindivofopenorders122">
      <div style={{ display: "flex" }}>
        <div>
          <h1>Spot</h1>
        </div>
        <div>
          <img className="eyelogo" src={Eye} alt="" />
        </div>
      </div>

      <div className="marginoftoptable12">
        <Table className="tablestyling12" columns={columns} dataSource={data} />
      </div>
      <div className="myassetsearch11">
        <div>
          <img className="searchlogo1222" src={Search} alt="" />
          <Input className="searcbar1222" placeholder="Search"></Input>
        </div>

        <div>
          <Checkbox>Show only currencies in possession (0)</Checkbox>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <p className="myassetext33">Convert Small Assets to BTR </p>
          </div>
          <div>
            <img
              style={{
                width: ".7rem",
                marginLeft: ".5rem",
                marginTop: ".5rem"
              }}
              src={Arrow}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <AssetsTable />
      </div>
    </div>
  );
}

export default MyAssetComponent;
