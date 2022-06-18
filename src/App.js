import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import NavBar from "./routes/nav-bar/nav-bar.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import { checkCurrentSession } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
