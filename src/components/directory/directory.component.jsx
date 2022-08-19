import { useState, useEffect, Fragment } from "react";
import { useSelector } from 'react-redux';

import BrandsContainer from "../brands-container/brands-container.component";
import Recommendation from "../recommendation/recommendation.component";
import Carousel from "../carousel/carousel.component";

import { feature, popular } from "../../utils/data-utils";


import { DirectoryContainer, Home } from "./directory.styles";

import { selectProductsMap } from "../../store/products/products.selector";

import { brands } from "../../utils/data-utils";



const Directory = () => {

  const productsMap = useSelector(selectProductsMap);
  const [productsArray, setProducts] = useState([]);
 
  useEffect(() => {
    setProducts([])
     // eslint-disable-next-line
   Object.keys(productsMap).map(key => {
     const productMap = productsMap[key];
     // eslint-disable-next-line
   Object.keys(productMap).map((category) => {
     const categories = productMap[category];
     // eslint-disable-next-line
   Object.keys(categories).map((product) => {
     const products = categories[product];
      setProducts(productsArray => [...productsArray, products])
   })
    })
   })
}, [productsMap]);
 
  
  return (
    <Home>
    <DirectoryContainer>
      {brands.map((brand) => (
        <BrandsContainer key={brand.id} brand={brand} />
      ))}
      </DirectoryContainer>
          <Carousel products={productsArray}/>
      <Recommendation title={"Featured Sneakers"} products={productsArray} items={feature } />
      <Recommendation title={"Most Popular"} products={productsArray} items={popular }/>
      </Home>
  );
};

export default Directory;
