import "./ErrorPage.scss"
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <p className='error__text'>404 - Page not found</p>
      <Link to="/warehouses">
        <div className="error__btn">Back to Homepage</div>
      </Link>
    </>
  )
}

export default ErrorPage