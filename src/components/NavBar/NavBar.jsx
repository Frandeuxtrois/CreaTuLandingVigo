import { Link } from "react-router"; 
import './NavBar.css';
import CartWidget from './cartWidget';

function NavBar() {
  return (
    <nav className="navmenu">
      <Link to="/">
        <span className="navlogo">Venta 👕 Indumentaria</span>
      </Link>
      <ul className="navlinks">
        <li>
           <Link to="/category/hombre">
            Hombre
          </Link>
        </li>
        <li>
          <Link to="/category/mujer">
            Mujer
          </Link>
        </li>   
         <li>
          <Link to="/category/niños">
            Niños
          </Link>
        </li>
        <li>
          <Link to="/category/accesorios">
            Accesorios
          </Link>
        </li>
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>

    </nav>
  );
}

export default NavBar;