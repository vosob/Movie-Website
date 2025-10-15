import { Routes, Route } from "react-router-dom";
import { HomePages } from "../HomePages/HomePages";
import { PricingPage } from "../PricingPage/PricingPage";
import { Layout } from "../../Layout";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePages />} />
        <Route index path="/pricing" element={<PricingPage />} />

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
