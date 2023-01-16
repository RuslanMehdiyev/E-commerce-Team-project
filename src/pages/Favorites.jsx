import React, { useContext } from "react";
import List from "../components/products/List";
import styles from "../components/header/Header.module.css";

import { storeContext } from "../context/storeContext";

function Favorites() {
  let { favorites, setFavorites } = useContext(storeContext);
  const clearAll = () => {
    setFavorites([]);
  };

  return (
    <>
      <button onClick={clearAll} className={styles.burgerBtn}>
        {" "}
        Clear Favorites
      </button>
      <div>
        {favorites.map((item) => {
          return (
            <>
              <List item={item} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Favorites;
