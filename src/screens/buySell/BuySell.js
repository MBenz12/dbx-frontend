import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";

function BuySell() {
  return (
    <div className="buyselmain">
      <div className="maindiv">
        <div>
          <h1 className="onestep">One Step Buy/Sell</h1>
          <br></br>
          <p className="buysell">Buy/Sell crypto currencies at your will</p>
        </div>
        <div className="group">
          <img className="group3img" src="greenstar.png" alt="" />
          <img className="groupimg111" src="Group.png" alt="" />
          <img className="group1img" src="Group (1).png" alt="" />
        </div>
      </div>
      <Container>
        <Row className="row222">
          <Col lg={3} md={5} xs={10} className="firstcol">
            <div>
              <img className="img7" src="image 7.png" alt="" />
            </div>
            <br></br>
            <br></br>
            <div>
              <h3 className="legend">Legend Trading</h3>
            </div>
            <br></br>
            <br></br>
            <div>
              <p
                className="cardtext111 greycolormilja"
                style={{ lineHeight: "2rem" }}
              >
                Low fee: trading fee as low as 0.08%, and no wire fee for ACH
                USD payments. International Wire Transfer: USD/EUR/GBP / HKD /
                SGD / AUD / CHF / MXN available.
              </p>
            </div>
            <br></br>
            <div>
              <button className="buybtn">Buy/Sell</button>
            </div>
          </Col>

          <Col lg={3} md={5} xs={10} className="firstcol">
            <div>
              <img className="img10" src="image 10.png" alt="" />
            </div>
            <br></br>
            <br></br>
            <div>
              <h3 className="legend">Credit Card- Simplex</h3>
            </div>
            <br></br>
            <br></br>
            <div>
              <p
                className="cardtext111 greycolormilja"
                style={{ lineHeight: "2rem" }}
              >
                Average 10-30 mins for cryptocurrency to reach your wallet
                Convenient: Visa and MasterCard accepted VISA O Pay
              </p>
            </div>
            <br></br>
            <div>
              <button className="buybtn">Buy</button>
            </div>
          </Col>

          <Col lg={3} md={5} xs={10} className="firstcol">
            <div>
              <img className="img10" src="image 11.png" alt="" />
            </div>
            <br></br>
            <br></br>
            <div>
              <h3 className="legend">Trust Token</h3>
            </div>
            <br></br>
            <br></br>
            <div>
              <p
                className="cardtext111 greycolormilja"
                style={{ lineHeight: "2rem" }}
              >
                Real-time proof of funds in an escrowed bank account. Available
                on 70+ exchanges, 160+ markets and 20+ OTC desks over 5
                continents
              </p>
            </div>
            <br></br>
            <div>
              <button className="buybtn">Buy/Sell</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuySell;
