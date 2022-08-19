import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
    
import {selectCartItems} from '../../store/cart/cart.selector'
import { addItemToCart } from "../../store/cart/cart.action";

import RadioButtons from "../radio-buttons/radio-buttons.component";
import Button, { BUTTON_TYPE } from "../button/button.component";


import {
    ProductItemContainer, ImageContainer,
    SizesContainer, InfoContainer, Image, Description, SizeContainer, RadioButton,
    Label,Price, Select
} from './product-item.styles'



const ProductItem = ({ product }) => {
    const [currentSize, setCurrentSize] = useState(0);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

    const { name, imageUrl, price } = product;
    const cartId = product.id + currentSize;
  

    const addProduct = () => {
       dispatch(addItemToCart(cartItems, product,cartId, currentSize))
  }
    
    return ( 
        <ProductItemContainer>
            <ImageContainer>
                <Image src={imageUrl} name={imageUrl} />
            </ImageContainer>

            <InfoContainer>
                <h1>{name}</h1>
                <Price>&#8369;{price.toLocaleString()}</Price>
                <Description> FRESH. NEW. INNOVATIVE. GROUNDBREAKING. Positive, right?
                    That's what they said about Stephen when he first stepped on the court 10 years ago.
                    Changing the game isn't easy and before long, haters came out of the woodwork.
                    But that's what happens when you make people think about the game, play the game,
                    and even dream about the game…differently. If that's ruining the game—then
                    he'll just need to keep on doing it.
                    NO APOLOGIES. ALL LOVE. COMPLETE COMMITMENT.</Description>
                <SizesContainer>
                    <Select>Select Size</Select>
                    <SizeContainer>
                    {
                        sizes.map(size => {
                            return (
                                <>
                                <RadioButton type="radio" id={size} name={size} value={size} onChange={(e) => setCurrentSize(size)}
                                        checked={currentSize === size} />
                                    <Label htmlFor={size}>US {size}</Label>
                               </>
                            )
                        })
                        }
                         </SizeContainer>
                </SizesContainer>
                <Button onClick={addProduct}>Add to cart</Button>
                </InfoContainer>
        </ProductItemContainer>
     );
}
 
export default ProductItem;