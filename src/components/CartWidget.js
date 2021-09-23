import cart from '../images/shopping-cart.svg';
import BadgeNumber from './BadgeNumber.js';

const CartWidget = () =>{
    
    return <>
        <img src={cart}></img>
        <BadgeNumber numero={0} />
    
    </>
}

export default CartWidget;