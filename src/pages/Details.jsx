import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Outlet, useParams } from "react-router-dom";
import DetailsCard from "../components/detailscard/detailsCard";
import { network } from "../utils/network/network";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import star from "../assets/detailsIcons/Vector.svg";
import styles from "../components/header/Header.module.css";
import { display } from "@mui/system";
function Details() {
  const param = useParams();
  const [detailed, setDetailed] = useState([]);
  useEffect(() => {
    network.getById(param.id).then((res) => setDetailed(res));
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "1200px",
          height: "100%",
          margin: "20px auto",
          gap: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "500px",
          }}
        >
          <Carousel infiniteLoop>
            <div>
              <img src={detailed.image} alt="" />
            </div>
            <div>
              <img src={detailed.image} alt="" />
            </div>
            <div>
              <img src={detailed.image} alt="" />
            </div>
          </Carousel>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <h2>{detailed.title}</h2>
          <h3>${detailed.price}</h3>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              {" "}
              <p>{detailed?.rating?.rate} star rated</p>
            </span>
          </Box>
          <p>
            Availabity:{" "}
            <span
              style={{
                color: "#30BD57",
              }}
            >
              In Stock
            </span>{" "}
          </p>
          <p>Hurry Up Only Few Left At This Price!</p>
          <hr />
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            <button className={styles.btnish}>Add to cart</button>
            <button className={styles.btnish}>Buy it now</button>
          </Box>
          <hr />
          <p> Category: {detailed?.category?.toUpperCase()}</p>
        </Box>
      </Box>

      <Box>
        {/* <Box>
          <button>Description</button>
          <button>Reviews</button>
        </Box> */}
        <Box></Box>
      </Box>
    </>
  );
}

export default Details;
