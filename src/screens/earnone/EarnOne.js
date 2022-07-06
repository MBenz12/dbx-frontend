import React from 'react'
import FooterComponent from '../../components/footerComponent/FooterComponent'
import InvestmentComponent from '../../components/investmentComponent/InvestmentComponent'
import InvestTableComponent from '../../components/investtableComponent/InvestTableComponent'
import InvestTableComponentOne from '../../components/investtableComponentsone/InvestTableComponentOne'
import NavbarComponent from '../../components/navbarComponent/NavbarComponent'

function EarnOne() {
    return (
        <div>
            <InvestmentComponent/>
            <InvestTableComponent/>
            <InvestTableComponentOne/>
        </div>
    )
} 

export default EarnOne
