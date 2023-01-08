import { Outlet } from "react-router-dom";
import ProductsItems from "../components/products/ProductsItems";

function Products() {
  return (
    <>
      <div>Products</div>
      <ProductsItems />
      <Outlet />
    </>
  );
}

export default Products;
