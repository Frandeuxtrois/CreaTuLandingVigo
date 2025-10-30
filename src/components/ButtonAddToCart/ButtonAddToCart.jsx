import { useState } from 'react';

export default function ButtonAddToCart ( ){
    let [statusInCart, setStatusInCart ] = useState("Sin items en el shop")

function handleClick() {
    setStatusInCart('agregado exitosamente!')

}

return (
    <div className='buttoncart'>
        <button onClick={ handleClick } > Agregar!</button>
        <br/>
        <small> { statusInCart }</small>
    </div>
)
} 