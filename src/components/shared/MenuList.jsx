/* eslint-disable react/prop-types */
export default function MenuList({ item }) {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-3">
      <img
        className="w-20  md:w-28 h-20 md:h-28"
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h1 className="font-cinzel uppercase text-xl text-black">
          {name}-------
        </h1>
        <p className="text-base text-gray-500">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
}
