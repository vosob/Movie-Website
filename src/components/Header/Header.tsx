import { HeaderControls } from "../HeaderControls/HeaderControls";

import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="flex backdrop-blur-md bg-[rgba(26,25,25,0.3)] items-center rounded-[20px] w-[1232px]  h-20 mx-auto mt-9 ml-20 absolute top-0 left-0  z-50">
      <img src="../../../public/Logo- light 1.png" className="size-23 " />
      <Nav />
      <HeaderControls />
    </header>
  );
};
