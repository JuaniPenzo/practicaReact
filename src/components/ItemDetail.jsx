import React from 'react'
import { useContext } from 'react'
import { cartContext } from './storage/cartContext'
import ClickCount from './clickCount'
import { Link } from 'react-router-dom'

function ItemDetail({product}){
    const { addToCart } = useContext(cartContext)

    function handleAddToCart(count){
        addToCart(product, count)
    }
    
    const cardBody={
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    }
    return(
        <div style={cardBody}>
            <div className="card" style={{width: 18+'rem'}} id={product.id}>
                <img src={product.img} className="card-img-top" alt="..."/>
                <div className="card-body" style={cardBody}>
                    <h5 className="card-title">{product.marca}</h5>
                    <h6 className="card-text">{product.modelo}</h6>
                    <h6 className="card-text">{"$"+product.precio}</h6>
                    <ClickCount stock={product.stock} onAddToCart={handleAddToCart}/>
                    <Link to="/cart"><button type="button" className="btn btn-secondary">Ir al Carrito</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail