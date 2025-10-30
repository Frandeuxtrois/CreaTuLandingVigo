import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProducts, getProductsByCategory } from '../../data/firebase.js'; 
import Item from '../Item/Item.jsx';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then(response => {
          setProducts(response);
        })
        .catch(error => console.error("Error:", error))
        .finally(() => setIsLoading(false));
    } 
    else {    
      getProducts()
        .then(response => {
          setProducts(response);
        })
        .catch(error => console.error("Error:", error))
        .finally(() => setIsLoading(false));
    }     
     
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2> 
      {isLoading 
        ? <p className="item-list-container__loading">Cargando...</p> 
        : (
          <div>
            <h4>Nuestros productos</h4>
            <div className="item-list">
              {products.map(item => <Item key={item.id} {...item} />)}
            </div>
          </div>
        )
      }
    </div>
  );
}