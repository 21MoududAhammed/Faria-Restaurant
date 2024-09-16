export default function ItemCard({ item }) {
  return (
    <div className="card bg-base-100 max-w-96 shadow-xl relative">
      <figure>
        <img src={item?.image} alt="product" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl text-center">{item?.name}</h2>
        <p>{item?.recipe}</p>
        <div className="card-actions justify-center">
          <button className="uppercase text-lg font-medium text text-myYellow px-7 py-3 bg-gray-300 rounded-xl border-b-2 border-yellow-500 hover:bg-[#1F2937] mt-6">
            add to cart
          </button>
        </div>
      </div>
      <div className="bg-gray-700 px-4 py-2 text-white  rounded-xl absolute right-0">
        <p className="text-xs">${item?.price}</p>
      </div>
    </div>
  );
}
