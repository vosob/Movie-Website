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
    <div className=" max-w-[300px] max-h-[300px]    ">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id} className="w-[200px]">
            <img
              src={movie.imgUrl}
              alt={movie.name}
              className="rounded-2xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
