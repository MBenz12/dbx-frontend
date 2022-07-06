import * as t from "../actionsTypes";

const initState = {
  isLoggedIn: false,
  isWalletConnected: false,
  isModalOpen: false,
};

export default function authReducer(state = initState, action) {
  console.log("authReducer", action);
  switch (action.type) {
    case t.SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: action.payload, // we set this as true on login
      };
    case t.SET_WALLET_CONNECTED_STATE:
      return {
        ...state,
        isWalletConnected: action.payload, // we set this as true on connect
        isModalOpen: false
      };
    case t.SET_MODAL_STATE:
      return {
        ...state,
        isModalOpen: action.payload, // we set this as true on open
      };

    default:
      return state;
  }
}
