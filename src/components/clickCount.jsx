import React, { useState } from 'react';

function ClickCount(props){
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
  function agregarCarrito(){
    console.log("Agregado al carrito")
  }

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={sumarClick}>+</button>
      <button disabled={count===1} onClick={restarClick}>-</button>
      <br/>
      <button onClick={agregarCarrito}>Agregar al Carrito</button>
    </div>
  )
}

export default ClickCount