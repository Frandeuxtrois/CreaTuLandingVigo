import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar item
  const addItem = (item, quantity) => {
    const newCart = structuredClone(cart);
    
    const isInCart = newCart.some(p => p.id === item.id);

    if (isInCart) {
      const productIndex = newCart.findIndex(p => p.id === item.id);
      newCart[productIndex].quantity += quantity;
    } else {
      newCart.push({ ...item, quantity: quantity });
    }
    setCart(newCart);
  };

  // En el carrito
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  // Quitar items
  const removeItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  // funciones calculo
const countItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        removeItem,
        clearCart,
        countItems,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};