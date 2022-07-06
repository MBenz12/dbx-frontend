import React from "react";
import { Routes, Route } from "react-router-dom";
import LandindPage from "../../screens/landingPage/LandingPage";
import Swap from "../../screens/swap/Swap";
import BuySell from "../../screens/buySell/BuySell";
import Earn from "../../screens/earn/Earn";
import EarnOne from "../../screens/earnone/EarnOne";
import StakeBtr from "../../screens/stakeBtr/StakeBtr";
import StakeBtrOne from "../../screens/stakeBtrOne/StakeBtrOne";
import NftHome from "../../screens/nftHome/nftHome";
import Orders from "../../screens/orders/Orders";
import Assets from "../../screens/assets/Assets";
import Exchange from "../../screens/exchange/Exchange";
import Navbar1Component from "../navbar1Component/Nabra1Component";
import Navbar2Component from "../navbar2Component/Navbar2Component";
import FooterComponent from "../footerComponent/FooterComponent";


import { useSelector } from 'react-redux';

function RouterComponent() {
  const isWalletConnected = useSelector(state => state.authReducer.isWalletConnected);
  return (
    <div>
      {isWalletConnected ? (
        <Navbar2Component />
      ) : (
        <Navbar1Component />
      )}
      <Routes>
        <Route path="/" element={<LandindPage />} />
        <Route path="/buysell" element={<BuySell />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/cryto" element={<EarnOne />} />
        <Route path="/stakebtr" element={<StakeBtr />} />
        <Route path="/stakebtrone" element={<StakeBtrOne />} />
        <Route path="/nft" element={<NftHome />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/orders/*" element={<Orders />} />
        <Route path="/assets/*" element={<Assets />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default RouterComponent;
