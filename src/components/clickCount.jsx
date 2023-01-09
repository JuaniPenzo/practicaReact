import React, { useState } from 'react';
import './clickCount.css'

function ClickCount(props){
  const {onAddToCart}= props
  const [count, setCount] = useState(1)
  //No pasarnos del valor maximo o minimo de stock

  function sumarClick(){
    if(count < props.stock){
      setCount(count + 1)
    }
  }
  function restarClick(){
    if(count > 0){
      setCount(count - 1)
    }
  }
  return(
    <div className='click'>
      <h3>{count}</h3>
      <div className='clickButton'>
        <button type="button" className="btn btn-primary" disabled={count===1} onClick={restarClick}>-</button>
        <button type="button" className="btn btn-primary" onClick={sumarClick}>+</button>
      </div>
      <br/>
      <button type="button" className="btn btn-secondary" onClick={()=>onAddToCart(count)}>Agregar al Carrito</button>
    </div>
  )
}

export default ClickCount