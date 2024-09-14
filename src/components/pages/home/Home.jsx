import Banner from "./Banner";
import Categories from "./Categories";
import Contact from "./Contact";
import Details from "./Details";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import RecommendedItems from "./Recommended";
import Testimonials from "./Testimonials";
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Faria Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <Details />
      <PopularMenu />
      <Contact />
      <RecommendedItems />
      <Featured />
      <Testimonials />
    </div>
  );
}
