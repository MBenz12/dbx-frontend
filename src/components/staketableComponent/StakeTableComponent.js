import React from "react";
import "./style.css";
import DataTable from "react-data-table-component";
import { Avatar } from "antd";
import { Container } from "react-bootstrap";

const columns = [
  {
    name: "",
    hideHeader: false,
    cell: (row) => {
      return (
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar size={25} src={`/Images/Investt${row.id}.png`} />
            <p
              style={{
                marginLeft: ".5rem",
                fontWeight: "normal",
                color: "#333539"
              }}
            >
              {" "}
              {row.Coin}
            </p>
          </div>
          <div>
            <p
              style={{
                marginLeft: ".5rem",
                fontWeight: "normal",
                color: "#0CB668"
              }}
            >
              {" "}
              {row.text1}
            </p>
            <p style={{ marginLeft: ".5rem", fontWeight: "normal" }}>
              {" "}
              {row.text2}
            </p>
          </div>
        </div>
      );
    }
  },

  {
    name: "",
    hideHeader: false,
    cell: (row) => {
      return (
        <div>
          <p style={{ color: "#0CB668", textAlign: "center" }}> {row.EstApy}</p>
          <p
            style={{
              color: "#3F444D",
              textAlign: "center",
              fontWeight: "normal"
            }}
          >
            {" "}
            {row.text3}
          </p>
        </div>
      );
    }
  },
  {
    name: "",
    hideHeader: false,
    cell: (row) => {
      return (
        <div>
          <p
            style={{
              textAlign: "center",
              color: "#0B1025"
            }}
          >
            {" "}
            {row.Reward}
          </p>
          <p
            style={{
              fontWeight: "normal",
              textAlign: "center",
              color: "#3F444D"
            }}
          >
            {" "}
            {row.text4}
          </p>
        </div>
      );
    }
  },
  {
    name: "",
    hideHeader: false,
    cell: (row) => {
      return (
        <div>
          <p
            style={{
              textAlign: "center",
              color: "#0B1025"
            }}
          >
            {" "}
            {row.Days}
          </p>
          <p
            style={{
              fontWeight: "normal",
              textAlign: "center",
              color: "#3F444D"
            }}
          >
            {" "}
            {row.Day1}
          </p>
        </div>
      );
    }
  },
  {
    name: "",
    hideHeader: false,
    cell: (row) => {
      return (
        <div>
          <p
            style={{
              textAlign: "center",
              color: "#0B1025"
            }}
          >
            {" "}
            {row.Usd}
          </p>
          <p
            style={{
              fontWeight: "normal",
              textAlign: "center",
              color: "#3F444D"
            }}
          >
            {" "}
            {row.Usd1}
          </p>
        </div>
      );
    }
  },
  {
    name: "",
    hideHeader: false,
    cell: (row) => {
      return (
        <div>
          <p
            style={{
              border: "solid 1px #4B9A2A",
              padding: ".6rem",
              width: "8rem",
              textAlign: "center",
              color: "#4B9A2A",
              borderRadius: ".5rem",
              fontWeight: "normal"
            }}
          >
            {" "}
            {row.Action}
          </p>
        </div>
      );
    }
  }
];

const data = [
  {
    id: "1",
    Coin: "XRP",
    EstApy: "6.1%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 XRP",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "2",

    Coin: "BTC",
    EstApy: "8.5%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 BTC",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "3",

    Coin: "ETH",
    EstApy: "11%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 ETH",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "4",

    Coin: "USDT",
    EstApy: "22%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 USDT",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "5",

    Coin: "ADA",
    EstApy: "7%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 ADA",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "6",

    Coin: "VET",
    EstApy: "7%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 VET",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "7",

    Coin: "LINK",
    EstApy: "7%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 LINK",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "8",

    Coin: "ZIL",
    EstApy: "10%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 ZIL",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  },
  {
    id: "9",

    Coin: "LUNA",
    EstApy: "18%",
    text3: "APR",
    Reward: "30 Days",
    text4: "Lock-up Period",
    Days: "0 LUNA",
    Day1: "My Investment",
    Usd: "0 BTR",
    Usd1: "BTR Lock-up",
    Action: "Details"
  }
];

function StakeTableComponent() {
  return (
    <div className="Maintable11">
      <Container>
      <Container>
        <div>
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="450px"
            columns={columns}
            data={data}
          />
        </div>
      </Container>
      </Container>
    </div>
  );
}

export default StakeTableComponent;
