import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export const HeaderControls = () => {
  return (
    <ul className="flex gap-8 text-white ml-auto mr-6">
      <li>
        <CiSearch size={32} />
      </li>
      <li>
        <FaBell size={32} />
      </li>
      <li>
        <IoPerson size={32} />
      </li>
      <li>
        <IoSunny size={32} />
      </li>
    </ul>
  );
};
