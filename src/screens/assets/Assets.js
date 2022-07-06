import React from "react";
import "./style.css";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import { Layout, Menu, Row, Col } from "antd";
import { AimOutlined } from "@ant-design/icons";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Overview from "../../components/assetComponent/AssetComponent";
import MyAssetComponent from "../../components/myassetComponent/MyAssetComponent";
import DepositOneComponent from "../../components/depositoneComponent/DepositOneComponent";
import WithdrawOneComponent from "../../components/withdrawOneComponent/WithdrawOneComponent";
import TransactionComponent from "../../components/transactionComponent/TransactionComponent";
const { SubMenu } = Menu;
const { Sider } = Layout;

function Assets() {
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
                  title="Overview"
                >
                  <Menu.Item key="1">
                    <Link to="/assets/overview">Overview</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AimOutlined />} title="Spot">
                  <Menu.Item key="5">
                    {" "}
                    <Link to="/assets/myasset">My Assets</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/assets/depositeOne">Deposit</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/assets/withdrawOne">Withdraw</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/assets/transaction">Transaction Record</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Col>
          <Col lg={18}>
            <div className="siderdivvvv2">
              <Menu
                mode="inline"
                className="siderheightwidth44"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                width={200}
              >
                <SubMenu
                  key="sub1"
                  icon={<LayersOutlinedIcon />}
                  title="Overview"
                >
                  <Menu.Item key="1">
                    <Link to="/assets/overview">Overview</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AimOutlined />} title="Spot">
                  <Menu.Item key="5">
                    {" "}
                    <Link to="/assets/myasset">My Assets</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/assets/depositeOne">Deposit</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/assets/withdrawOne">Withdraw</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/assets/transaction">Transaction Record</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="/assets/overview" />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/myasset" element={<MyAssetComponent />} />
              <Route path="/depositeOne" element={<DepositOneComponent />} />
              <Route path="/withdrawOne" element={<WithdrawOneComponent />} />
              <Route path="/transaction" element={<TransactionComponent />} />
            </Routes>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default Assets;
