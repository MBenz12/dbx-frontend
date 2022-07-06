import React from "react";
import "./table1.css";
import DataTable from "react-data-table-component";
import { Avatar } from "antd";
import { Container } from "react-bootstrap";

const columns = [
  {
    name: "Top Traded Pairs",
    cell: (row) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar size={30} src={`/Images/MaskGroup${row.id}.png`} />
          <p
            style={{
              marginLeft: "1.5rem",
              color: "#14192D",
              fontWeight: "normal"
            }}
          >
            {row.coin}{" "}
          </p>
          <p style={{ color: "grey", fontWeight: "normal" }}>{row.coin1} </p>
        </div>
      );
    }
  },

  {
    name: "Price",
    selector: (row) => row.price
  },
  {
    name: "24h Chg",
    cell: (row) => {
      return (
        <div>
          <p style={{ color: "#4B9A2A" }}> {row.hchng}</p>
        </div>
      );
    }
  },
  {
    name: "24h Amount",
    selector: (row) => row.hamount
  },
  {
    name: "Action",
    cell: (row) => {
      return (
        <div>
          <button
            style={{
              backgroundColor: "rgba(118, 185, 27, 0.08)",
              borderRadius: ".5rem",
              border: "solid 1px #F4F9ED",
              padding: ".8rem",
              color: "#4B9A2A"
            }}
          >
            {" "}
            {row.action}
          </button>
        </div>
      );
    }
  }
];
const data = [
  {
    id: 1,
    coin: "LEONIDAS/",
    coin1: "USDT",
    price: "0.000329",
    hchng: "119.33%",
    hamount: "30,939.51486612 USDT",
    action: "Start Trading"
  },
  {
    id: 2,
    coin: "GALAXY/",
    coin1: "USDT",
    price: "0.00000042892",
    hchng: "97.08%",
    hamount: "612,939.51486612 USDT",
    action: "Start Trading"
  },
  {
    id: 3,
    coin: "RBN/",
    coin1: "USDT",
    price: "4.9999",
    hchng: "72.41%",
    hamount: "920.92757 USDT",
    action: "Start Trading"
  },
  {
    id: 4,
    coin: "POLS/",
    coin1: "USDT",
    price: "4.9674",
    hchng: "65.58%",
    hamount: "1,898.814598 USDT",
    action: "Start Trading"
  },
  {
    id: 5,
    coin: "PSP/",
    coin1: "USDT",
    price: "0.5663",
    hchng: "56.95%",
    hamount: "265.714924 USDT",
    action: "Start Trading"
  },
  {
    id: 6,
    coin: "NORA/",
    coin1: "USDT",
    price: "0.2998",
    hchng: "51.26%",
    hamount: "902.571528 USDT",
    action: "Start Trading"
  },
  {
    id: 4,
    coin: "POLS/",
    coin1: "USDT",
    price: "4.9674",
    hchng: "65.58%",
    hamount: "1,898.814598 USDT",
    action: "Start Trading"
  },
  {
    id: 2,

    coin: "GALAXY/",
    coin1: "USDT",
    price: "0.00000042892",
    hchng: "97.08%",
    hamount: "612,939.51486612 USDT",
    action: "Start Trading"
  },
  {
    id: 6,
    coin: "NORA/",
    coin1: "USDT",
    price: "0.2998",
    hchng: "51.26%",
    hamount: "902.571528 USDT",
    action: "Start Trading"
  },
  {
    id: 1,
    coin: "LEONIDAS/",
    coin1: "USDT",
    price: "0.000329",
    hchng: "119.33%",
    hamount: "30,939.51486612 USDT",
    action: "Start Trading"
  }
];

function FarmTableCopmponent() {
  return (
    <div style={{ padding: "60px 0px" }}>
      <Container>
        <div className="risingdatatablediv">
          <div className="risingdivvv">
            <div className="mainbtndivvv">
              <div>
                <button className="risingbtn">Rising Market</button>
              </div>
              <div>
                <button className="risingbtn1" style={{ color: "#8F8F8F" }}>
                  Decline Market
                </button>
              </div>
            </div>
          </div>
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />
          <div className="downdivv">
            <div>
              <p
                style={{
                  color: "#76B91B",
                  textAlign: "center",
                  fontSize: "1.2rem"
                }}
              >
                See more
              </p>
            </div>
            <div>
              <img className="downvecc" src="downvec.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FarmTableCopmponent;
