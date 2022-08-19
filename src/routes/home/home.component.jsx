import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProductsStart } from "../../store/products/products.action";

import Directory from "../../components/directory/directory.component";
import Banner from "../../components/banner/banner.component"



const Home = () => {
   const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchProductsStart());
    }, [dispatch]);
  
  return (
    <div>
      <Outlet />
      <Banner />
      <Directory />
    </div>
  );
};

export default Home;
