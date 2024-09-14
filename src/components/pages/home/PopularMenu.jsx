import MenuList from "../../shared/MenuList";
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
      <div className="flex justify-center">
        <div className="max-w-56 px-4 py-2 border-b-4 border-b-gray-900 rounded-xl">
          <h1 className="text-xl uppercase ">View Full Menu</h1>
        </div>
      </div>
    </section>
  );
}
