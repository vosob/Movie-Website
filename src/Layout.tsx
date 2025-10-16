import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import HeroContainer from "./components/Hero/HeroContainer/HeroContainer";
import { HeroAbout } from "./components/Hero/HeroAbout/HeroAbout";

export const Layout = () => {
  return (
    <div className="relative container">
      <Header />
      <HeroAbout />
      <HeroContainer />

      <Outlet />
    </div>
  );
};
