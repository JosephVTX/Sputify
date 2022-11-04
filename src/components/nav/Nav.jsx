import { BsHeadphones } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export const Nav = () => {
  return (
    <div className="relative h-screen bg-[#574FD8] w-[5rem] flex flex-col justify-center items-center gap-20 text-[1.4rem] text-white">
      <FaUserAlt className="text-[1.75rem] text-white absolute top-12 rounded-full" />
      <BsHeadphones />
      <BiSearch />
      <AiFillHeart />
      <AiFillPlayCircle />
      <RiMenu3Line />
    </div>
  );
};
