import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <ul className="flex gap-6 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/pricing"}>Pricing</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/series"}>Series</Link>
        <Link to={"/collection"}>Collection</Link>
        <Link to={"/FAQ"}>FAQ</Link>
      </ul>
    </div>
  );
};
