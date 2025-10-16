import { HeaderControls } from "../HeaderControls/HeaderControls";

import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <div className="container flex backdrop-blur-md bg-[rgba(26,25,25,0.3)] items-center rounded-[20px]">
      <img src="../../../public/Logo- light 1.png" className="size-23 " />
      <Nav />
      <HeaderControls />
    </div>
  );
};
