import Banner from "./Banner";
import Categories from "./Categories";
import Contact from "./Contact";
import Details from "./Details";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import RecommendedItems from "./Recommended";

export default function Home() {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Details/>
        <PopularMenu/>
        <Contact/>
        <RecommendedItems/>
        <Featured/>
    </div>
  );
}
