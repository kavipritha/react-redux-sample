import {
  DEPOSITE_AMOUNT,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  WITHDRAW_AMOUNT,
} from '../action/bank'
import { combineReducers } from 'redux'

function bankReducer(state = { accountBalance: 100 }, action) {
  switch (action.type) {
    case WITHDRAW_AMOUNT:
      return {
        accountBalance: Number(state.accountBalance) - Number(action.amount),
      }
    case DEPOSITE_AMOUNT:
      return {
        accountBalance: Number(state.accountBalance) + Number(action.amount),
      }
    default:
      return state
  }
}

function loginReducer(
  state = {
    loading: false,
    data: [],
    error: null,
  },
  action,
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: "success",
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error,
      }

    default:
      return state
  }
}

export default combineReducers({ bankReducer, loginReducer })
