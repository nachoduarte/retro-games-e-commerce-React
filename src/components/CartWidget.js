import React from 'react';
import cart from '../images/shopping-cart.svg';
import { CartContextUse } from './CartContext.js';


const CartWidget = () =>{

    const {cartProducts} = CartContextUse();
    
    return(
        <div>
            <img src={cart}></img>
            {cartProducts > 0 ? (
                <span className="badge rounded-pill bg-danger">{cartProducts}</span>
                ) : (
                    ""
                )}
        </div>
    
    ) 
}

export default CartWidget;