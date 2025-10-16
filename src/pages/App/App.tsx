import { Routes, Route } from "react-router-dom";
import { HomePages } from "../HomePages/HomePages";
import { PricingPage } from "../PricingPage/PricingPage";
import { Layout } from "../../Layout";
import { MoviesPages } from "../MoviesPages/MoviesPages";
import { SeriesPages } from "../SeriesPages/SeriesPages";
import { ColectionsPages } from "../ColectionsPages/ColectionsPages";
import { FAQPages } from "../FAQPages/FAQPages";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePages />} />
        <Route index path="/pricing" element={<PricingPage />} />
        <Route index path="/movies" element={<MoviesPages />} />
        <Route index path="/series" element={<SeriesPages />} />
        <Route index path="./colections" element={<ColectionsPages />} />
        <Route index path="./FAQ" element={<FAQPages />} />

        <Route
          path="*"
          element={
            <h1 className="flex justify-center text-orange-700 text-2xl pt-20">
              Error 404
            </h1>
          }
        />
      </Route>
    </Routes>
  );
};
