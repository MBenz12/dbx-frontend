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
            <Avatar
              style={{ marginTop: ".7rem" }}
              size={25}
              src={`/Images/Invest${row.id}.png`}
            />
            <p
              style={{
                marginLeft: ".5rem",
                fontWeight: "normal",
                marginTop: ".5rem"
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
                color: "#0CB668",
                marginTop: ".5rem"
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
          <p style={{ color: "#F04B55", textAlign: "center" }}> {row.EstApy}</p>
          <p style={{ color: "#3F444D", textAlign: "center" }}> {row.text3}</p>
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
              fontWeight: "normal",
              textAlign: "center",
              color: "#3F444D"
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
              color: "#F04B55"
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
              color: "#3F444D"
            }}
          >
            {" "}
            {row.Usd}
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#0B1025"
            }}
          >
            {" "}
            {row.Usd1}
          </p>
          <p
            style={{
              fontWeight: "normal",
              textAlign: "center",
              color: "#3F444D"
            }}
          >
            {" "}
            {row.Usd2}
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
            {row.Action1}
          </p>
        </div>
      );
    }
  }
];

const data = [
  {
    id: 1,
    Coin: "XRP",
    text1: "1.7%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "1,000,000 XRP",
    text4: "Total Cap (VIP Include)",
    Days: "12,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 XRP",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 2,
    Coin: "BTC",
    text1: "1.9%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "4 BTC",
    text4: "Total Cap (VIP Include)",
    Days: "12,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 BTC",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 3,
    Coin: "USDC/USDT",
    text1: "8.4%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "1,000,000 USDT",
    text4: "Total Cap (VIP Include)",
    Days: "12,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 USDT",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 4,
    Coin: "VET",
    text1: "2.1%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "1,000,000 VET",
    text4: "Total Cap (VIP Include)",
    Days: "12,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 VET",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 5,
    Coin: "KIRO",
    text1: "6%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "12,000 KIRO",
    text4: "Total Cap (VIP Include)",
    Days: "12,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 KIRO",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 6,
    Coin: "ANC",
    text1: "8%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "100,000 ANC",
    text4: "Total Cap (VIP Include)",
    Days: "100,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 ANC",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 7,
    Coin: "FTM",
    text1: "4%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "100,000 FTM",
    text4: "Total Cap (VIP Include)",
    Days: "Sold Out",
    Day1: "New capsopen at 06:00 UTC ",
    Usd: "0 USDT",
    Usd1: "0 FTM",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 8,
    Coin: "NU",
    text1: "2%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "500,000 NU",
    text4: "Total Cap (VIP Include)",
    Days: "500,000",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 NU",
    Usd2: "My Investment",
    Action1: "Details"
  },
  {
    id: 9,
    Coin: "OHM",
    text1: "100%",
    text2: "Interest Rate",
    EstApy: "Unlimited",
    text3: "Lock-up Period",
    Reward: "3,000 OHM",
    text4: "Total Cap (VIP Include)",
    Days: "2,961",
    Day1: "Today’s remaining amount",
    Usd: "0 USDT",
    Usd1: "0 OHM",
    Usd2: "My Investment",
    Action1: "Details"
  }
];

function InvestTableComponentOne() {
  return (
    <div className="Maintable1111">
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

export default InvestTableComponentOne;
