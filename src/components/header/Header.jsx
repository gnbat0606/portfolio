import { Navigation } from "./Navigation";
import { HiOutlineBars3 } from "react-icons/hi2";

export const Header = () => {
  return (
    <div className=" flex justify-between text-2xl m-4">
      {"<SS />"}
      <span className="">
        <HiOutlineBars3 className=" h-9 w-9" />
      </span>
      <Navigation />
    </div>
  );
};
