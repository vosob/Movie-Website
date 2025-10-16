import { TrendMovie } from "../TrendsMovie/TrendsMovie";

export const Trends = () => {
  return (
    <div>
      <h2>Trends</h2>
      <div>See more</div>
      <TrendMovie movie={movie} />
    </div>
  );
};
