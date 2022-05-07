import { useLocation, useParams } from 'react-router-dom'

const Category = (props) => {
  const { categoryName } = useParams()
  const location = useLocation()
  return (
    <h2>
      {categoryName.toUpperCase()} - Category{' '}
      {location.state ? location.state.data : ''}
    </h2>
  )
}

export default Category
