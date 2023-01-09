import { createContext, useState } from 'react';

const cartContext = createContext([])
const Provider = cartContext.Provider

function CartContextProvider(props){
    const [cart, setCart] = useState([])

    function addToCart(item, count){
        let indexItemInCart = cart.findIndex(itemInContext=>itemInContext.id === item.id)
        let isItemInCart = indexItemInCart !== -1;
        const newCart = [...cart]

        if(isItemInCart){
            newCart[indexItemInCart].count += count
            setCart(newCart)
        }else{
            newCart.push({...item, count})
            setCart(newCart)
        }
        
    }
    function cleanCart(){
        setCart([])
    }
    function cleanIdCart(id){
        const newCart = cart.filter((element)=>{
            return element.id !== id
        })
        setCart(newCart)
    }

    let totalItemsInCart = 0;
    cart.forEach(element => {
        totalItemsInCart += element.count
    });

    return(
        <Provider value={{
            cart,
            setCart,
            addToCart,
            cleanCart,
            cleanIdCart,
            totalItemsInCart
            }}>
            {props.children}
        </Provider>
    )
}

export {cartContext, CartContextProvider}