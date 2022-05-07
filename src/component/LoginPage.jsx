import React, { useContext } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import AuthContext from '../utils/authContext'
import { loginUser } from '../action/bank'
import { connect } from 'react-redux'

const LoginPage = (props) => {
  const auth = useContext(AuthContext)
  return (
    <div style={{ padding: 30 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <TextField label="UserName"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password"></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
            disabled={props.loading}
            onClick={() => {
              props.login()
            }}
          >
            Log In
          </Button>
        </Grid>
        <Grid item xs={12}>
          {props.error}
          
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.loginReducer.loading,
    data: state.loginReducer.data,
    error: state.loginReducer.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(loginUser(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
