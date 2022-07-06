import React from "react";
import "./style.css";
import DataTable from "react-data-table-component";
import { Avatar } from "antd";
import { Container } from "react-bootstrap";

const columns = [
  {
    name: "Coin Type",
    cell: (row) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar size={30} src={`/Images/Group${row.id}.png`} />
          <p style={{ marginLeft: "1.5rem" }}> {row.coin}</p>
        </div>
      );
    }
  },

  {
    name: "Name",
    selector: (row) => row.price
  },
  {
    name: "Available",
    selector: (row) => row.hchng
  },
  {
    name: "Frozen",
    selector: (row) => row.hamount
  },
  {
    name: "Value(USDT)",
    selector: (row) => row.action
  },
  {
    name: " ",
    cell: (row) => {
      return (
        <div
          style={{ display: "flex", alignItems: "center", color: "#4B9A2A" }}
        >
          <p style={{ fontSize: "1rem", marginLeft: ".5rem" }}>
            {row.action11}
          </p>
          <p
            style={{ fontSize: "1rem", marginLeft: ".5rem", color: "#8F8F8F" }}
          >
            {row.action22}
          </p>
          <p
            style={{ fontSize: "1rem", marginLeft: ".5rem", color: "#4B9A2A" }}
          >
            {row.action33}
          </p>
        </div>
      );
    }
  }
];
const data = [
  {
    id: 1,
    coin: "KSM",
    price: "Kusama",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 2,
    coin: "YFII3S",
    price: "yfli3s",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 3,

    coin: "FARA",
    price: "FaraLand",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 4,
    coin: "SXP3S",
    price: "sxp3s",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 5,
    coin: "SXP3L",
    price: "sxp3l",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 6,
    coin: "ZRX3S",
    price: "zrx3s",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 7,
    coin: "THETA",
    price: "THETA",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 8,
    coin: "VIB",
    price: "Viberate",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 9,
    coin: "CCN",
    price: "CollageCoinNetwork",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 10,
    coin: "YFII3L",
    price: "yfli3l",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  },
  {
    id: 11,
    coin: "STPT",
    price: "Standard",
    hchng: "0",
    hamount: "0",
    action: "0",
    action11: "Deposit",
    action22: "Withdraw",
    action33: "Trade"
  }
];

function AssetTableCopmponent() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Container>
        <DataTable
          fixedHeader
          fixedHeaderScrollHeight="400px"
          columns={columns}
          data={data}
        />
      </Container>
    </div>
  );
}

export default AssetTableCopmponent;
