import React from 'react';
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import StakeBtrComponent from "../../components/stakebtrComponent/StakeBtrComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import MyInvestComponent from '../../components/myinvestComponent/MyInvestmentComponent';
import StakeTableComponent from '../../components/staketableComponent/StakeTableComponent';
function StakeBtr() {
    return (
        <div>
        <StakeBtrComponent/>
        <MyInvestComponent/>
        <StakeTableComponent/>
            
        </div>
    )
}

export default StakeBtr
