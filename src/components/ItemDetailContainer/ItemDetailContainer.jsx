import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../../data/firebase.js';
import { CartContext } from '../../context/CartContext.jsx';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  const { productId } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getProductById(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
    setIsAdded(true);
  };

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  
  return (
    <ItemDetail 
      product={product} 
      isAdded={isAdded}
      onAdd={handleAddToCart} 
    />
  );
}

export default ItemDetailContainer;