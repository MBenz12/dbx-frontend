import React , { useState }  from "react";
import "./style.css";
import { Link } from "react-router-dom";

import {
  Menu,
  DatePicker,
  Dropdown,
  Button,
  message,
  Table,
  Tag, 
  Drawer,
} from "antd";
import {
  DownOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  FilterOutlined 
} from "@ant-design/icons";
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
    title: "Order No",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Currency",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Amount",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Redemption Time",
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
    title: "Est. Arrival Time",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Est. Return",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
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
      <div className="displayflexofopenorders11">
        <div className="displayflexofhistory">
          <h1>History</h1>
          <QuestionCircleOutlined className="questionmarkofantdicon" />
        </div>

        {/* mobile menu of orders page start */}

        <div className="openordersmobile3355">
        <div>
        <div className="displayflexofhistory22">
        <div>
        <h1>History</h1>
        </div>
        <div>
        <QuestionCircleOutlined className="questionmarkofantdicon" />
        </div>
      </div>
      </div>
      <div>
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
          </div>
          <div>
    <Link to="/assets/overview"><h4 className="linktoviwallassets22">View All Assets</h4></Link>
        </div>
          </div>
          
        </div>
      
        {/* mobile menu of orders page ending */}

        <div>
        <Link to="/assets/overview"><h4 className="linktoviwallassets">View All Assets</h4></Link>
        </div>
      </div>
      <div className="displayflexofopenorders">
        <div className="displayfehiihyi">
          <div>
            <p className="greycolormilja2233">Currency</p>
            <Dropdown overlay={menu}>
              <Button className="backgroundkiyakian">
                All <DownOutlined />
              </Button>
            </Dropdown>
          </div>
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
        </div>
        <div>
          <button className="searchbuttoncolor">Search</button>
        </div>
      </div>
      <div className="marginoftoptable">
        <Table className="tablestyling" columns={columns} dataSource={data} />
      </div>
      <Drawer
      title="Search Filters"
      placement="right"
      onClose={onClose}
      visible={visible}
      width={250}
    >
    <div className="displayflexofopenorders22">
    <div className="displayfehiihyi11">
      <div>
        <p className="greycolormilja2233">Currency</p>
        <Dropdown overlay={menu}>
          <Button className="backgroundkiyakian22">
            All <DownOutlined />
          </Button>
        </Dropdown>
      </div>
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
    </div>
    <div >
      <button className="searchbuttoncolor">Search</button>
    </div>
  </div>
    </Drawer>
    </div>
  );
}

export default OpenOrdersHistoryComponent;
