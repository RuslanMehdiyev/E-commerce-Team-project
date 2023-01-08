import { useState } from "react";
import { createContext } from "react";
export const storeContext = createContext(null);
export const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("electronics");
  const values = {
    data,
    setData,
    categories,
    setCategories,
    filterBy,
    setFilterBy,
    filteredData,
    setFilteredData,
    selectedCategories,
    setSelectedCategories,
  };

  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
};
