import { IoLocationOutline } from "react-icons/io5";
export const AboutMe = () => {
  return (
    <div className="py-16 px-4 flex-col items-center gap-12">
      <div className=" flex justify-center items-center gap-4 flex-col">
        <img
          src="sagar.jpeg"
          className="w-[240px] h-[280px]  relative z-10 border-8 border-white "
          alt=""
        />
        <div className=" absolute w-[272px] h-[272px] z-0 bg-gray-200 mt-5"></div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl">Hi, I’m Sagar</h1>
        <div className=" text-base">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </div>
      </div>
      <div>
        <span className="flex h-6 ">
          <IoLocationOutline className="w-6 h-6" />{" "}
          <span>Ahmedabaad, India</span>
        </span>
      </div>
    </div>
  );
};
