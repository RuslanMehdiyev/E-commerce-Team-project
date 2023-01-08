import DoublecardCSS from '../assets/style/doublecard.module.css'
import rightfoto from '../assets/icons/doublecard/right.svg'
import leftfoto from '../assets/icons/doublecard/left.svg'


function DoubleCard() {
  return (
    <div className={DoublecardCSS.container}>
      <div className={DoublecardCSS.card}>
        <div className={DoublecardCSS.image}><img src={rightfoto}/></div>
        <div className={DoublecardCSS.describtion}>
            <span className={DoublecardCSS.date_button}>22 oct 2021</span>
            <h2 className={DoublecardCSS.title}>Who avoids a<br/>pain that produces?</h2>
            <p className={DoublecardCSS.text}>Lorem ipsum dolor sit amet consectetur.
             Nec sit enim tellus faucibus bibendum ullamcorper. 
             Phasellus tristique aenean at lorem sed scelerisque.</p>
            <span className={DoublecardCSS.href}>By spacing tech</span>
        </div>
      </div>
      <div className={DoublecardCSS.card}>
        <div className={DoublecardCSS.image}><img src={leftfoto}/></div>
        <div className={DoublecardCSS.describtion}>
            <span className={DoublecardCSS.date_button}>22 oct 2021</span>
            <h2 className={DoublecardCSS.title}>Who avoids a<br/>pain that produces?</h2>
            <p className={DoublecardCSS.text}>Lorem ipsum dolor sit amet consectetur.
             Nec sit enim tellus faucibus bibendum ullamcorper. 
             Phasellus tristique aenean at lorem sed scelerisque.</p>
            <span className={DoublecardCSS.href}>By spacing tech</span>
        </div>
      </div>
    </div>
  )
}

export default DoubleCard
