import offersCSS from "../assets/style/offers.module.css";
import speaker from "../assets/icons/offers/speaker.svg";
import computer from "../assets/icons/offers/computer.svg";
import eye from "../assets/icons/offers/eye.svg";
import basket from "../assets/icons/offers/basket.svg";
import joystick from "../assets/icons/offers/joystick.svg";
import stars from "../assets/icons/offers/stars.svg";

function Offers() {
  return (
    <div className={offersCSS.container}>
      <div className={offersCSS.left_box}>
        <img className={offersCSS.speaker} src={speaker} />
        <div className={offersCSS.detail}>
          <span className={offersCSS.title}>JBL bar 2.1 deep bass</span>
          <span className={offersCSS.price}>$11.70</span>
          <img className={offersCSS.stars} src={stars} />
          <div className={offersCSS.counts}>
            <span>57</span>
            <span>11</span>
            <span>33</span>
            <span>59</span>
          </div>
          <div className={offersCSS.buttons}>
            <button className={offersCSS.btn}>
              Add to cart
              <span className={offersCSS.baskett}>
                <img src={basket} />
              </span>
            </button>
            <button className={offersCSS.eye}>
              <img src={eye} />
            </button>
          </div>
        </div>
      </div>
      <div className={offersCSS.right_box}>
        <div className={offersCSS.upper}>
          <img className={offersCSS.joystick} src={joystick} />
          <div className={offersCSS.joy_about}>
            <p className={offersCSS.product_name}>Play game</p>
            <p className={offersCSS.product_price}>$11.70</p>
            <img className={offersCSS.product_stars} src={stars} />
          </div>
        </div>
        <div className={offersCSS.upper}>
          <img className={offersCSS.joystick} src={computer} />
          <div className={offersCSS.joy_about}>
            <p className={offersCSS.product_name}>Play game</p>
            <p className={offersCSS.product_price}>$11.70</p>
            <img className={offersCSS.product_stars} src={stars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
