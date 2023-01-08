import qualityCSS from '../assets/style/quality.module.css'
import cube from '../assets/icons/quality/box-tick.svg'
import crown from '../assets/icons/quality/crown.svg'
import shield from '../assets/icons/quality/shield-security.svg'


function Quality() {
  return (
    <div className={qualityCSS.container}>
      <div className={qualityCSS.quality_board}>
        <div className={qualityCSS.quality}>
        <img className={qualityCSS.image} src={cube}/>
        <div className={qualityCSS.about}>
            <span className={qualityCSS.title}>Free delivery</span>
            <span className={qualityCSS.subtitle}>on order above $50,00</span>
        </div>
        </div>
        <div className={qualityCSS.quality}>
        <img className={qualityCSS.image} src={crown}/>
        <div className={qualityCSS.about}>
            <span className={qualityCSS.title}>Best quality</span>
            <span className={qualityCSS.subtitle}>best quality in low price</span>
        </div>
        </div>
        <div className={qualityCSS.quality}>
        <img className={qualityCSS.image} src={shield}/>
        <div className={qualityCSS.about}>
            <span className={qualityCSS.title}>1 year warranty</span>
            <span className={qualityCSS.subtitle}>Available warranty</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Quality
