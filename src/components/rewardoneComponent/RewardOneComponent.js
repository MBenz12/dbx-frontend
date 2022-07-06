import { Col, Row, Input,Slider} from 'antd';
import React from 'react';
import "./style.css";


function RewardOneComponent() {
    return (
        <div className='MainRewardone'>
            <Row justify="space-around">
            <Col xs={24} md={10} lg={10}>
            <div className="colmaindiv">
            <div className='mainusdtdiv'>
            <div style={{display: "flex"}}>
            <div>
            <img className='ttpicc' src="tt.png" alt=''/>
            </div>
            <div>
            <p className='us'>USDT</p>
            </div>
            </div>
            <hr/>
            <div className='percentdiv'>
            <div>
            <p className='perecnttext'>22%</p>
            <p className='perecnttext1'>USDT APR</p>
            </div>
            <div>
            <p className='perecnttext'>7.3%</p>
            <p className='perecnttext1'>BTR APR</p>
            </div>
            <div>
            <p className='perecnttext'>30 Days</p>
            <p className='perecnttext1'>Lock-up Period</p>
            </div>
            <div>
            <p className='perecnttext'>100 USDT</p>
            <p className='perecnttext1'>Minimum Investment Amount</p>
            </div>
            </div>
            <div className='Unfreezediv'>
            <button className="Unfreezebtn">Unfreeze</button>
            </div>
            </div>
            </div> 
            </Col>
            <Col xs={24} md={8} lg={8}>
            <div className="colmaindiv1">
            <div className="caldiv">
            <h3>Calculator</h3>
            <div style={{marginTop: "1rem"}}>
            <Input className='inputbtr' placeholder="Please enter the BTR amount"></Input>
            </div>
            <div style={{marginTop: "1.5rem"}}>
            <h5>USDT investment amount O USDT</h5>
            <Slider defaultValue={30}  />
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div>
            <p>O BTR</p>
            </div>
            <div>
            <p>1,000,000 BTR</p>
            </div>
            </div>
            </div>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default RewardOneComponent
