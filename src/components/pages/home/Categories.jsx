import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import SectionHeading from "../../shared/SectionHeading";
const subHeading = "---From 11:00am to 10:00pm---";
const heading = "ORDER ONLINE";

export default function Categories() {
  return (
    <section className="my-10 sm:my-16 md:my-20">
      <SectionHeading subHeading={subHeading} heading={heading} />
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // When the window width is >= 640px, show 1 slide
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // When the window width is >= 768px, show 2 slides
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When the window width is >= 1024px, show 3 slides
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-8 sm:mt-10 md:mt-16 font-cinzel text-white"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slider1} alt="" />
            <h1 className="absolute bottom-5 right-1/3 uppercase text-3xl  z-10">
              Salads
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slider2} alt="" />
            <h1 className="absolute bottom-5 right-1/3 uppercase text-3xl  z-10">
              Pizzas
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slider3} alt="" />
            <h1 className="absolute bottom-5 right-1/3 uppercase text-3xl  z-10">
              Soups
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slider1} alt="" />
            <h1 className="absolute bottom-5 right-1/3 uppercase text-3xl  z-10">
              Salads
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slider2} alt="" />
            <h1 className="absolute bottom-5 right-1/3 uppercase text-3xl  z-10">
              Pizzas
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slider3} alt="" />
            <h1 className="absolute bottom-5 right-1/3 uppercase text-3xl  z-10">
              Soups
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
