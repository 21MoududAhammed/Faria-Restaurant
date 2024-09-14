import SectionHeading from "../../shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import quoteImg from "../../../assets/quote_left.png";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch("/review.json");
      const result = await res.json();
      setReviews(result);
    };
    fetchReviews();
  }, []);
  return (
    <section className="my-10 sm:my-16 md:my-20 space-y-10">
      <SectionHeading
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="space-y-5 md:space-y-8">
              <div className="flex justify-center items-center text-3xl ">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
              </div>
              <div className="flex justify-center">
                <img src={quoteImg} alt="" />
              </div>
              <div className="text-center space-y-5 px-10 sm:px-16 md:px-20">
                <p className="text-xl">{review.details}</p>
                <h3 className="uppercase text-myYellow text-3xl">
                  {review.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
