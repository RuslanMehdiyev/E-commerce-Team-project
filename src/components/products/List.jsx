import heart from "../../assets/productIcon/Vector.svg";
import star from "../../assets/productIcon/star.svg";
import cart from "../../assets/productIcon/cart.svg";
import eye from "../../assets/productIcon/eye.svg";
import "../carousel/popularProd.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/storeContext";

function List({ item, check1, check2 }) {
  const [displayStyle, setStyle] = useState("");
  const { favorites, setFavorites, removeFav } = useContext(storeContext);

  const getFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <>
      <div
        className="card-content"
        onMouseEnter={() => {
          setStyle(item);
        }}
        onMouseLeave={() => setStyle("false")}
      >
        <div className="card-top">
          <Link
            style={{
              color: "black",
            }}
            to={`/products/${item.id}`}
          >
            <img src={item.image} alt={item.title} className="main-img" />
          </Link>
          {check1 || check2 ? (
            <i
              className="fa-solid fa-heart-crack heartImg"
              onClick={() => removeFav(item)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-heart heartImg"
              onClick={() => getFavorites(item)}
            ></i>
          )}
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
}

export default List;
