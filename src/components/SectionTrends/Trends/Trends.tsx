import type { Movie } from "../../../types/typesMovie";
import { TrendMovie } from "../TrendsMovie/TrendsMovie";
import { FaArrowRightLong } from "react-icons/fa6";

interface TrendsProps {
  data: Movie[];
}

export const Trends = ({ data }: TrendsProps) => {
  return (
    <div>
      <div className="flex justify-between  pt-4">
        <h2 className="text-white text-5xl">Trends</h2>
        <div className="text-white text-2xl flex items-center gap-2">
          See more
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      <TrendMovie data={data} />
    </div>
  );
};
