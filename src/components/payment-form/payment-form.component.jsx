import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = (e) => {
        e.preventDefault()
        
        if (!stripe || !elements) {
            return;
        }
    }

    return (
    <PaymentFormContainer>
        <FormContainer>
         <h2>Credit Card Payment</h2>
         <CardElement />
         <Button buttonType={BUTTON_TYPE.inverted}>PAY NOW</Button>
        </FormContainer>
     </PaymentFormContainer>
    );
}
 
export default PaymentForm;