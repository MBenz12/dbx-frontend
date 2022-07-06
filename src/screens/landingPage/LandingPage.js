import React from "react";
import ConductComponent from "../../components/conductComponent/ConductComponent";
import CryptoComponent from "../../components/crypto-component/CryptoComponent";
import HourComponent from "../../components/hourComponent/HourComponent";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import TradingComponent from "../../components/tradingComponent/TradingComponent";
import AccountComponent from "../../components/accountComponent/AccountComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import "./style.css";
import Analytics from "../../components/analyticsComponent/analytics";
import Tables from "../../components/tableComponent/table1";
function LandingPage() {
  return (
    <div>
      <CryptoComponent />
      <Analytics />
      <Tables />
      <TradingComponent />
      <HourComponent />
      <ConductComponent />
      <AccountComponent />
    </div>
  );
}

export default LandingPage;
