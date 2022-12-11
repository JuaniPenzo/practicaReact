import React, { useState, useEffect } from 'react'
import './audi.css'
import ItemListContainer from '../../ItemListContainer'
//Importar la Promise
import getItems from '../../../services/mockService'

let products = []

function Audi(){
    //Creamos un estado para nuestros productos
  const [products, setProducts] = useState([])
    //Llamamos a la promise y guardamos la respuesta en un estado UNA UNICA VEZ
  useEffect(()=>{
    getItems().then((res)=>{setProducts(res)})
  })
    return(
      <div className='contAudi'>
        {products.map((item)=>{
        if(item.marca === "Audi")
        {return (<ItemListContainer
          url={item.img}
          Marca={item.marca}
          Modelo={item.modelo}
          precio={"$"+item.precio}/>)}
        
        })}
    </div>
    )
}

export default Audi