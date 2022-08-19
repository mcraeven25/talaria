import { useDispatch, useSelector } from 'react-redux'

import { selectIscartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import {CartIconContainer,ItemCount,ShoppingIcon} from  './cart-icon.styles.jsx'


const CartIcon = () => {

    const dispatch = useDispatch()

    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIscartOpen)

    const toggle = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return ( 
        <CartIconContainer onClick={toggle}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
     );
}
 
export default CartIcon;