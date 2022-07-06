import * as t from "./actionsTypes";

export const setLoginState = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_LOGIN_STATE,
    payload,
  });
};


export const connectWallet = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_WALLET_CONNECTED_STATE,
    payload,
  });
}

export const setModalOpen = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_MODAL_STATE,
    payload,
  });
}