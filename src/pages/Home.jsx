import MainContainer from "../components/mainInformation/MainContainer";
import SliderHead from "../components/carousel/SliderHead";
import Slider from "../components/carousel/Slider";
import Sale from "../components/sale/Sale";
import Offers from "../components/Offers";
import Quality from "../components/Quality";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import DoubleCard from "../components/DoubleCard";
import Load from "../components/loading/Load";
function Home() {
  return (
    <>
      <MainContainer />
      <SliderHead />
      <Slider />
      <Sale />
      <Offers />
      <Quality />
      <Testimonials />
      <Brands />
      <DoubleCard />
    </>
  );
}

export default Home;
