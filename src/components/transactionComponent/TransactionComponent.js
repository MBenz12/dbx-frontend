import React, { useState } from "react";
import "./style.css";
import {
  Menu,
  DatePicker,
  Dropdown,
  Button,
  message,
  Table,
  Tag,
  Drawer
} from "antd";
import { DownOutlined, UserOutlined, FilterOutlined } from "@ant-design/icons";
import moment from "moment";
const dateFormat = "YYYY/MM/DD";

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "Time",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "Coin",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Type",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Amount",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  }
];

const data = [];

function TransactionComponent() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="maindivofopenorders">
      <div className="displayflexofopenorders">
        <div className="displayflexofhistory">
          <h1>Transaction History</h1>
        </div>
      </div>

      {/* mobile menu of orders page start */}

      <div className="openordersmobile">
        <div className="displayflexofhistory388">
          <h1>Transaction History</h1>
        </div>
        <div>
          {" "}
          <Button
            onClick={showDrawer}
            style={{
              backgroundColor: "#4B9A2A",
              color: "white",
              border: "none"
            }}
          >
            <FilterOutlined style={{ fontSize: "2.2rem" }} />
          </Button>
        </div>
      </div>

      {/* mobile menu of orders page ending */}

      <div className="displayflexofopenorders">
        <div className="displayfehiihyi">
          <div>
            <p className="greycolormilja2233">Type</p>
            <Dropdown overlay={menu}>
              <Button className="backgroundkiyakian">
                Deposit <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div>
            <p className="greycolormilja2233">Coin:</p>
            <Dropdown overlay={menu}>
              <Button className="backgroundkiyakian">
                All <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div>
            <p className="greycolormilja2233">Start Date</p>
            <DatePicker
              defaultValue={moment("2022/01/06", dateFormat)}
              format={dateFormat}
            />
          </div>
          <div>
            <p className="greycolormilja2233">End Date</p>
            <DatePicker
              defaultValue={moment("2022/01/13", dateFormat)}
              format={dateFormat}
            />
          </div>
        </div>
        <div>
          <button className="searchbuttoncolor">Search</button>
        </div>
      </div>
      <div className="marginoftoptable44444">
        <Table
          className="tablestyling9911"
          columns={columns}
          dataSource={data}
        />
      </div>
      <Drawer
        title="Search Filters"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={250}
      >
        <div className="displayflexofopenorders22">
          <div className="displayfehiihyi22s">
            <div>
              <p className="greycolormilja2233">Type</p>
              <Dropdown overlay={menu}>
                <Button className="backgroundkiyakian">
                  Deposit <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div>
              <p className="greycolormilja2233">Coin:</p>
              <Dropdown overlay={menu}>
                <Button className="backgroundkiyakian">
                  All <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div>
              <p className="greycolormilja2233">Start Date</p>
              <DatePicker
                defaultValue={moment("2022/01/06", dateFormat)}
                format={dateFormat}
              />
            </div>
            <div>
              <p className="greycolormilja2233">End Date</p>
              <DatePicker
                defaultValue={moment("2022/01/13", dateFormat)}
                format={dateFormat}
              />
            </div>
          </div>
          <div>
            <button className="searchbuttoncolor">Search</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default TransactionComponent;
