import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="hello">
      <ul>
        <li>
          <Link to="/">My Home</Link>
        </li>
        <li>
          <Link to="/about">My Info</Link>
        </li>
        <li>
          <Link to="/diary">My Diary</Link>
        </li>
        <li>
          <Link to="/items">My Develop Item</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;