import { Outlet } from "react-router-dom";
import Sale from "../components/sale/Sale";
import ProductsItems from "../components/products/ProductsItems";

function Products() {
  return (
    <>
      <ProductsItems />
      <Sale />
      <Outlet />
    </>
  );
}

export default Products;
