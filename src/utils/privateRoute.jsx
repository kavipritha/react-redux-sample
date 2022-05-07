import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ authenticated, children }) => {
  if (!authenticated.authenticatedStatus) {
    return <Navigate to="/Login" replace />
  }

  return children
}

export default ProtectedRoute;
