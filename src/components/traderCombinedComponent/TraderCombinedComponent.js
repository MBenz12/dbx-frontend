import React from "react";
import "./style.css";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
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
    name: "Amount",
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

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
function TraderCombinedComponent() {
  return (
    <div className="tradercompofirstDivoftradesexchange">
      <div className="displayflexoftradercomponent">
        <img className="menupic" src={"menu1.png"} />
        <img className="menupic" src={"menu2.png"} />
        <img className="menupic" src={"menu2.png"} />
        <h4 className="greycolormilja"> Combined</h4>
        <Dropdown overlay={menu} placement="bottomCenter">
          <Button className="decimal">
            5 Decimal <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <hr className="linediveoo1212" />

      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="5  00px"
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default TraderCombinedComponent;
