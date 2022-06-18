import { useDispatch, useSelector } from "react-redux";

import {selectCartItems} from '../../store/cart/cart.selector'
import { addItemToCart } from "../../store/cart/cart.action";

import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
} from "./product-card.styles";



import Button, { BUTTON_TYPE } from "../button/button.component";


const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)

  const { imageUrl, price, name } = product;


    
    const addProduct = () => {
       dispatch(addItemToCart(cartItems, product))
  
    }
  return (

    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>&#8369;{price.toLocaleString()}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProduct}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
