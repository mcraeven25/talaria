import { useNavigate } from "react-router-dom";

import { BrandContainer, BackGroundImage } from "./brands-container.styles";

const BrandsContainer = ({ brand }) => {
  const { imageURL, route } = brand;
  const navigate = useNavigate()
  const navigateHandler = () => navigate(route)

    return (
   <BrandContainer onClick={navigateHandler}>
      <BackGroundImage style={{ backgroundImage: `url(${imageURL})` }} />
    </BrandContainer>
  );
};

export default BrandsContainer;
