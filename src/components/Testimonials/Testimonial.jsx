import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import designPic1 from "../../img/design1.jpg";
import designPic2 from "../../img/design2.jpg";
import designPic3 from "../../img/design3.jpg";
import designPic4 from "../../img/design4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: designPic1,
      review:
        "Using Various Pile & Pile Cap such as Tri Pile Cap and different shapes of Pile Cap",
    },
    {
      img: designPic2,
      review:
        "Using Ramp in various Shapes",
    },
    {
      img: designPic3,
      review:
        "",
    },
    {
      img: designPic4,
      review:
        "",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Complete Projects... </span> 
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
