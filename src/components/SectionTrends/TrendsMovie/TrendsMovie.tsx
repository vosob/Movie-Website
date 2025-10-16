import type { Movie } from "../../../types/typesMovie";

interface TrendMovieProps {
  movie: Movie;
}

export const TrendMovie = ({ movie }: TrendMovieProps) => {
  return (
    <div>
      <img src={movie.imgUrl} alt={movie.name} />
    </div>
  );
};
