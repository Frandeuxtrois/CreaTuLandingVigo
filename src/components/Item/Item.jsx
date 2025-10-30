import { Link } from 'react-router';
import './Item.css'

function Item( {id, title, imgURL, price } ){

    return (
        <div className='itemcard'>
            <h2 className='cardtitle'> {title}</h2>
            <img
                className='itemcardimg'
                height='300'
                src={imgURL}
                alt={title}
            />
            <h3 className='itemcardprice'>Precio: $ {price}</h3>
            
            <div style={{ textAlign: 'center'}}>
                <Link to={`/item/${id}` }>
                    <button>Ir a detalle</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;