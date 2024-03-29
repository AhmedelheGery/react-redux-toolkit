import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <h2>Logo</h2>
      <ul className='nav-list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/products'>Shop</Link>
        </li>
        <li>
        <Link to='/todo'>Todo-list</Link>
        </li>
        <li>
        <Link to='/support'>Support</Link>
        </li>
        <li>
        <Link to='/register'>Signup</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
