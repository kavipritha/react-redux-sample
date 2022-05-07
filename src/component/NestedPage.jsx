import { Link, Outlet } from 'react-router-dom'

const NestedPage = () => {
  return (
    <div>
      <h1> Nested Page</h1>
      <ul>
        <li>
          <Link to="shoes">Shoes</Link>
        </li>
        <li>
          <Link to="food">Food</Link>
        </li>
        <li>
          <Link to="dresses" state={{ data: 'Test Data' }}>
            Dresses
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default NestedPage
