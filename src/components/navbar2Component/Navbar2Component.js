import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import DBX from "../../Images/DBX.png";

function Navbar1Component() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Mainnav">
        <Container fluid>
          <Link to="/">
            {" "}
            <Navbar.Brand href="#home">
              <img src={DBX} alt="" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-auto">
              <Link to="/">
                {" "}
                <Nav.Link href="#features" className="navtext">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/buysell">
                {" "}
                <Nav.Link href="#pricing" className="navtext">
                  Buy/Sell
                </Nav.Link>
              </Link>
              <Link to="/exchange">
                <Nav.Link href="#pricing" className="navtext">
                  Exchange
                </Nav.Link>
              </Link>
              <Link to="/swap">
                {" "}
                <Nav.Link href="#pricing" className="navtext">
                  Swap
                </Nav.Link>
              </Link>
              <Link to="/nft">
                <Nav.Link href="#pricing" className="navtext">
                  NFT Home
                </Nav.Link>
              </Link>

              <NavDropdown title="Earn" id="collasible-nav-dropdown">
                <Link to="/earn">
                  <NavDropdown.Item href="#action/3.1">Earn</NavDropdown.Item>
                </Link>
                <Link to="/cryto">
                  <NavDropdown.Item href="#action/3.2">Cryto</NavDropdown.Item>
                </Link>
                <Link to="/stakebtr">
                  <NavDropdown.Item href="#action/3.3">
                    Stakebtr
                  </NavDropdown.Item>
                </Link>
                <Link to="/stakebtrone">
                  <NavDropdown.Item href="#action/3.4">
                    StakeBtrOne
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Order" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/orders/openorders">Spot Orders</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/orders/farms">Investments</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Assets" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/assets/overview">Overview</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav   className="mainbtnn">
              <Nav.Link href="#deets" className="mainbtn">
              <div>
                <img style={{marginLeft: "-.5rem", width: "2.5rem"}} src="XRPL.png" alt=""/>
                </div>
                <div>
                <p className="xpr">XRP Ledger</p>
                </div>
                <div>
                <img style={{marginLeft: ".5rem"}} src="drop.png" alt=""/>
                </div>
                
              </Nav.Link>
             
          
            <Nav.Link href="#deets" className="mainbtn">
            <div>
            <p className="xpr1">180.564295</p>

              </div>
              <div>
              <p className="xpr1">XRP</p>
              </div>
              <div className="xpr33">
              <p style={{marginTop: ".5rem"}}>r3rhW...w96W</p>

              </div>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1Component;
 