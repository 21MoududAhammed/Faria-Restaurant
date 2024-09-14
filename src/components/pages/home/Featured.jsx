import featuredImage from "../../../assets/home/featured.jpg";
export default function Featured() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed w-full h-fit"
      style={{ backgroundImage: `url(${featuredImage})` }}
    >
      {/* overlay with blur effect  */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      {/* content  */}
      <div className="relative z-10 p-5 sm:p-10 md:p-20">
        {/* heading  */}

        <div className="text-center space-y-4">
          <p className="text-[#D99904] text-xl">---Check it out---</p>
          <div className="py-5 border-b-4 border-t-4 max-w-lg mx-auto">
            <h1 className="text-4xl uppercase text-white">FROM OUR MENU</h1>
          </div>
        </div>
        {/* content  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <img src={featuredImage} alt="" />
          <div className="text-white my-auto">
            <p className="text-2xl">March 20, 2023</p>
            <h6 className="text-2xl">WHERE CAN I GET SOME?</h6>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
