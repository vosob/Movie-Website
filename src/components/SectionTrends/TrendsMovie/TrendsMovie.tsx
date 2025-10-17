import type { Movie } from "../../../types/typesMovie";

interface TrendMovieProps {
  data: Movie[];
}

export const TrendMovie = ({ data }: TrendMovieProps) => {
  return (
    <div className="pt-6 pb-6">
      <ul className="flex justify-evenly">
        {data.map((movie) => {
          return (
            <li>
              <img
                src={movie.imgUrl}
                alt={movie.name}
                className=" rounded-lg w-[200px] h-[300px] object-cover"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
