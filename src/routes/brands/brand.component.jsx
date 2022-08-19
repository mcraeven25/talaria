import { useState, useEffect, Fragment } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import Products from '../../components/products/products.component'
import Spinner from "../../components/spinner/spinner.component";

import { selectProductsMap, selectProductIsLoading } from "../../store/products/products.selector";

import { BrandContainer, Title } from "./brand.styles";

const Brand = () => {
  const { brand, category } = useParams();
  
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
              Object.keys(products).map((names) => {
                const categories = products[names];
              
               return <Products key={names} title={category} categories={categories} />
        })}
      </BrandContainer>)
      }
      
    </Fragment>
  );
};

export default Brand;
