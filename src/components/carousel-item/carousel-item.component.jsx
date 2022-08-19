import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import {CarouselItemContainer,InfoContainer, ImageContainer,Container,Header} from "./carousel-item.styles"



const CarouselItem = ({ category }) => {
    const { name, imageUrl, id } = category

    const navigate = useNavigate();

    const navigateHandler = () => navigate(`product/${id}`);

    return (
        <Container>
        <CarouselItemContainer>
            <InfoContainer>
                <Header>{name}</Header>
            <Button onClick={navigateHandler}>Buy Now</ Button>
            </InfoContainer>
            <CarouselItemContainer>
                <ImageContainer src={imageUrl} alt={imageUrl} />
            </CarouselItemContainer>
            </CarouselItemContainer>
        </Container>
     );
}
 
export default CarouselItem;