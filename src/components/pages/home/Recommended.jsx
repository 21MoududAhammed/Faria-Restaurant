import ProductCard from "../../shared/ProductCard";
import SectionHeading from "../../shared/SectionHeading";

export default function RecommendedItems() {
  return (
    <section className="mb-10 sm:mb-16 md:mb-20 m-2">
      <SectionHeading
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
