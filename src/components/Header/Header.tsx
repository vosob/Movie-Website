import { HeaderControls } from "../HeaderControls/HeaderControls";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="flex gap-12 justify-center pt-4">
      <p>Logo</p>
      <Nav />
      <HeaderControls />
    </header>
  );
};
