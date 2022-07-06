import React from "react";
import "./style.css";
import DepositComponent from "../depositComponent/DepositComponent";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Arrow from "../../Images/arrow.png";
import Qm from "../../Images/qm.png";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function DepositOneComponent() {
  return (
    <div className="maindivofopenorders124">
      <div>
        <h1>Deposit</h1>
      </div>
      <div>
        <p>Coin:</p>
      </div>
      <div>
        <Dropdown overlay={menu} className="dropdiv">
          <p className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Enter coin keyword <DownOutlined />
          </p>
        </Dropdown>
      </div>
      <div className="myassetsearch66">
        <div>
          <h4 className="depptext">Deposit History ( Last 5 )</h4>
        </div>
        <div className="depodivvvv">
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <p className="deptext">Deposit didn’t receive</p>
              </div>
              <div>
                <img
                  style={{ width: "1.5rem", marginLeft: ".5rem" }}
                  src={Qm}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <p className="myassetext33">View All </p>
              </div>
              <div>
                <img
                  style={{
                    width: ".6rem",
                    marginLeft: ".5rem",
                    marginTop: ".7rem"
                  }}
                  src={Arrow}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DepositComponent />
      </div>
    </div>
  );
}

export default DepositOneComponent;
