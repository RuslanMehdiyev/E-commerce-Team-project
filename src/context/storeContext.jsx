import { useState } from "react";
import { createContext } from "react";
export const storeContext = createContext(null);
export const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("electronics");
  const [load, setLoad] = useState(false);
  const removeFav = (item) => {
    setFavorites(favorites.filter((e) => e.id !== item.id));
  };

  const values = {
    load,
    setLoad,
    favorites,
    setFavorites,
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
    removeFav,
  };

  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
};
