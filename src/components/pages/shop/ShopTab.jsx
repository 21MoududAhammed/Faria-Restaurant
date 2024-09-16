import ItemCard from "../../shared/ItemCard";

export default function ShopTab({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mx-2">
      {items?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
