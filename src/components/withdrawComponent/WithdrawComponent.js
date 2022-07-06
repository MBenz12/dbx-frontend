import React from "react";
import "./style.css";
import { Table, Space } from "antd";
import { Container } from "react-bootstrap";

const columns = [
  { 
    title: "Coin",
    dataIndex: "Coin",
    key: "Coin",
    render: (text, record) => {
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img className="coinimg" src={record.image} alt="" />
            <img className="newpic" src="new.png" alt=""/>
          </div>
          <div>
            <p className="cointext">{text}</p>
          </div>
        </div>
      );
    }
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    render: (text, record) => <p className="textcolor">{text}</p>
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    render: (text, record) => {
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img className="coinimg" src={record.image1} alt="" />
          </div>
          <div>
            <p className="cointext">{text}</p>
          </div>
        </div>
      );
    }
  },
  {
    title: "Address",
    key: "Address",
    render: (text, record) => <p className="btntable">{text.Days}</p>
  },

  {
    title: "TXID",
    key: "TXID",
    render: (text, record) => (
      <Space size="middle">
        <button className="stakebtn">{text.Action}</button>
      </Space>
    )
  },
   {
    title: "Status",
    key: "Status",
    render: (text, record) => (
      <Space size="middle">
        <button className="stakebtn">{text.Action}</button>
      </Space>
    )
  }
];

const data = [
 
];

function WithdrawCopmponent() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Container>
      <Table className="tablediv1122" columns={columns} dataSource={data} />
      </Container>
    </div>
  );
}
 
export default WithdrawCopmponent;
