import React from "react";
import "./style.css";
import { Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DataTable from "react-data-table-component";

const { TabPane } = Tabs;

const columns = [
  {
    name: "Pair",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.year,
    center: true,
  },
  {
    name: "24h Chg",
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
function ExchangeRatesComponent() {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="firstDivofrates">
      <Input
        className="inputofsearchbarofexchange"
        placeholder="Search"
        prefix={<SearchOutlined />}
      />
      <Tabs
        centered={true}
        className="tabsofexchangerates"
        defaultActiveKey="1"
        onChange={callback}
        style={{ width: "100%" }}
      >
        <TabPane tab="BTC" key="1">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />
        </TabPane>
        <TabPane tab="USDT" key="2">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
        <TabPane tab="USDC" key="3">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
        <TabPane tab="ALTS" key="4">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
        <TabPane tab="ETF" key="5">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ExchangeRatesComponent;
