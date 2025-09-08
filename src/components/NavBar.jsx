import './NavBar.css'
import CartWidget from './cartWidget'
export default function NavBar() {
    return (
        <nav>
            <span>Venta 👕 Indumentaria</span>
            <ul>
                <li><a href="#">Hombre</a></li>
                <li><a href="#">Mujer</a></li>
                <li><a href="#">Niños</a></li>
            </ul>
<CartWidget />
        </nav>
    )
}