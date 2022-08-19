import {CartItemContainer,Image,ItemDetails,Details} from  './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, size } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name} />
            <ItemDetails>
                <Details className="name">{name}</Details>
                <Details className='price'>Quantity: {quantity}</Details>
                <Details className='price'>Size: {size}</Details>
            </ItemDetails>
        </CartItemContainer>
    );
}
 
export default CartItem;