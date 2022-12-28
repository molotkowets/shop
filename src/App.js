
import {Routes, Route} from "react-router-dom"
import ErrorPage from "./components/errorPage/ErrorPage";
import Layout from "./components/Layout";
import Homepage from "./components/pages/home-page/Homepage";
import Product from "./components/pages/product/Product";
import ShopPage from "./components/pages/shop-page/ShopPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/product" element={<Product/>}/>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
