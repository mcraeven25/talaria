import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import NavBar from "./routes/nav-bar/nav-bar.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Search from "./routes/search/search.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import Product from "./routes/product/product.component.jsx";
import { GlobalStyle } from "./global.styles.js";

import { checkCurrentSession } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="search" element={<Search />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
