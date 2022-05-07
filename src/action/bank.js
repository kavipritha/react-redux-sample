import axios from 'axios'

export const WITHDRAW_AMOUNT = 'WITHDRAW_AMOUNT'
export const DEPOSITE_AMOUNT = 'DEPOSITE_AMOUNT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function withDrawAmount(amount) {
  //API logic
  return {
    type: WITHDRAW_AMOUNT,
    amount,
  }
}

export function depositeAmount(amount) {
  //API logic

  return {
    type: DEPOSITE_AMOUNT,
    amount,
  }
}

function reqeustLogin() {
  return { type: LOGIN_REQUEST }
}

function loginSucess(data) {
  return { type: LOGIN_SUCESS, data }
}

function loginError(error) {
  return { type: LOGIN_FAILURE, error }
}

export function loginUser(name, password) {
  console.log("test");
  return function (dispatch) {
    dispatch(reqeustLogin())
    return axios
      .get('/api/users')
      .then((res) => {
        dispatch(loginSucess(res.data))
      })
      .catch((res) => {
        dispatch(loginError(res))
      })
  }
}
