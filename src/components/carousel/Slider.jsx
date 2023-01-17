import { useContext, useState } from "react";
import { storeContext } from "../../context/storeContext";
import "./popularProd.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heart from "../../assets/productIcon/Vector.svg";
import star from "../../assets/productIcon/star.svg";
import cart from "../../assets/productIcon/cart.svg";
import eye from "../../assets/productIcon/eye.svg";
import { Link } from "react-router-dom";
import Load from "../loading/Load";

function PopularProd() {
  const { data, selectedCategories, favorites, setFavorites, removeFav } =
    useContext(storeContext);
  const [displayStyle, setStyle] = useState("");

  const getFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          {data.map((item) => {
            let check = favorites.find((e) => e.id === item.id);
            return (
              item.category === selectedCategories && (
                <div className="card" key={item.id}>
                  <div
                    className="card-content"
                    onMouseEnter={() => {
                      setStyle(item);
                    }}
                    onMouseLeave={() => setStyle("false")}
                  >
                    <div className="ca  rd-top">
                      <Link
                        key={item.id}
                        style={{
                          color: "black",
                        }}
                        to={`/products/${item.id}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="main-img"
                        />
                      </Link>
                      {check ? (
                        <i
                          className="fa-solid fa-heart-crack vector-heart"
                          onClick={() => removeFav(item)}
                        ></i>
                      ) : (
                        <img
                          onClick={() => getFavorites(item)}
                          src={heart}
                          alt=""
                          className="vector-heart"
                        />
                      )}
                    </div>
                    <div className="card-bottom">
                      <div
                        style={{
                          display: displayStyle === item ? "none" : "",
                        }}
                      >
                        <h2
                          style={{
                            color: "black",
                          }}
                        >
                          {item.title.substring(0, 10)}
                        </h2>
                        <p
                          style={{
                            color: "black",
                          }}
                        >
                          $ {item.price}
                        </p>
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
                          <button>Add to cart</button>
                          <img src={cart} alt="" />
                        </div>
                        <div className="eye">
                          <img src={eye} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default PopularProd;
