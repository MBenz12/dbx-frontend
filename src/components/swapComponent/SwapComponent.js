import React from "react";
import "./style.css";
import { Card } from "antd";
import { Container } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Input } from "antd";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ClearIcon from '@mui/icons-material/Clear';
import SwapModal from './SwapModal'

import GreenCheck from '../../Images/green-check.png';
import GreenResize from '../../Images/green-resize.png';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import XummLogo from './../../Images/XummLogo.png';
import LedgerLogo from './../../Images/LedgerLogo.png'

import { setModalOpen, connectWallet } from '../../redux/actions';

import { useSelector, useDispatch } from 'react-redux';

const MethodButton = styled(Button)({
  backgroundColor: '#E7E8EA4D',
  border: '1px solid #E7E8EA4D',
  color: '#000',
  width: '100%',
  margin: '5px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  height: '56px',
});


const ActionButton = styled(Button)({
  background: 'linear-gradient(to right, #A7D63FE5, #39B54A, #9FD340)',
  border: 'none',
  color: '#fff',
  width: '100%',
  margin: '5px',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  height: '56px',
  borderRadius: '12px',
});



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: '373px',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    width: '373px',
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const NotificationDiv = styled(Snackbar)({
  backgroundColor: '#F5F5F5',
  color: '#000',
  fontSize: '14px',
  borderRadius: '12px',
  border: '1px solid #39B54A',
})


const ethBalance = 20.3647364;
const dbxBalance = 19.3647364;


function SwapComponent() {
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);
  const [approve, setApprove] = React.useState(true);
  const [ethAmount, setEthAmount] = React.useState(0);
  const [dbxAmount, setDbxAmount] = React.useState(0);

  const connectModalVisible = useSelector(state => state.authReducer.isModalOpen);
  const walletConnected = useSelector(state => state.authReducer.isWalletConnected);


  const handleClose = () => {
    dispatch(setModalOpen(false))
  };

  const swapDone = () => {
    setApprove(true);
    setShowNotification(true);
  }

  const renderButton = () => {
    if (!walletConnected) {
      return (
        <button className="buttonn" onClick={() => dispatch(setModalOpen(true))}>
          <span>Connect to a wallet</span>
        </button>
      )
    }
    if (approve) {
      return (
        <button className="buttonn" onClick={() => setApprove(false)}>
          <span>Approve</span>
        </button>
      )
    }

    return (
      <button className="buttonn" onClick={() => swapDone()}>
        <span>Swap</span>
      </button>
    )


  }

  return (
    <div>
      <div className="main">
        <div className="mains">
          <div>
            <Card className="card1" bordered={false}  >
              <Container className="cont">
                <div className="div1s">
                  <div>
                    {" "}
                    <img style={{ width: "5rem" }} src="/assets/images/img1.png" alt="" />
                  </div>
                  <h6 className="h66">
                    Swap From:
                    <br />
                    <span className="h666">ETH</span>
                  </h6>
                </div>{" "}
                <div className="down">
                  <a onClick={() => setVisibleModal(true)} >
                    {" "}
                    <DownOutlined />
                  </a>
                </div>
              </Container>{" "}
              <Container>
                <Input className="inpu " type="number" placeholder="Swap amount" value={ethAmount} onChange={(e) => setEthAmount(parseFloat(e.target.value))} />
                {walletConnected && (<span style={{ marginLeft: ".5rem", fontWeight: "normal", opacity: '0.5' }}>&nbsp;&nbsp;Balance: {ethBalance} ETH</span>)}
              </Container>
            </Card>
          </div>
          <div className="imgggg">
            <img style={{ width: "6rem" }} src="/assets/images/img2.png" alt="" />
          </div>
          <div>
            <Card className="card1" bordered={false}  >
              <Container className="cont">
                <div className="div1s">
                  <div>
                    {" "}
                    <img style={{ width: "5rem" }} src={require('../../Images/DBXIcon.png')} alt="" />
                  </div>
                  <h6 className="h66">
                    Swap To:
                    <br />
                    <span className="h666">DBX</span>
                  </h6>
                </div>{" "}
                <div className="down">
                  <a onClick={() => setVisibleModal(true)} >
                    {" "}
                    <DownOutlined />
                  </a>
                </div>
              </Container>{" "}
              <Container>
                <Input className="inpu " type="number" placeholder="Swap amount" value={dbxAmount} onChange={(e) => setDbxAmount(parseFloat(e.target.value))} />
                {walletConnected && (<span style={{ marginLeft: ".5rem", fontWeight: "normal", opacity: '0.5' }}>&nbsp;&nbsp;Balance: {dbxBalance} DBX</span>)}
              </Container>
            </Card>
          </div>
        </div>
      </div>
      {
        walletConnected ? (
          <Container className="exchange-div">
            <div className="exchange-div-inner">
              <span className="exchange-span1">Exchange Rate</span>
              <span className="exchange-span2">1 DBX = 0.0947 ETH <CompareArrowsIcon style={{ color: '#8F8F80' }} /></span>
            </div>
          </Container>
        ) : null
      }

      <div>
        <div className="div333">
          {" "}
          {(ethAmount > ethBalance || dbxAmount > dbxBalance) ? <button className="insuff-button">Insufficient Balance</button>
            : renderButton()}
        </div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={connectModalVisible}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            <h2>Select Wallet</h2>
          </BootstrapDialogTitle>
          <DialogContent style={{ minHeight: '300px', overflowX: 'hidden' }}>
            <p style={{ color: '#8F8F80', fontSize: '12px' }}>Connect your wallet using one of the following methods:</p>
            <MethodButton onClick={() => dispatch(connectWallet(true))}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: '60%'
              }}>
                <img src={XummLogo} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                <span style={{ fontSize: '18px', fontStyle: 'bold' }}>XUMM App</span>
              </div>
            </MethodButton>
            <MethodButton onClick={() => dispatch(connectWallet(true))}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: '60%'
              }}>
                <img src={LedgerLogo} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                <span style={{ fontSize: '18px', fontStyle: 'bold' }}>Ledger Device</span>
              </div>
              <span style={{ fontSize: '12px', fontStyle: 'bold', color: 'red', textAlign: 'right', width: '100%' }}> Coming soon</span>
            </MethodButton>
          </DialogContent>
          <DialogActions>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '100%'
              }}
            >
              <span style={{ color: '#8F8F80', fontSize: '12px' }}>Don’t have a wallet?</span>
              <ActionButton autoFocus onClick={handleClose}>
                <span style={{ fontSize: '18px', fontStyle: 'bold' }}>Create New Wallet</span>
                <span style={{ fontSize: '12px', fontStyle: 'bold', color: 'red', textAlign: 'right', width: '100%' }}> Coming soon</span>
              </ActionButton>
            </div>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <NotificationDiv
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={showNotification}
        autoHideDuration={5000}
        onClose={() => setShowNotification(false)}
        key={'top right'}
      >
        <div className="notification-div">
          <img src={GreenCheck} alt="" style={{ width: '30px', height: '30px' }} />
          <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
            <div><b>Swap 0.097 ETH for 1.022 DBX</b></div>
            <div>
              View on explorer <img src={GreenResize} alt="" style={{ width: '15px', height: '15px' }} />
            </div>
          </div>
          <ClearIcon style={{ color: '#8F8F80' }} />
        </div>
      </NotificationDiv>
      <SwapModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
    </div >
  );
}

export default SwapComponent;
