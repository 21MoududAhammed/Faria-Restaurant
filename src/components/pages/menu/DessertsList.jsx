import MenuList from "../../shared/MenuList";
import SecondaryBtn from "../../shared/SeconderyBtn";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function DessertsList({ products }) {
  return (
    <section className=" mb-10 sm:mb-16 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 my-3 mx-2 sm:mx-4 ">
        {products.map((item) => (
          <MenuList key={item._id} item={item} />
        ))}
      </div>
      <Link to='/shop/dessert'>
      <SecondaryBtn content={"Order Your Favorite Food"} />
      </Link>
    </section>
  );
}
