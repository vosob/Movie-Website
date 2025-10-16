import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import HeroContainer from "./components/Hero/HeroContainer/HeroContainer";

export const Layout = () => {
  const location = useLocation();

  const isHeaderOverlay = ["/", "/home"].includes(location.pathname);
  return (
    <div
      className={
        isHeaderOverlay
          ? "relative bg-[url('/hero-banner.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen"
          : ""
      }
    >
      {/* Header */}
      <Header
        className={isHeaderOverlay ? "absolute top-0 left-0 w-full z-50" : ""}
      />

      {/* Hero — тільки для головної сторінки */}
      {isHeaderOverlay && <HeroContainer />}

      <Outlet />
    </div>
  );
};
