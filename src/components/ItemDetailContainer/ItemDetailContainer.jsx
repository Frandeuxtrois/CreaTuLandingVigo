import StateComponent from '../ColorPick/StateComponent'
import { useParams } from 'react-router'
import { getProductById } from '../../data/mockApi';
import { useEffect, useState } from 'react';

function ItemDetailContainer() {
    const { idParam } = useParams();
    const [product, setProduct] = useState ( { loading: true});
    
useEffect ( () => {
    getProductById(idParam)
    .then( response => setProduct (response))
    .catch ( error => alert(error))
}, [idParam])

        if ( product.loading ){
            return <p>Cargando..</p>
        }

        return (<div className='itemcard'>
            <h2 className='itemcardtitle'>{product.title}</h2>
            <img
            className='itemcardimg'
            height="800"
            src={product.imgURL}
            />
            <h3 className='itemcardprice'>Precio: $ {product.price}</h3>
            <StateComponent />
            <div style={{textAlign: "center"}}>
                <p>{product.description}</p>
            </div>
            <div>
                <button>Agregar</button>
                </div>
            </div>)
        }
export default ItemDetailContainer