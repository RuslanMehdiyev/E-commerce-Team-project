import testimonCSS from "../assets/style/testimonials.module.css";
import person1 from "../assets/icons/testimonial/person-1.svg";
import person2 from "../assets/icons/testimonial/person-2.svg";
import person3 from "../assets/icons/testimonial/person-3.svg";

function Testimonials() {
  return (
    <div className={testimonCSS.container}>
      <div className={testimonCSS.testimonial}>
        <div className={testimonCSS.person}>
          <span className={testimonCSS.image}>
            <img src={person1} />
          </span>
          <p className={testimonCSS.fullname}>Savanah Nguyen</p>
        </div>
        <p className={testimonCSS.text}>
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
      </div>
      <div className={testimonCSS.testimonial}>
        <div className={testimonCSS.person}>
          <span className={testimonCSS.image}>
            <img src={person2} />
          </span>
          <span className={testimonCSS.fullname}>Savanah Nguyen</span>
        </div>
        <p className={testimonCSS.text}>
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
      </div>
      <div className={testimonCSS.testimonial}>
        <div className={testimonCSS.person}>
          <span className={testimonCSS.image}>
            <img src={person3} />
          </span>
          <span className={testimonCSS.fullname}>Savanah Nguyen</span>
        </div>
        <p className={testimonCSS.text}>
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
