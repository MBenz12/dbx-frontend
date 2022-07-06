import React from "react";
import "./style.css";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import { Layout, Menu, Row, Col } from "antd";
import { AimOutlined } from "@ant-design/icons";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import OpenOrders from "../../components/openOrdersComponents/OpenOrdersComponent";
import OpenOrdersHistoryComponent from "../../components/openOrderHistoryComponent/OpenorderHistory";
import OrderFarms from "../../components/ordersFarms/OrderFarms";
import PowerPiggy from "../../components/ordersPowerPiggy/OrdersPowerPiggy";
const { SubMenu } = Menu;
const { Sider } = Layout;

function Orders() {
  return (
    <div>
      <div className="maincomponentoforders">
        <Row justify="center">
          <Col className="iamfixingheight" lg={6}>
            <Sider className="siderclasses">
              <Menu
                mode="inline"
                className="siderheightwidth"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                width={200}
              >
                <SubMenu
                  key="sub1"
                  icon={<LayersOutlinedIcon />}
                  title="Orders"
                >
                  <Menu.Item key="1">
                    <Link to="/orders/openorders">Open Orders</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    {" "}
                    <Link to="/orders/openordershistory">Open History</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AimOutlined />} title="Investments">
                  <Menu.Item key="5">
                    {" "}
                    <Link to="/orders/farms">Farms</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/orders/powerpiggy">Power Piggy</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Col>
          <Col lg={18}>
            <div className="siderdivvvv">
              <Menu
                mode="inline"
                className="siderheightwidth33"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                width={200}
              >
                <SubMenu
                  key="sub1"
                  icon={<LayersOutlinedIcon />}
                  title="Orders"
                >
                  <Menu.Item key="1">
                    <Link to="/orders/openorders">Open Orders</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    {" "}
                    <Link to="/orders/openordershistory">Open History</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AimOutlined />} title="Investments">
                  <Menu.Item key="5">
                    {" "}
                    <Link to="/orders/farms">Farms</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/orders/powerpiggy">Power Piggy</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="/orders/openorders" />} />

              <Route path="/openorders" element={<OpenOrders />} />
              <Route
                path="/openordershistory"
                element={<OpenOrdersHistoryComponent />}
              />
              <Route path="/farms" element={<OrderFarms />} />
              <Route path="/powerpiggy" element={<PowerPiggy />} />
            </Routes>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}

export default Orders;
