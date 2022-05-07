import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './utils/authContext'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer/bankReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

const middlewares = [thunk]

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

function Home() {
  const [authStatus, setStatus] = useState(false)

  const login = () => {
    axios
      .get('/api/users', {
        method: 'get',
      })
      .then((response) => {
        if (response) {
          console.log(response)
          setStatus(true)
        }
      })
      .catch((e) => console.log(e))
  }
  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{ authenticatedStatus: authStatus, login: login }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
