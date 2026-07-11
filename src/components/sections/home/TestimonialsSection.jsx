import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import TestimonialCard from "../../cards/TestimonialCard";

import { testimonials } from "../../../data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#00E676]/5 blur-[180px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="Success Stories"
          title="What Our Members Say"
          description="Thousands of members trust us to help them achieve their fitness goals."
        />

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
