import React from "react";
import "./style.css";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Price(USDT)",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Vol(XRP)",
    selector: (row) => row.year,
    center: true,
  },
  {
    name: "Time",
    center: true,

    cell: (row) => {
      return (
        <div>
          {row.stat > 0 ? (
            <p className="colorisgreen">{row.stat}</p>
          ) : (
            <p className="colorisred">{row.stat}</p>
          )}
        </div>
      );
    },
    sortable: true,
    right: true,
  },
];

const data = [
  {
    id: 1,
    title: "BTR/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "BTR/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "BTR/USDT",
    year: "1984",
    stat: "22.45",
  },
  {
    id: 1,
    title: "BTR/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "BTR/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "BTR/USDT",
    year: "1984",
    stat: "22.45",
  },
  {
    id: 1,
    title: "BTR/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "BTR/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "ETH/USDT",
    year: "1984",
    stat: "22.45",
  },
  {
    id: 1,
    title: "ETH/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "ETH/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "ETH/USDT",
    year: "1984",
    stat: "22.45",
  },
];

function TraderComponents() {
  return (
    <div className="firstDivoftradesexchange">
      <h3>Traders</h3>
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="5  00px"
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default TraderComponents;
