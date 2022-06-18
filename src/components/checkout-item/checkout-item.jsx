import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.action.js';

import {CheckoutItemContainer,Details, ImageContainer,Image,Quantity,Arrow, Value} from  './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    const { name, imageUrl, price, quantity } = cartItem;

    
    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItem = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItem = () => dispatch(removeItemToCart(cartItems, cartItem))

    return ( 
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Details>{name}</Details>
            <Quantity>
                <Arrow onClick={removeItem}>&#10094; </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItem}> &#10095;</Arrow>
            </Quantity>
            <Details>&#8369;{price.toLocaleString()}</Details>
            <Arrow onClick={clearItem}>&#10005;</Arrow>
        </CheckoutItemContainer>
     );
}
 
export default CheckoutItem;