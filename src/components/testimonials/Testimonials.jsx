import React from "react";
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

const data = [
  {
    avatar: AVTR1,
    name: "Ronaldo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolores unde culpa labore blanditiis molestiae architectob perspiciatis, vel impedit cumque aspernatur, temporibus laborum. Reprehenderit nobis explicabo, facere dolorem beatae asperiores.",
  },
  {
    avatar: AVTR2,
    name: "Messi",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolores unde culpa labore blanditiis molestiae architectob perspiciatis, vel impedit cumque aspernatur, temporibus laborum. Reprehenderit nobis explicabo, facere dolorem beatae asperiores.",
  },
  {
    avatar: AVTR3,
    name: "Neymar",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolores unde culpa labore blanditiis molestiae architectob perspiciatis, vel impedit cumque aspernatur, temporibus laborum. Reprehenderit nobis explicabo, facere dolorem beatae asperiores.",
  },
  {
    avatar: AVTR4,
    name: "Kaka",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolores unde culpa labore blanditiis molestiae architectob perspiciatis, vel impedit cumque aspernatur, temporibus laborum. Reprehenderit nobis explicabo, facere dolorem beatae asperiores.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((testimonial, i) => (
          <SwiperSlide className="testimonial" key={i}>
            <div className="client__avatar">
              <img src={testimonial.avatar} alt={`Avatar 0${i}`} />
            </div>
            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
