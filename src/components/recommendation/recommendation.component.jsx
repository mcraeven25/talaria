import { Fragment } from "react";

import ProductCard from "../product-card/products-card.component"

import { RecommendationContainer } from "./recommendation.styles";

const Recommendation = ({ title, products,items }) => {
    return (  
        <>
            <h2>{title}</h2>
              <RecommendationContainer>
            {products.filter((_, idx) => {
             if (idx === items[0] || idx === items[1] ||  idx === items[2] ||  idx === items[3] || idx === items[4]) {
                 return idx;
              }
            }).map(category => <ProductCard key={category.id} category={category} /> )   
                }
              </RecommendationContainer>
        </>
    );
}
 
export default Recommendation;