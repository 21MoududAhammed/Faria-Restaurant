import cefService from "../../../assets/home/chef-service.jpg";
export default function Details() {
  return (
    <section
      className="bg-cover bg-center h-fit w-full flex justify-center items-center text-center mb-10 sm:mb-16 md:mb-20"
      style={{ backgroundImage: `url(${cefService})` }}
    >
      <div className="p-2 sm:p-5 md:p-20">
        <div className="bg-white p-3 sm:p-5 md:p-20 space-y-2 sm:space-y-3 md:space-y-5">
          <h1 className="font-cinzel uppercase text-2xl sm:text-3xl md:text-5xl">{`Faria's Restaurant`}</h1>
          <p className="font-inter text-xs sm:text-sm md:text-base">
            {` Welcome to Faria's Restaurant, where classic flavors meet modern
          creativity! Located in the heart of the city, we serve fresh, locally
          sourced ingredients in every dish. Whether you're here for a casual
          meal or a special occasion, our warm atmosphere and flavorful menu
          ensure a memorable dining experience. Join us for great food, friendly
          service, and a taste you won’t forget!`}
          </p>
        </div>
      </div>
    </section>
  );
}
