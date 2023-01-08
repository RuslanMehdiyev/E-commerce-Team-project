import brandCSS from '../assets/style/brand.module.css'
import brand4 from '../assets/icons/brand/brand-4.svg'
import brand5 from '../assets/icons/brand/brand-5.svg'
import brand6 from '../assets/icons/brand/brand-6.svg'
import brand7 from '../assets/icons/brand/brand-7.svg'
import brand8 from '../assets/icons/brand/brand-8.svg'

function Brands() {
  return (
    <div className={brandCSS.container}>
        <div className={brandCSS.brands}>
            <span><img src={brand5}/></span>
            <span><img src={brand4}/></span>
            <span><img src={brand6}/></span>
            <span><img src={brand7}/></span>
            <span><img src={brand8}/></span>
        </div>
      
    </div>
  )
}

export default Brands
