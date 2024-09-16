import ItemCard from "../../shared/ItemCard";

export default function ShopTab({ items }) {
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 md:gap-8 mx-2 mt-8'>
      {items?.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
