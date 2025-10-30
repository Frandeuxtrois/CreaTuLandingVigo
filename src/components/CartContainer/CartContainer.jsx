import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout"; 

function CartContainer() {
    const { cart, clearCart, removeItem, getCartTotal } = useContext(CartContext);

    async function handleCheckout(buyerData) {
        const order = {
            buyer: buyerData,
            items: cart,
            total: getCartTotal(),
            date: new Date()
        };

        try {
            const orderId = await createOrder(order);
            clearCart();
            alert(`Compraste! Tu ID de orden es: ${orderId}`);
        } catch (error) {
            alert("Error al crear la orden. probá de nuevo.");
        }
    }

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Tu carrito está vacío</h1>
                <Link to="/"><button>Ver productos</button></Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Tu Carrito</h1>
            {cart.map(product => (
                <div key={product.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                    <h4>{product.title}</h4>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Subtotal: ${product.price * product.quantity}</p>
                    <button onClick={() => removeItem(product.id)}>Quitar</button>
                </div>
            ))}
            
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <h2>Total: ${getCartTotal()}</h2>
                <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
            
            <FormCheckout handleCheckout={handleCheckout} />
        </div>
    );
}

export default CartContainer;