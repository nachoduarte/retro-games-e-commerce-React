import {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const CartContextUse = () => {
    return useContext(CartContext);
}

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const updateQty = [...cart];

            updateQty.map(element =>{
                if(element.item.id === item.id){
                    element.quantity += quantity;
                }
            })
            setCart(updateQty);
        }else {
            setCart([...cart, {item, quantity}])
        }
        
    }


    const isInCart = (id) => cart.find(element => element.item.id ===id);

    console.log('carrito', cart)
    return(
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}