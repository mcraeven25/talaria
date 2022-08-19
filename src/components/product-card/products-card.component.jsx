import { useDispatch, useSelector } from "react-redux";

import {useNavigate} from "react-router-dom"

import {selectCartItems} from '../../store/cart/cart.selector'
import { addItemToCart } from "../../store/cart/cart.action";

import {
  BaseProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
  ShopProductContainer,
} from "./product-card.styles";

import Button, { BUTTON_TYPE } from "../button/button.component";

export const PRODUCT_TYPE = {
  base: "base",
  shop: "shop",
};

const getProduct = (productType = PRODUCT_TYPE.base) =>
  ({
    [PRODUCT_TYPE.base]: BaseProductCardContainer,
    [PRODUCT_TYPE.shop]: ShopProductContainer, 
  }[productType]);


const ProductCard = ({ productType, category, ...attributes }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { imageUrl, price, name, id } = category;

  const navigateHandler = () => navigate(`/product/${id}`);

  const prices = parseInt(price)
  
  const CustomProductCardContainer = getProduct(productType);

  return (
    <CustomProductCardContainer {...attributes}>
      <Image src={imageUrl} alt={name} /> 
      <Footer>
        <Name>{name}</Name>
        <Price>&#8369;{prices.toLocaleString()}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={navigateHandler}>Buy Now</Button>
    </CustomProductCardContainer>
  );
};

export default ProductCard;
