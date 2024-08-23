import { HiOutlineBars3 } from "react-icons/hi2";

export const Header = ({ setOpen }) => {
  return (
    <div className="w-full flex justify-between text-2xl p-4 sticky top-0 bg-white z-50">
      <div>{"<SS />"}</div>
      <button onClick={() => setOpen((prev) => !prev)}>
        <HiOutlineBars3 className=" h-9 w-9" />
      </button>
    </div>
  );
};
