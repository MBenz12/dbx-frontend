import * as React from 'react';
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

import XummLogo from './../../Images/XummLogo.png';
import LedgerLogo from './../../Images/LedgerLogo.png'
import DBXIcon from './../../Images/DBXIcon.png';
import XRPLLogo from './../../Images/XRPLLogo.png';
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

const SwapModal = (props) => {
    const { visibleModal, setVisibleModal } = props;

    const handleClose = () => {
        setVisibleModal(false);
    };
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={visibleModal}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <h2>Select a Token</h2>
                </BootstrapDialogTitle>
                <DialogContent style={{ minHeight: '300px', overflowX: 'hidden' }}>
                    <input className="tokenInput" placeholder="Search or Paste Token" />
                    <TokenButton>
                        <img src={DBXIcon} alt="" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-start',
                            }}>
                            <span style={{ fontSize: '12px' }}>DBX</span>
                            <span style={{ fontSize: '10px' }}>DBX Coin</span>
                        </div>
                    </TokenButton>
                    <TokenButton>
                        <img src={XRPLLogo} alt="" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-start',
                            }}>
                            <span style={{ fontSize: '12px' }}>XRP</span>
                            <span style={{ fontSize: '10px' }}>XRP</span>
                        </div>
                    </TokenButton>
                </DialogContent>
                <DialogActions>
                    <ActionButton autoFocus onClick={() => setVisibleModal(true)}>
                        <span style={{ fontSize: '18px', fontStyle: 'bold' }}>Manage Token List</span>
                    </ActionButton>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
};

export default SwapModal;