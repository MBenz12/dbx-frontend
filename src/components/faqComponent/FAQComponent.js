import React from "react";
import "./style.css";
import { Collapse } from "antd";
import { PlusOutlined   } from '@ant-design/icons';

const { Panel } = Collapse;

function FAQComponent() {
  return (
    <div  className="mainfaq">
      <div>
        <h1 className="faqtext">Frequently Asked Question</h1>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <Collapse     expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0} />}

          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",
            marginTop: ".5rem",
            marginBottom: "1rem",
            color: "#0B1025"
          }}
          defaultActiveKey={["0"]}
        >
          <Panel
            className="frametext"
            header="What's the investment timeframe? "
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">
                    What's the investment timeframe?
                  </h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0}/>}
          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",

            marginTop: ".5rem",
            marginBottom: "1rem"
          }}
          defaultActiveKey={["0"]}
        >
          
          <Panel
            className="frametext"
            header="When does the investment get redeemed? "
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">
                    When does the investment get redeemed?
                  </h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0}/>}
          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",

            marginTop: ".5rem",
            marginBottom: "1rem"
          }}
          defaultActiveKey={["0"]}
        >
          <Panel className="frametext" header="Can I redeem early? " key="1">
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">Can I redeem early?</h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0}/>}
          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",

            marginTop: ".5rem",
            marginBottom: "1rem"
          }}
          defaultActiveKey={["0"]}
        >
          <Panel
            className="frametext"
            header="Why does the APY change?"
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">Why does the APY change?</h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0}/>}
          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",

            marginTop: ".5rem",
            marginBottom: "1rem"
          }}
          defaultActiveKey={["0"]}
        >
          <Panel
            className="frametext"
            header="Am I eligible to invest in Yield Farming?"
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">
                    Am I eligible to invest in Yield Farming?
                  </h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0}/>}
          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",
            marginTop: ".5rem",
            marginBottom: "1rem"
          }}
          defaultActiveKey={["0"]}
        >
          <Panel
            className="frametext"
            header="Is there any risk in investing? "
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">Is there any risk in investing?</h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse expandIcon={({ isActive }) => <PlusOutlined  style={{fontSize:'2.4rem'}} rotate={isActive ? 90 : 0}/>}
          className="collapsediv"
          style={{
            backgroundColor: "#F3F3F3",

            marginTop: ".5rem",
            marginBottom: "1rem"
          }}
          defaultActiveKey={["0"]}
        >
          <Panel
            className="frametext"
            header="Will there be any changes in the conditions of the related activities?"
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <img className="minuslogo" src="minus.png" alt="" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div>
                  <h1 className="paneltext">
                    Will there be any changes in the conditions of the related
                    activities?
                  </h1>
                </div>
                <p className="paneltext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  volutpat enim id nunc, nec
                  <br /> ante eu, gravida aliquet. Ut mi mattis blandit vel
                  viverra at lectus. Turpis aenean sed
                  <br /> convallis sed ipsum.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default FAQComponent;
