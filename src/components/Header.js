import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar">
      <span className="nav-logo">Bookstore CMS</span>
      <ul className='nav-list'>
        <li>
          <Link to="/" className="nav-item books">
            {' '}
            Books
          </Link>
        </li>
        <li>
          <Link to="/catagory" className="nav-item category">
            Category
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
