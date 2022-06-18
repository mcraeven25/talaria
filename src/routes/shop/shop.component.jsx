import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProductsStart } from "../../store/products/products.action";
import { getProducts } from "../../utils/firebase-utils";
import BrandsPreview from "../brands-preview/brands-preview.component";
import Brand from "../brands/brand.component";

const Shop = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchProductsStart());
    }, [dispatch]);
  
  return (
    <Routes>
      <Route index element={<BrandsPreview />} />
      <Route path=":brand" element={<Brand />} />
    </Routes>
  );
};

export default Shop;
