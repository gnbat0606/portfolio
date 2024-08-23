import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";
export const WebTop = () => {
  return (
    <div className="py-16 px-4  md:py-24 md:px-20">
      <div className="flex flex-col gap-12 md:flex-row-reverse md:px-8">
        <div className=" flex justify-center items-center">
          <div className="w-[240px] h-[280px] shrink-0 md:w-[280px] md:h-[320px]">
            <img
              src="sagar.jpeg"
              className="w-full h-full object-cover relative z-10 border-8 border-white "
              alt=""
            />
          </div>
          <div className=" absolute w-[272px] h-[290px] z-0 bg-gray-200 mt-10 md:ml-20 md:mt-28"></div>
        </div>
        <div className=" flex flex-col gap-10">
          <h1 className="text-4xl font-medium">Hi, I’m Sagar</h1>
          <div className=" text-base text-gray-600">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex h-6 items-center text-[16px] text-gray-600 gap-1">
              <IoLocationOutline className="w-6 h-6" />
              Ahmedabaad, India
            </div>
            <div className="flex h-6 items-center text-[16px] text-gray-600 gap-1">
              <GoDotFill className="text-green-500 w-6 h-6" /> Available for new
              projects
            </div>
          </div>
          <div className="flex gap-2">
            <FiGithub />
            <FiTwitter />
            <FiFigma />
          </div>
        </div>
      </div>
    </div>
  );
};
