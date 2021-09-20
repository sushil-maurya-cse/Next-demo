import HeroSlider from "../components/HeroSlider/HeroSlider";


import SearchDomain from "../components/searchDomain/SearchDomain";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial/Testimonial";
import Header from "../components/Layout/components/Header/Header";

export default function Home() {
  return (
    <>
       <Header />
      <HeroSlider />
      <SearchDomain />
      <Pricing />
      <Testimonial />
      
    </>
  );
}
