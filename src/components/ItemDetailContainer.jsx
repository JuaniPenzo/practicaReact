import { useEffect, useState } from 'react'
//Importar la Promise
import { getSingleItem } from '../services/firebase'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader/loader'

function ItemDetailContainer(){
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    let {idProducto} = useParams()

    useEffect( () => {
      setTimeout(()=> {
        getSingleItem(idProducto)
        .then( (res) => setProduct(res), setIsLoading(false) )
        .catch((err)=> {
            alert("producto no encontrado")
        })
    })
    },[idProducto])

  return (
    isLoading? <Loader></Loader>:<ItemDetail product={product}></ItemDetail>
  )
}

export default ItemDetailContainer