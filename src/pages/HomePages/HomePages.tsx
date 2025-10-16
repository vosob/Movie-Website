import { useQuery } from "@tanstack/react-query";
import { HeroAbout } from "../../components/Hero/HeroAbout/HeroAbout";
import { fetchMovie } from "../../services/movies";
import { MovieSlider } from "../../components/Hero/HeroSlider/HeroSlider";
import { Trends } from "../../components/SectionTrends/Trends/Trends";

export const HomePages = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovie,
  });

  return (
    <div className="container">
      {isLoading && <p>Loading pls wait </p>}
      {isError && <p>An error occurred</p>}
      <div className="flex justify-between items-end">
        {data && <HeroAbout data={data} />}
        {data && <MovieSlider data={data} />}
      </div>
      {<Trends />}
    </div>
  );
};
