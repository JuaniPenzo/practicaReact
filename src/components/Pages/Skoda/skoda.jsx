import React, { useState, useEffect } from 'react'
import './skoda.css'
import ItemListContainer from '../../ItemListContainer'
//Importar la Promise
import {getItems} from '../../../services/firebase'


function Skoda(){
    //Creamos un estado para nuestros productos
    const [products, setProducts] = useState([])
    //Llamamos a la promise y guardamos la respuesta en un estado UNA UNICA VEZ
    useEffect(()=>{
      getItems().then((res)=>{setProducts(res)})
    },[])
    return(
      <div className='contSkoda'>
        {products.map((item)=>{
        if(item.marca === "Skoda")
        {return (<ItemListContainer
          url={item.img}
          Marca={item.marca}
          Modelo={item.modelo}
          precio={"$"+item.precio}
          discount={item.discount}
          id={item.id}
          key={item.id}/>)}
        })}
    </div>
    )
}

export default Skoda