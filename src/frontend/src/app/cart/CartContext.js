import React, { createContext} from 'react'
import  {useState} from 'react'
import { getCartItems } from '../../modules/cart';
export const ContextCart = createContext(getCartItems());


const CartContext = (props) => {

  const [basket, setBasket] = useState(getCartItems());
  
  console.log(basket)
    return (
        <div>
            <ContextCart.Provider value={{basket,getCartItems}}>
                {props.children}
            </ContextCart.Provider>
        </div>
    )
}

export default CartContext
