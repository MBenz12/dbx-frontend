import React from "react";
import "./style.css";
import ExchangeRatesComponent from "../../components/exchangeRatesComponent/ExchangeRatesComponent";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import GraphComponent from "../../components/graphComponent/GraphComponent";
import TraderComponents from "../../components/tradersComponents/TraderComponents";
import TraderCombinedComponent from "../../components/traderCombinedComponent/TraderCombinedComponent";
import ExchangeTale from "../../components/exchangeTable/ExchangeTale";
import { Row, Col } from "antd";

function Exchange() {
  return (
    <div>
      <div className="wholediveofratesexchange">
        <Row justify="center" gutter={16}>
          <Col lg={7} xs={20} md={20}>
            <ExchangeRatesComponent />
            <TraderComponents />
          </Col>
          <Col className="graphresponsive" lg={10} xs={20} md={20}>
            <GraphComponent />
          </Col>
          <Col className="graphresponsive" lg={7} xs={20} md={20}>
            <TraderCombinedComponent />
          </Col>
        </Row>
        <ExchangeTale />
      </div>

    </div>
  );
}

export default Exchange;
