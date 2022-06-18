import { useContext, useState, useEffect, Fragment } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";


import ProductCard from "../../components/product-card/products-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { selectProductsMap, selectProductIsLoading } from "../../store/products/products.selector";

import { BrandContainer, Title } from "./brand.styles";

const Brand = () => {
  const { brand } = useParams();
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductIsLoading)
  const [products, setProducts] = useState(productsMap[brand]);

  useEffect(() => {
    setProducts(productsMap[brand]);
  }, [brand, productsMap]);

  return (
    <Fragment>
      <Title>{brand.toUpperCase()}</Title>
      {
        isLoading ? (<Spinner />) :
          (<BrandContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </BrandContainer>)
      }
      
    </Fragment>
  );
};

export default Brand;
