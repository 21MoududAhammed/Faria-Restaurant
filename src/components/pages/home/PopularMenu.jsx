import MenuList from "../../shared/MenuList";
import SecondaryBtn from "../../shared/SeconderyBtn";
import SectionHeading from "../../shared/SectionHeading";
import { useState, useEffect } from "react";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const loadMenu = async () => {
      const menu = await fetch("menu.json");
      const data = await menu.json();
      const popularItems = data.filter((item) => item.category === "popular");
      setMenu(popularItems);
    };
    loadMenu();
  }, []);
  return (
    <section className="mb-10 sm:mb-16 md:mb-20">
      <SectionHeading
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 my-10 mx-2 sm:mx-4 ">
        {menu?.map((item) => (
          <MenuList key={item._id} item={item} />
        ))}
      </div>
      <SecondaryBtn content={'View Full Menu'}/>
    </section>
  );
}
