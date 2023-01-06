import { useState } from "react";
import { createContext } from "react";

export const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const values = {
    data,
    setData,
  };

  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
};
