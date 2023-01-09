import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/storeContext";
import { network } from "../../utils/network/network";
import "../carousel/popularProd.css";
import Load from "../loading/Load";
import List from "./List";
function ProductsItems() {
  const {
    filterBy,
    filteredData,
    setFilteredData,
    data,
    setFilterBy,
    load,
    setLoad,
    setData,
  } = useContext(storeContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoad(true);
    network
      .getByCategory(filterBy)
      .then((res) => setFilteredData(res))
      .then(setLoad(false));
  }, [filterBy]);
  useEffect(() => {
    network.getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <>
      {load ? (
        <Load />
      ) : (
        <div className="prod-container">
          <div className="form">
            <h3>Categories</h3>
            <form>
              <input
                type="radio"
                name="action"
                id="all"
                onChange={() => setFilterBy("")}
              />
              <label
                style={{
                  paddingTop: "9px",
                }}
                htmlFor="all"
              >
                ALL
              </label>
              {categories &&
                categories.map((cat, key) => {
                  return (
                    <div key={key}>
                      <input
                        type="radio"
                        name="action"
                        id={cat}
                        onChange={(e) => setFilterBy(e.target.id)}
                      />
                      <label htmlFor={cat}>{cat.toLocaleUpperCase()}</label>
                    </div>
                  );
                })}
            </form>
          </div>
          <div className="card">
            {filteredData
              ? filteredData.map((item) => {
                  return <List item={item} key={item.id} />;
                })
              : data &&
                data.map((item) => {
                  return <List item={item} key={item.id} />;
                })}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductsItems;
