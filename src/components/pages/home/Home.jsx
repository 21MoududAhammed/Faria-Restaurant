import Banner from "./Banner";
import Categories from "./Categories";
import Contact from "./Contact";
import Details from "./Details";
import PopularMenu from "./PopularMenu";

export default function Home() {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Details/>
        <PopularMenu/>
        <Contact/>
    </div>
  );
}
