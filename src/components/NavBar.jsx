import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <span>Venta 👕 Indumentaria</span>
            <ul>
                <li><a href="#">Hombre</a></li>
                <li><a href="#">Mujer</a></li>
                <li><a href="#">Niños</a></li>
            </ul>
            <div className="cartWidget">
                <img src="https://www.nicepng.com/png/detail/116-1169955_app-mall-shopping-cart-comments-shopping-cart-app.png" alt="Cart Widget" />
            </div>
        </nav>
    )
}