import CommonBanner from "../../shared/CommonBanner";
import bannerImg1 from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useLoadProducts from "../../../hooks/useLoadProducts";
import ShopTab from "./ShopTab";
import useHelmetTitle from "../../../hooks/useHelmetTitle";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function Shop() {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
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

  //   to set the title
  const helmet = useHelmetTitle(`Faria Restaurant | Shop`);

  return (
    <div>
      {/* set title  */}
      {helmet}
      {/* hero sections  */}
      <CommonBanner
        bgImage={bannerImg1}
        title={"Our Shop"}
        description={" Would you like to try a dish?"}
      />
      {/* categories tabs  */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
          {categories.map((cat) => {
            return (
              <Tab key={cat} className="border-none">
                <NavLink
                  to={`/shop/${cat}`}
                  className={({ isActive }) =>
                    `uppercase text-xs sm:text-xl md:text-xl font-bold cursor-pointer  border-b-4 border-white  ${
                      isActive ? "text-myYellow border-myYellow" : ""
                    }`
                  }
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </NavLink>
              </Tab>
            );
          })}
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
