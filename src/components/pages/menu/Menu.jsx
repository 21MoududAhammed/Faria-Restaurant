import { Helmet } from "react-helmet-async";
import TodaysOffer from "./TodaysOffer";
import CommonBanner from "../../shared/CommonBanner";
import bgDessert from "../../../assets/menu/dessert-bg.jpeg";
import bgPizza from "../../../assets/menu/pizza-bg.jpg";
import bgSalads from "../../../assets/menu/salad-bg.jpg";
import bgSoups from "../../../assets/menu/soup-bg.jpg";
import bgMenuBanner from "../../../assets/menu/banner3.jpg";
import DessertsList from "./DessertsList";
import PizzaList from "./PizzaList";
import SaladList from "./SaladList";
import SoupsList from "./SoupsList";
import useLoadProducts from "../../../hooks/useLoadProducts";

export default function Menu() {
  const { products } = useLoadProducts();
  const offerItems = products.filter(
    (product) => product.category === "offered"
  );
  const dessertItems = products.filter(
    (product) => product.category === "dessert"
  );
  const pizzaItems = products.filter((product) => product.category === "pizza");
  const saladItems = products.filter((product) => product.category === "salad");
  const soupItems = products.filter((product) => product.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Faria Restaurant | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <CommonBanner
        bgImage={bgMenuBanner}
        title={`OUR MENU`}
        description={`Would you like to try a dish?`}
      />
      <TodaysOffer products={offerItems} />
      <CommonBanner
        bgImage={bgDessert}
        title={`Desserts`}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt veritatis expedita consequatur optio velit tenetur laboriosam quae, ipsam autem!`}
      />
      <DessertsList products={dessertItems} />
      <CommonBanner
        bgImage={bgPizza}
        title={`Pizza`}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt veritatis expedita consequatur optio velit tenetur laboriosam quae, ipsam autem!`}
      />
      <PizzaList products={pizzaItems} />
      <CommonBanner
        bgImage={bgSalads}
        title={`Salads`}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt veritatis expedita consequatur optio velit tenetur laboriosam quae, ipsam autem!`}
      />
      <SaladList products={saladItems} />
      <CommonBanner
        bgImage={bgSoups}
        title={`Soups`}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt veritatis expedita consequatur optio velit tenetur laboriosam quae, ipsam autem!`}
      />
      <SoupsList products={soupItems} />
    </div>
  );
}
