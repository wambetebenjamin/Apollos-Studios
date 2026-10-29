"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { ARTIST_VOICES } from "@/lib/data/hosts";

export function TestimonialsCarousel() {
  return (
    <div className="ws-testimonials-swiper">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={28}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6500, disableOnInteraction: true }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1100: { slidesPerView: 3, spaceBetween: 30 },
        }}
        style={{ paddingBottom: "42px" }}
      >
        {ARTIST_VOICES.map((item) => (
          <SwiperSlide key={item.name} style={{ height: "auto" }}>
            <div className="testimony-wrap p-4 pb-5 h-100 d-flex flex-column justify-content-between">
              <div
                className="user-img mb-4"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={`${item.name}, ${item.role} in ${item.city}`}
              >
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="icon-quote-left" aria-hidden="true" />
                </span>
              </div>
              <div className="text">
                <p className="mb-4 line">{item.quote}</p>
                <p className="name mb-0">{item.name}</p>
                <span className="position">
                  {item.role} ({item.city})
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
