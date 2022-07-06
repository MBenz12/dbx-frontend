import React from 'react';
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import StakeBtrOneComponent from '../../components/stakebtroneComponent/StakeBtrOneComponent';
import FooterComponent from "../../components/footerComponent/FooterComponent";
import MyRewardComponent from '../../components/myrewardComponent/MyRewardComponent';
import RewardOneComponent from '../../components/rewardoneComponent/RewardOneComponent';
import RewardTwoComponent from "../../components/rewardTwoComponent/RewardTwoComponent";
import RewardThreeComponent from '../../components/rewardThreeComponent/RewardThreeComponent';

function StakeBtrOne() {
    return (
        <div>
            <StakeBtrOneComponent/>
            <MyRewardComponent/>
            <RewardOneComponent/>
            <RewardTwoComponent/>
            <RewardThreeComponent/>
        </div>
    )
}

export default StakeBtrOne
