import { Fragment } from "react";

import { BrandPreviewContainer, Title, Preview } from "./brand-preview.styles";
import Category from "../category/category.component";


const BrandPreview = ({ title, products }) => {
  return (
      <BrandPreviewContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
      <Preview>
          {Object.keys(products).map((names) => {
            const categories = products[names];
            return <Category title={title} key={names} names={names} categories={categories} />
            })
          }
        </Preview>
      </BrandPreviewContainer>

  );
};

export default BrandPreview;
