import banner from "../../../assets/menu/banner3.jpg";
export default function Banner() {
  return (
    <section
      className="h-fit bg-cover bg-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-12 sm:px-20 md:px-32 mb-10 sm:mb-16 md:mb-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Transparent content div */}
      <div className="bg-[#151515]/50 p-10 sm:p-14 md:p-20 text-center">
        {/* Data */}
        <div>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase">
            OUR MENU
          </h1>
          <p className="font-cinzel text-white uppercase">
            Would you like to try a dish?
          </p>
        </div>
      </div>
    </section>
  );
}
