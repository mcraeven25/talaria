import { Link } from "react-router-dom";

import { BrandPreviewContainer, Title, Preview } from "./brand-preview.styles";

import ProductCard from "../product-card/products-card.component";

const BrandPreview = ({ title, products }) => {
  return (
    <div>
      <BrandPreviewContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      </BrandPreviewContainer>
    </div>
  );
};

export default BrandPreview;
