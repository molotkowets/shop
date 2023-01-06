
import {Routes, Route, useLocation} from "react-router-dom"
import ErrorPage from "./components/errorPage/ErrorPage";
import Layout from "./components/Layout";
import BlogPage from "./components/pages/blog/BlogPage";
import Homepage from "./components/pages/home-page/Homepage";
import Post from "./components/pages/post/Post";
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
          <Route path="*" element={<ErrorPage/>}/>
          <Route index element={<Homepage />}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/blog" exact={true} element={<BlogPage/>}/>
          {/* <Route path="/post" element={<Post/>}/> */}
          <Route path="/blog/:id" element={<Post/>}/>
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
