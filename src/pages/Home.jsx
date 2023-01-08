import DoubleCard from "../components/DoubleCard"
import Brands from "../components/Brands"
import Testimonials from "../components/Testimonials"
import Quality from "../components/Quality"
import Offers from "../components/Offers"

function Home() {
  return (
    <div>
      <Offers/>
      <Quality/>
      <Testimonials/>
      <Brands/> 
      <DoubleCard/>
    </div>
  )
}

export default Home