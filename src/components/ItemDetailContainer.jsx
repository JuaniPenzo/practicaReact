import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ClickCount from './clickCount'
//Importar la Promise
import { getSingleItem } from '../services/mockService'
import { useParams } from 'react-router-dom'

function ItemDetailContainer(){
  const [product, setProduct] = useState([])

    let {idProducto} = useParams()

    useEffect( () => {
        getSingleItem(idProducto)
        .then( (res) => setProduct(res) )
        .catch((err)=> {
            alert("producto no encontrado")
        })
    })
  return (
    <div className='contDetail'>
        <h2>{product.marca}</h2>
        <h3>{product.modelo}</h3>
        <img src={product.img} alt="imagen" height="200px" />
        <h4>{"$"+product.precio}</h4>
        <ClickCount stock={product.stock}/>
    </div>
  )
}

export default ItemDetailContainer