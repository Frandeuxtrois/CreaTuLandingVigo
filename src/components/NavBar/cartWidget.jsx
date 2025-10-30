import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './NavBar.css';

export default function CartWidget() {
  const { countItems } = useContext(CartContext);
  const totalQuantity = countItems();

  return (
    <div className="cartWidget">
      <img src="https://www.nicepng.com/png/detail/116-1169955_app-mall-shopping-cart-comments-shopping-cart-app.png" alt="Cart Widget" />
      <span>{totalQuantity}</span>
    </div>
  );
}