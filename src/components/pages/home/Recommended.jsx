import ProductCard from "./ProductCard";
import SectionHeading from "../../shared/SectionHeading";
import useLoadProducts from "../../../hooks/useLoadProducts";
import ItemCard from "../../shared/ItemCard";

export default function RecommendedItems() {
  const { products } = useLoadProducts();
  const recommendedProducts = products?.filter(
    (product) => product?.category === "offered"
  );
  return (
    <section className="mb-10 sm:mb-16 md:mb-20 m-2">
      <SectionHeading
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedProducts?.map((product) => (
          <ItemCard key={product._id} item={product} />
        ))}
      </div>
    </section>
  );
}
