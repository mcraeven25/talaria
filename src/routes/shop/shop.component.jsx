import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProductsStart } from "../../store/products/products.action";
import BrandsPreview from "../brands-preview/brands-preview.component";
import Brand from "../brands/brand.component";
import Carousel from "../../components/carousel/carousel.component";
import Product from "../product/product.component"


const Shop = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchProductsStart());
    }, [dispatch]);
  
  return (
    <Routes>
      <Route index element={<BrandsPreview />} />
      <Route path=":brand/:category" element={<Brand/>} />
      <Route path=":brand" element={<Brand />} />
    </Routes>
  );
};

export default Shop;
