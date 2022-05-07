import React from 'react'
import { connect } from 'react-redux'
import { depositeAmount, withDrawAmount } from '../action/bank'

class GrandParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { depositeAmt: 0, withDrawAmt: 0 }
  }

  render() {
    return (
      <div>
        <h2>GrandParent</h2>
        <div>
          <input
            type="number"
            onChange={(e) => {
              this.setState({ depositeAmt: e.target.value })
            }}
          />
          <button
            onClick={() => {
              this.props.deposite(this.state.depositeAmt)
            }}
          >
            Deposite Amount
          </button>
        </div>
        <div>
          <input
            type="number"
            onChange={(e) => {
              this.setState({ withDrawAmt: e.target.value })
            }}
          />
          <button
            onClick={() => {
              this.props.withDraw(this.state.withDrawAmt)
            }}
          >
            Withdraw Amount
          </button>
        </div>
        <p>Current Bank Balance: {this.props.accountBalance}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accountBalance: state.bankReducer.accountBalance,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    withDraw: (amount) => dispatch(withDrawAmount(amount)),
    deposite: (amount) => dispatch(depositeAmount(amount)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrandParent)
