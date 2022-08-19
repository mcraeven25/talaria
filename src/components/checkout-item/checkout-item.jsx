import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.action.js';

import {CheckoutItemContainer,Details, ImageContainer,Image,Quantity,Arrow, Value,DetailsContainer, ProductContainer} from  './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    const { name, imageUrl, price, quantity, size,cartId } = cartItem;

   

    
    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItem = () => dispatch(addItemToCart(cartItems, cartItem,cartId, size))
    const removeItem = () => dispatch(removeItemToCart(cartItems, cartItem))

    return ( 
        <CheckoutItemContainer>
            <ProductContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <DetailsContainer>
                <Details>{name}</Details>
                    <Details>&#8369;{price.toLocaleString()} Size: US {size} </Details> 
               
            <Quantity>
                <Arrow onClick={removeItem}>	&#45; </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItem}> 	&#43;</Arrow>
            </Quantity>
                </DetailsContainer>
                </ProductContainer>
            <Arrow onClick={clearItem}>&#10005;</Arrow>
        </CheckoutItemContainer>
     );
}
 
export default CheckoutItem;