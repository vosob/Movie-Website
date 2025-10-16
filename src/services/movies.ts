import axios from "axios";
import type { Movie } from "../types/typesMovie";

const BASE_URL = "http://localhost:8080";

export interface MovieList {
  data: Movie[];
}

export const fetchMovie = async () => {
  const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
  return response.data;
};
