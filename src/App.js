
import {Routes, Route, useLocation} from "react-router-dom"
import ErrorPage from "./components/errorPage/ErrorPage";
import Layout from "./components/Layout";
import Homepage from "./components/pages/home-page/Homepage";
import Product from "./components/pages/product/Product";
import ShopPage from "./components/pages/shop-page/ShopPage";
import ShoppingBag from "./components/shoppingBag/ShoppingBag";
function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout/>}>
          
          <Route index element={<Homepage />}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/product" element={<Product/>}/>
          
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="shoppingCart" element={<ShoppingBag />} />
        </Routes>
      )}
    </>
  );
}

export default App;
