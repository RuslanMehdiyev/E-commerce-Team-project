import footerCSS from "../assets/style/footer.module.css"
import headphone from '../assets/icons/footer/headphone.svg'
import arrow from '../assets/icons/footer/send-2.svg'
import logo from '../assets/icons/footer/logo-1.svg'
import line from '../assets/icons/footer/line-1.svg'
import facebook from  '../assets/icons/footer/facebook.svg'
import whatsapp from  '../assets/icons/footer/whatsapp.svg'
import google from  '../assets/icons/footer/google.svg'
function Footer() {
  return (
    <div className={footerCSS.container}>
      <div className={footerCSS.head}>
        <h2>Subscribe newsletter</h2>
        <span className={footerCSS.email}><input placeholder="Email address"/><img src={arrow}/></span>
        <div className={footerCSS.call}>
        <span><img src={headphone}/></span>
        <span>Call us 24/7:<br/>(+62) 012 356 789</span>
        </div>
      </div>
      <div className={footerCSS.foot}>
      <div className={footerCSS.logo_sec}>
        <span className={footerCSS.foot_logo}><img src={logo}/></span>
        <span className={footerCSS.title}>64 st james boulevard<br/>hoswick, ze2 7zj</span>
        <span className={footerCSS.line}><img src={line}/></span>
        <div className={footerCSS.social_net}>
          <span><img src={google}/></span>
          <span><img src={facebook}/></span>
          <span><img src={whatsapp}/></span>
        </div>
      </div>
      <div className={footerCSS.list_sec}>
        <div>
          <span>Find Product</span>
          <ul>
          <li>Brownze arnold</li>
          <li>Chronograph blue</li>
          <li>Smart phones</li>
          <li>Automatic watch</li>
          <li>Hair straighteners</li>
          </ul>
        </div>
        <div>
          <span>Get help</span>
          <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Return policy</li>
          <li>Privacy policy</li>
          <li>Payment policy</li>
          </ul>
        </div>
        <div>
          <span>About us</span>
          <ul>
          <li>News</li>
          <li>Service</li>
          <li>Our policy</li>
          <li>Custmer care</li>
          <li>Faq's</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer