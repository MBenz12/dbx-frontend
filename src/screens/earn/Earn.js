import React from 'react';
import "./style.css"
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import FarmingCompoent from '../../components/farmingComponent/FarmingCompoent';
import FooterComponent from "../../components/footerComponent/FooterComponent";
import FarmTableCopmponent from '../../components/farmtableCopmponent/FarmTableCopmponent';
import FAQComponent from '../../components/faqComponent/FAQComponent';


function Earn() {
    return (
        <div>
            <FarmingCompoent/>
            <FarmTableCopmponent/>
            <FAQComponent/>
        </div>
    )
}

export default Earn
