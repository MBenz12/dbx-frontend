import React from "react";
import "./style.css";
import {Avatar } from "antd";
import DataTable from "react-data-table-component";
import { Container } from "react-bootstrap";
const columns = [
  {
    name: "Coin",
   
    cell: (row) => {
      return (
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar size={25} src={`/Images/Invest${row.id}.png`} />
            <p style={{ marginLeft: ".5rem", fontWeight: "normal" }}>
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
    name: "Amount",
  
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
    name: "Date",
  
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
    name: "Address",
     
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
    name: "TXID",
 
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
    name: "Status",
    
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
 }
];

function DepositCopmponent() {
  return (
    <div style={{ marginTop: "2rem" }}>
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
    </div>
  );
}

export default DepositCopmponent;
