import MenuList from "../../shared/MenuList";
import SecondaryBtn from "../../shared/SeconderyBtn";
import SectionHeading from "../../shared/SectionHeading";

export default function TodaysOffer({ products }) {
  return (
    <section className=" mb-10 sm:mb-16 md:mb-20">
      <SectionHeading
        heading={`Today's offer`}
        subHeading={`---Don't miss---`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 my-3 mx-2 sm:mx-4 ">
        {products.map((item) => (
          <MenuList key={item._id} item={item} />
        ))}
      </div>
      <SecondaryBtn content={"Order Your Favorite Food"} />
    </section>
  );
}
