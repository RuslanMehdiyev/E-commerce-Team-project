import React, { useContext, useState } from "react";
import star from "../assets/productIcon/star.svg";
import cart from "../assets/productIcon/cart.svg";
import eye from "../assets/productIcon/eye.svg";
import styles from "../components/header/Header.module.css";

import { storeContext } from "../context/storeContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, setFavorites, removeFav } = useContext(storeContext);
  const [displayStyle, setStyle] = useState("");

  const clearAll = () => {
    setFavorites([]);
  };

  return (
    <>
      <button
        style={{ cursor: "pointer" }}
        onClick={clearAll}
        className={styles.descriptionBtn}
      >
        {" "}
        Clear Favorites
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {favorites.length ? (
          favorites.map((item) => {
            return (
              <>
                <div
                  className="card-content"
                  onMouseEnter={() => {
                    setStyle(item);
                  }}
                  onMouseLeave={() => setStyle("false")}
                  key={item.id}
                >
                  <div className="card-top">
                    <Link
                      style={{
                        color: "black",
                      }}
                      to={`/products/${item.id}`}
                    >
                      <img
                        style={{
                          width: "200px",
                        }}
                        src={item.image}
                        alt={item.title}
                        className="main-img"
                      />
                    </Link>
                    <i
                      className="fa-solid fa-heart-crack heartImg"
                      onClick={() => removeFav(item)}
                    ></i>
                  </div>
                  <div className="card-bottom">
                    <div
                      style={{
                        display: displayStyle === item ? "none" : "",
                      }}
                    >
                      <h2>{item.title.substring(0, 10)}</h2>
                      <p>$ {item.price}</p>
                      <div className="stars">
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                      </div>
                    </div>
                    <div
                      className="add"
                      style={{
                        display: displayStyle === item ? "flex" : "none",
                      }}
                    >
                      <div className="addToCart">
                        <h3>Add to cart</h3>
                        <img src={cart} alt="" />
                      </div>
                      <div className="eye">
                        <img src={eye} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>Fav is empty</h1>
        )}
      </div>
    </>
  );
}

export default Favorites;
