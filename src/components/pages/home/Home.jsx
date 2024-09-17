import useHelmetTitle from "../../../hooks/useHelmetTitle";
import Banner from "./Banner";
import Categories from "./Categories";
import Contact from "./ContactSection";
import Details from "./Details";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import RecommendedItems from "./Recommended";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
const helmet = useHelmetTitle(`Faria Restaurant | Home`);

export default function Home() {
  return (
    <div>
      {/* set the title  */}
      {helmet}
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
