import { useState } from 'react'
import './StateComponent.css';

export default function StateComponent(){
    const [ color, setColor ] = useState ('#000000');

return (
    <div className='boxContainer'>
        <p>Seleccioná el color:
            <span className="colorPreview" style={{ backgroundColor: color }}></span>
</p>
<div className="buttonContainer">
  <button className="button" onClick={ () => setColor("#000000") }>Negro</button>
  <button className="button" onClick={ () => setColor("#6370ffff") }>Azul</button>
  <button className="button" onClick={ () => setColor("#e64545ff") }>Rojo</button>
</div>
</div>
)
}