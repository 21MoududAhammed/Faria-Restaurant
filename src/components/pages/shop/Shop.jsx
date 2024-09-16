import CommonBanner from "../../shared/CommonBanner";
import bannerImg1 from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useLoadProducts from "../../../hooks/useLoadProducts";
import ShopTab from "./ShopTab";
export default function Shop() {
  const { products } = useLoadProducts();

  const dessertItems = products.filter(
    (product) => product.category === "dessert"
  );
  const pizzaItems = products.filter((product) => product.category === "pizza");
  const saladItems = products.filter((product) => product.category === "salad");
  const soupItems = products.filter((product) => product.category === "soup");
  const drinkItems = products.filter(
    (product) => product.category === "drinks"
  );

  return (
    <div>
      <Helmet>
        <title>Faria Restaurant | Shop</title>
      </Helmet>
      <CommonBanner
        bgImage={bannerImg1}
        title={"Our Shop"}
        description={" Would you like to try a dish?"}
      />
      <Tabs>
        <TabList className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
          <Tab className="uppercase text-xs sm:text-xl md:text-xl font-bold cursor-pointer hover:text-myYellow border-b-4 border-white hover:border-myYellow">
            Salad
          </Tab>
          <Tab className="uppercase text-xs sm:text-xl md:text-xl font-bold cursor-pointer hover:text-myYellow border-b-4 border-white hover:border-myYellow">
            Pizza
          </Tab>
          <Tab className="uppercase text-xs sm:text-xl md:text-xl font-bold cursor-pointer hover:text-myYellow border-b-4 border-white hover:border-myYellow">
            Soups
          </Tab>
          <Tab className="uppercase text-xs sm:text-xl md:text-xl font-bold cursor-pointer hover:text-myYellow border-b-4 border-white hover:border-myYellow">
            Desserts
          </Tab>
          <Tab className="uppercase text-xs sm:text-xl md:text-xl font-bold cursor-pointer hover:text-myYellow border-b-4 border-white hover:border-myYellow">
            Drinks
          </Tab>
        </TabList>

        <TabPanel>
          <ShopTab items={saladItems} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={pizzaItems} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={soupItems} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={dessertItems} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={drinkItems} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
