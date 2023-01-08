import { useState } from "react";
import { createContext } from "react";

export const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const values = {
    data,
    setData,
    categories,
    setCategories,
    filterBy,
    setFilterBy,
    filteredData,
    setFilteredData,
  };

  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
};
