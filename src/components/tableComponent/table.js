import React from "react";
import "./table.css";
import { Button } from "antd";
import { Container } from "react-bootstrap";
import FarmTableCopmponent from "./table1";

function Tables() {
  return (
    <div>
      <div className="maindivtbl">
        <div className="divtbl">
          <div className="divtbll">
            <Button type="primary" className="btntbl">
              Rising Market
            </Button>
            <h4 className="decl">Decline market</h4>
          </div>
        </div>
      </div>
      <Container>
        <br></br>
        <br></br>
        <FarmTableCopmponent />
      </Container>
    </div>
  );
}

export default Tables;
