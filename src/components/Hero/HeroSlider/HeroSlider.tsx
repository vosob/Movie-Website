import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import type { Movie } from "../../../types/typesMovie";

interface MovieSliderProps {
  data: Movie[];
}

export const MovieSlider = ({ data }: MovieSliderProps) => {
  return (
    <div className="w-[300px] h-[300px] relative top-60">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="w-full h-full"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id} className="w-[200px]">
            <img
              src={movie.imgUrl}
              alt={movie.name}
              className="rounded-2xl object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
