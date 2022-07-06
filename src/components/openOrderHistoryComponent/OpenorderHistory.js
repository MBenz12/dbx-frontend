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
  Checkbox,
  Drawer,
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
    title: "Date",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Pair",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Type",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Side",
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
    ),
  },
  {
    title: "Price",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Amount",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Filled",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Filled%",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Total",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Trigger Rule",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "address",
    key: "address",
  },
];

const data = [];

function OpenOrdersHistoryComponent() {
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
        <div>
          <h1>Orders History</h1>
        </div>
        <div>
          <h1>
            <Checkbox onChange={onChange}>Hide All Cancelled</Checkbox>
          </h1>
        </div>
      </div>
      {/* mobile menu of orders page start */}

      <div className="openordersmobile">
        <div>
          <h1>Orders History</h1>
        </div>
        <div>
          {" "}
          <Button
            onClick={showDrawer}
            style={{
              backgroundColor: "#4B9A2A",
              color: "white",
              border: "none",
            }}
          >
            <FilterOutlined style={{ fontSize: "2.2rem" }} />
          </Button>
          <h1 style={{ marginLeft: "-14rem" }}>
            <Checkbox onChange={onChange}>Hide All Cancelled</Checkbox>
          </h1>
        </div>
      </div>

      {/* mobile menu of orders page ending */}
      <div className="displayflexofopenorders">
        <div>
          <p className="greycolormilja2233">Start Date</p>
          <DatePicker
            defaultValue={moment("2015/01/01", dateFormat)}
            format={dateFormat}
          />
        </div>
        <div>
          <p className="greycolormilja2233">End Date</p>
          <DatePicker
            defaultValue={moment("2015/01/01", dateFormat)}
            format={dateFormat}
          />
        </div>
        <div>
          <p className="greycolormilja2233">Pair</p>
          <Dropdown overlay={menu}>
            <Button className="backgroundkiyakian">
              All <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="slashdiv">/</div>
        <div className="allbuttondiv">
          <Dropdown overlay={menu}>
            <Button className="backgroundkiyakian">
              All <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div> 
          <p className="greycolormilja2233">Type</p>

          <Dropdown overlay={menu}>
            <Button className="backgroundkiyakian">
              All <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div>
          <p className="greycolormilja2233">Side:</p>

          <Dropdown overlay={menu}>
            <Button className="backgroundkiyakian">
              All <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div>
          <button className="searchbuttoncolor">Search</button>
        </div>
      </div>
      <div className="marginoftoptable">
        <Table className="tablestyling" columns={columns} dataSource={data} />
      </div>
      <div className="notedowndiv">
        <p>NOTE: </p>
        <span>
          Date range cannot cross through 2021 -09-27. Please only search for a
          range that is either completely before or completely after this date.
        </span>
      </div>
      <Drawer
        title="Search Filters"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={250}
      >
        <div className="displayflexofopenorders1122">
          <div>
            <p className="greycolormilja2233">Start Date</p>
            <DatePicker
              defaultValue={moment("2015/01/01", dateFormat)}
              format={dateFormat}
            />
          </div>
          <div>
            <p className="greycolormilja2233">End Date</p>
            <DatePicker
              defaultValue={moment("2015/01/01", dateFormat)}
              format={dateFormat}
            />
          </div>
          <div className="displayflexofmobileviwwww">
            <div>
              <p className="greycolormilja2233">Pair</p>
              <Dropdown overlay={menu}>
                <Button className="backgroundkiyakian">
                  All <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className="slashdiv">/</div>
            <div className="allbuttondiv">
              <Dropdown overlay={menu}>
                <Button className="backgroundkiyakian">
                  All <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
          <div className="displayflexofmobileviwwww">
            <div>
              <p className="greycolormilja2233">Type</p>

              <Dropdown overlay={menu}>
                <Button className="backgroundkiyakian">
                  All <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div>
              <p className="greycolormilja2233">Side:</p>

              <Dropdown overlay={menu}>
                <Button className="backgroundkiyakian">
                  All <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>

          <div className="searchbuttonasasa">
            <button className="searchbuttoncolor">Search</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default OpenOrdersHistoryComponent;
