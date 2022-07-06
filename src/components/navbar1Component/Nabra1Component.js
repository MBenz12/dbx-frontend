import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import DBX from "../../Images/DBX.png";

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

import XummLogo from './../../Images/XummLogo.png';
import LedgerLogo from './../../Images/LedgerLogo.png'

import { setModalOpen } from '../../redux/actions';

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


const TokenButton = styled(Button)({
  backgroundColor: '#E7E8EA4D',
  border: '1px solid #E7E8EA4D',
  color: '#000',
  width: '100%',
  margin: '5px',
  padding: '0px 20px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  height: '56px',
});

const InsufficientBalanceButton = styled(Button)({
  backgroundColor: '#E7E8EA4D',
  border: 'none',
  color: '#000',
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
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
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


function Navbar1Component() {
  const dispatch = useDispatch()
  const [visible, setVisible] = React.useState(false);

  const handleClickOpen = () => {
    dispatch(setModalOpen(true));
  };
  const handleClose = () => {
    // setWalletConnected(false);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Mainnav">
        <Container>
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
            <Nav onClick={() => handleClickOpen()} >
              <Nav.Link href="#deets" className="navbtn1">
                Connect Wallet
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default Navbar1Component;
