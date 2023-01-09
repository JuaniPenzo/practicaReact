import React, { useState, useEffect } from 'react'
import './seat.css'
import ItemListContainer from '../../ItemListContainer'
//Importar la Promise
import {getItems} from '../../../services/firebase'


function Seat(){
    //Creamos un estado para nuestros productos
    const [products, setProducts] = useState([])
    //Llamamos a la promise y guardamos la respuesta en un estado UNA UNICA VEZ
    useEffect(()=>{
      getItems().then((res)=>{setProducts(res)})
    })
    return(
        <div className='contSeat'>
          {products.map((item)=>{
          if(item.marca === "Seat")
          {return (<ItemListContainer
            url={item.img}
            Marca={item.marca}
            Modelo={item.modelo}
            precio={"$"+item.precio}
            discount={item.discount}
            id={item.id}
            key={item.id}
            />)}
          })}
      </div>
    )
}

export default Seat