import "./assets/style/main.css";
import { useContext, useEffect } from "react";
import { storeContext } from "./context/storeContext";

import { network } from "./utils/network/network";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Layout from "./Layout/Layout";

function App() {
  const { setData, setCategories } = useContext(storeContext);

  useEffect(() => {
    network.getAll().then((res) => setData(res));
    network.getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
