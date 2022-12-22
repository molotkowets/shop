
import {Routes, Route} from "react-router-dom"
import ErrorPage from "./components/errorPage/ErrorPage";
import Layout from "./components/Layout";
import Homepage from "./components/pades/homepage/Homepage";
import Shoppage from "./components/pades/shoppage/Shoppage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />}/>
          <Route path="/shop" element={<Shoppage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
