import { useSelector } from "react-redux";

import { selectCartItems,selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item"
import PaymentForm from "../../components/payment-form/payment-form.component";

import { CheckoutContainer,CheckoutHeader,Header,Total } from "./checkout.styles";

const Checkout = () => {
    
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return ( 
        <CheckoutContainer>
            <CheckoutHeader>
                <Header>
                    <span>Product</span>
                </Header>
                <Header>
                    Details
                 </Header>
                 <Header>
                    <span>Remove</span>
                </Header>
            </CheckoutHeader>
            {
                    cartItems.map((cartItem) => <CheckoutItem key={cartItem.cartId} cartItem={cartItem} />)
            }
            <Total>Total: &#8369;{cartTotal.toLocaleString()}</Total>
            {/* <PaymentForm /> */}
            </CheckoutContainer>
           
     );
}
 
export default Checkout;