import { cartContext } from "../storage/cartContext"
import { useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './cart.css'
import { createBuyOrderWithStock } from "../../services/firebase"
import CheckoutForm from "./CheckoutForm"



function Carrito(){
    const {cart:products, cleanCart, cleanIdCart} = useContext(cartContext)
    const [isEmpty, setIsEmpty] = useState(products.length === 0)
    const [totalCart, setTotalCart] = useState(0)
    const [order, setOrder] = useState(false);

    useEffect(()=>{
        setIsEmpty(products.length === 0)
        let initialValue = 0
        products.forEach(element => {
            initialValue += (element.count * element.precio) 
        });
        setTotalCart(initialValue)
      },[products])
      
    const cardBody={
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    }
    function handleCheckout(buyerData){
        const order={
            buyer: buyerData,
            items: products, 
            total: totalCart, 
            date: new Date()
        }
        createBuyOrderWithStock(order).then((id)=>{
            return(
              alert(`Orden de compra ${id} creada`),
              setOrder(id),
              cleanCart()
            )
            
        })

    }

    if(isEmpty){
        return (
            <div style={cardBody}>
                <div className="alert alert-primary" role="alert">
                    El carrito esta vacio. Accede a los mejores precios de tu primer vehiculo
                </div>
                <Link to="/"><button type="button" className="btn btn-secondary btn-lg">Menu principal</button></Link>
            </div>
        )
      }
      return (
        <>
          <h1>Tu Carrito</h1>
    
          <table className="cartList">
            <thead className="cartList_head">
              <tr className="cartList_row">
                <th>Miniatura</th>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Remover</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="cartList_row">
                  <td>
                    <img height={50} src={item.img} alt={item.marca} />
                  </td>
                  <td>{item.marca}</td>
                  <td>$ {item.precio}</td>
                  <td>{item.count}</td>
                  <td>
                    <button className="botonRemover" onClick={()=>cleanIdCart(item.id)}>
                      X
                    </button>
                  </td>
                  <th>${item.precio * item.count}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button type="button" className="btn btn-primary btn-lg" onClick={cleanCart}>Eliminar Carrito</button>
          </div>
    
          <div className="cartList_detail">
            <h4>El total de tu compra es de ${totalCart}</h4>
    
            <CheckoutForm onCheckout={handleCheckout} />
          </div>
        </>
      )
}

export default Carrito