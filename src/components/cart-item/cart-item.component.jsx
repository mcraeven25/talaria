import {CartItemContainer,Image,ItemDetails,Details} from  './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name} />
            <ItemDetails>
                <Details className="name">{name}</Details>
                <Details className='price'>{quantity} x {price.toLocaleString()}</Details>
            </ItemDetails>
        </CartItemContainer>
    );
}
 
export default CartItem;