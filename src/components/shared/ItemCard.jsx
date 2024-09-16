export default function ItemCard({ item }) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-200 rounded">
      <img className="w-full h-full" src={item?.image} alt="" />

      <div className="py-8 px-10">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold">{item?.name}</h4>
          <p className="text-base">{item?.recipe}</p>
        </div>
        <div className="mt-8">
          <button className="uppercase text-xl font-medium text text-myYellow px-7 py-5 bg-gray-300 rounded-xl border-b-2 border-yellow-500 hover:bg-[#1F2937]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
