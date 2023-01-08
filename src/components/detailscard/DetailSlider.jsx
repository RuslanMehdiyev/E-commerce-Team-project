import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function DetailSlider() {
  //   let { productsId } = useParams();
  //   useEffect(() => {
  //     console.log([productsId]);
  //   });
  return (
    <>
      <Carousel>
        <div>
          <img src="" />
        </div>
        <div>
          <img src="" />
        </div>
        <div>
          <img src="" />
        </div>
      </Carousel>
    </>
  );
}

export default DetailSlider;
