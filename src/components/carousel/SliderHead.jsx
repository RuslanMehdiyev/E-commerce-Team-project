import { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/storeContext";
import { network } from "../../utils/network/network";
import "./popularProd.css";

function SliderHead() {
  const {
    categories,
    setCategories,
    selectedCategories,
    setSelectedCategories,
  } = useContext(storeContext);
  useEffect(() => {
    network.getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <div className="container">
      <div className="popularProd">
        <h1>Popular Products</h1>
        <div>
          <ul>
            {categories &&
              categories.map((item, key) => (
                <li
                  key={key}
                  style={{ opacity: item === selectedCategories && "0.6" }}
                  onClick={() => setSelectedCategories(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SliderHead;
