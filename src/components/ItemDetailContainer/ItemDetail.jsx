import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router';
const ItemDetail = ({ product, isAdded, onAdd }) => {

  return (
    <div className='itemcard'>
      <h2 className='itemcardtitle'>{product.title}</h2>
      <img
        className='itemcardimg'
        height="800"
        src={product.imgURL}
        alt={product.title}
      />
      <h3 className='itemcardprice'>Precio: $ {product.price}</h3>
      <div style={{textAlign: "center"}}>
        <p>{product.description}</p>
      </div>
      <div>
        { isAdded ? (
            <Link to="/cart">
              <button>Terminar Compra</button>
            </Link>
          ) : (
            <ItemCount stock={product.stock} onAdd={onAdd} />
          )
        }
      </div>
    </div>
  );
};

export default ItemDetail;