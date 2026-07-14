import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import TrainerCard from "../../cards/TrainerCard";

import { trainers } from "../../../data/trainers";

const FeaturedTrainersSection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#00E676]/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00E676]/5 blur-[180px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="Elite Coaches"
          title="Meet Our Expert Trainers"
          description="Train with certified professionals dedicated to helping you achieve your goals faster and smarter."
        />

        {/* View All Trainers */}
        <div className="mb-12 flex justify-center">
          <Link
            to="/trainers"
            className="
              inline-flex
              rounded-2xl
              border
              border-[#00E676]/20
              bg-[#00E676]/10
              px-6
              py-3
              text-[#00E676]
              transition-all
              duration-300
              hover:bg-[#00E676]
              hover:text-black
              hover:shadow-[0_0_25px_rgba(0,230,118,.25)]
            "
          >
            View All Trainers
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
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
          {trainers.map((trainer) => (
            <SwiperSlide key={trainer.id}>
              <TrainerCard trainer={trainer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default FeaturedTrainersSection;
