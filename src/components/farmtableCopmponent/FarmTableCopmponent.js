import React from "react";
import "./style.css";
import DataTable from "react-data-table-component";
import { Avatar, Input, Checkbox } from "antd";
import { Container } from "react-bootstrap";

const columns = [
  {
    name: "Coin",
    cell: (row) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar size={25} src={`/Images/Coin${row.id}.png`} />
          <img className="newpic11" src="new.png" alt="" />
          <p style={{ marginLeft: ".5rem", fontWeight: "normal" }}>
            {" "}
            {row.coin}
          </p>
        </div>
      );
    }
  },

  {
    name: "Est.APY",
    cell: (row) => {
      return (
        <div>
          <p style={{ color: "#0CB668" }}> {row.price}</p>
        </div>
      );
    }
  },
  {
    name: "Reward",
    cell: (row) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar size={25} src={`/Images/Coin${row.id}.png`} />
          <p style={{ marginLeft: ".5rem", fontWeight: "normal" }}>
            {" "}
            {row.hchng}
          </p>
        </div>
      );
    }
  },
  {
    name: "Days",
    cell: (row) => {
      return (
        <div>
          <p
            style={{
              border: "solid 1px #4B9A2A",
              padding: ".5rem",
              width: "5rem",
              textAlign: "center",
              borderRadius: ".5rem",
              fontWeight: "normal"
            }}
          >
            {" "}
            {row.hamount}
          </p>
        </div>
      );
    }
  },
  {
    name: "Action",
    cell: (row) => {
      return (
        <div>
          <p
            style={{
              border: "solid 1px #4B9A2A",
              padding: ".6rem",
              width: "8rem",
              textAlign: "center",
              backgroundColor: "#4B9A2A",
              color: "white",
              borderRadius: ".5rem",
              fontWeight: "normal"
            }}
          >
            {" "}
            {row.action}
          </p>
        </div>
      );
    }
  }
];
const data = [
  {
    id: 1,
    coin: "TR3",
    price: "60%",
    hchng: "TR3",
    hamount: "60",
    action: "Stake Now"
  },
  {
    id: 2,
    coin: "BTR",
    price: "505.35%",
    hchng: "BTR",
    hamount: "15",
    action: "Stake Now"
  },
  {
    id: 3,
    coin: "KIRO",
    price: "100%",
    hchng: "KIRO",
    hamount: "30",
    action: "Stake Now"
  },
  {
    id: 4,
    coin: "PROPEL",
    price: "110%",
    hchng: "PROPEL",
    hamount: "30",
    action: "Sold Out"
  },
  {
    id: 5,
    coin: "BTR",
    price: "2.39%",
    hchng: "BTR",
    hamount: "30",
    action: "Sold Out"
  },
  {
    id: 6,
    coin: "BTR",
    price: "65%",
    hchng: "BTR",
    hamount: "30",
    action: "Stake Now"
  },
  {
    id: 7,
    coin: "CX1",
    price: "120%",
    hchng: "CX1",
    hamount: "30",
    action: "Stake Now"
  },
  {
    id: 8,
    coin: "LEONIDAS",
    price: "120%",
    hchng: "LEONIDAS",
    hamount: "30",
    action: "Stake Now"
  },
  {
    id: 9,
    coin: "BTR",
    price: "150%",
    hchng: "BTR",
    hamount: "30",
    action: "Stake Now"
  },
  {
    id: 10,
    coin: "MSD",
    price: "80%",
    hchng: "MSD",
    hamount: "15",
    action: "Stake Now"
  },
  {
    id: 11,
    coin: "BTR",
    price: "100%",
    hchng: "BTR",
    hamount: "15",
    action: "Stake Now"
  },
  {
    id: 12,
    coin: "SMARTLOX",
    price: "34.88%",
    hchng: "SMARTLOX",
    hamount: "15",
    action: "Stake Now"
  },
  {
    id: 13,
    coin: "XDC",
    price: "30%",
    hchng: "XDC",
    hamount: "30",
    action: "Sold Out"
  },
  {
    id: 14,
    coin: "BTR",
    price: "48.95%",
    hchng: "BTR",
    hamount: "30",
    action: "Sold Out"
  },
  {
    id: 15,
    coin: "BTR",
    price: "52.71%",
    hchng: "BTR",
    hamount: "15",
    action: "Sold Out"
  }
];

function FarmTableCopmponent() {
  return (
    <div>
      <Container>
        <div className="subtable">
          <div className="searchbardiv11">
            <div>
              <h4 className="textfarm">Farming</h4>
            </div>
            <div>
              <img className="searchlogo" src="search.png" alt="" />
              <Input className="searcbar" placeholder="Search"></Input>
            </div>
            <div className="textfarm22">
              <Checkbox className="textfarm11">My Assests</Checkbox>
            </div>
          </div>
          <div>
            <DataTable
              fixedHeader
              fixedHeaderScrollHeight="500px"
              columns={columns}
              data={data}
            />
          </div>
          <div className="moredivbtn">
            <button className="morebtn">See More</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FarmTableCopmponent;
