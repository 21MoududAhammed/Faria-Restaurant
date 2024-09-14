import SectionHeading from "../../shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import quoteImg from "../../../assets/quote_left.png";

export default function Testimonials() {
  return (
    <section className="my-10 sm:my-16 md:my-20 space-y-10">
      <SectionHeading
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="space-y-5 md:space-y-8">
            <div className="flex justify-center items-center text-3xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <div className="flex justify-center">
              <img src={quoteImg} alt="" />
            </div>
            <div className="text-center space-y-5 px-10 sm:px-16 md:px-20">
              <p className="text-xl">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h3 className="uppercase text-myYellow text-3xl">JANE DOE</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-5 md:space-y-8">
            <div className="flex justify-center items-center text-3xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <div className="flex justify-center">
              <img src={quoteImg} alt="" />
            </div>
            <div className="text-center space-y-5 px-10 sm:px-16 md:px-20">
              <p className="text-xl">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h3 className="uppercase text-myYellow text-3xl">Roman Rance</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-5 md:space-y-8">
            <div className="flex justify-center items-center text-3xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <div className="flex justify-center">
              <img src={quoteImg} alt="" />
            </div>
            <div className="text-center space-y-5 px-10 sm:px-16 md:px-20">
              <p className="text-xl">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h3 className="uppercase text-myYellow text-3xl">Moudud Ahammed</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-5 md:space-y-8">
            <div className="flex justify-center items-center text-3xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <div className="flex justify-center">
              <img src={quoteImg} alt="" />
            </div>
            <div className="text-center space-y-5 px-10 sm:px-16 md:px-20">
              <p className="text-xl">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h3 className="uppercase text-myYellow text-3xl">John Lee</h3>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </section>
  );
}
