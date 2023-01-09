import { useContext } from 'react'
import { cartContext } from '../storage/cartContext'
import image from '../../img/carrito.png'
import { Link } from 'react-router-dom'

function Cart(){
    const contexto = useContext(cartContext)
    const muestraCarrito = contexto.totalItemsInCart > 0

    const cssCart = {
        color:"white"
    }
    return (
        <div>
            <Link to="/cart"><img src={image} alt="" height="35px"/></Link>
            {muestraCarrito && <span style={cssCart}>{contexto.totalItemsInCart}</span>}
            
        </div>
    )
}

export default Cart