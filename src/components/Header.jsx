import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to={"/"}> Home</Link>
      <Link to={"/products"}> Products</Link>
      <Link to={"/details"}>Details</Link>
    </>
  );
}

export default Header;
