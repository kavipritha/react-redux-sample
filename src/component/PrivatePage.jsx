import React, { useContext } from 'react'
import AuthContext from '../utils/authContext'
import GrandParent from './GrandParent'

const PrivatePage = () => {
  const auth = useContext(AuthContext)
  return (
    <>
      <h2> {auth.authenticatedStatus ? 'Authenticated' : 'UnAuthorized'}</h2>
      <GrandParent />
    </>
  )
}

export default PrivatePage
