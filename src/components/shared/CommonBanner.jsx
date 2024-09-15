// eslint-disable-next-line react/prop-types
export default function CommonBanner({ bgImage, title, description }) {
  return (
    <section
      className="h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center bg-fixed  flex justify-center items-center mb-10 sm:mb-16 md:mb-20 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Transparent content div */}
      <div className="bg-[#151515]/50 p-10 sm:p-14 md:p-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28 text-center">
        {/* Data */}
        <div>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase">
            {title}
          </h1>
          <p className="font-cinzel text-white uppercase">{description}</p>
        </div>
      </div>
    </section>
  );
}
