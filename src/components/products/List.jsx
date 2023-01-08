import heart from "../../assets/productIcon/Vector.svg";
import star from "../../assets/productIcon/star.svg";
import cart from "../../assets/productIcon/cart.svg";
import eye from "../../assets/productIcon/eye.svg";
import "../carousel/popularProd.css";
import { useState } from "react";

function List({ item }) {
  const [displayStyle, setStyle] = useState("");

  return (
    <>
      <div
        className="card-content"
        onMouseEnter={() => {
          setStyle(item);
        }}
        onMouseLeave={() => setStyle("false")}
      >
        <div className="ca  rd-top">
          <img src={item.image} alt={item.title} className="main-img" />
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
