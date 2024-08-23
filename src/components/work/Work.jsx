import React from "react";
import { RiShareBoxFill } from "react-icons/ri";

export const Work = () => {
  return (
    <div className="px-4 py-16 flex flex-col gap-12 bg-white items-center md:px-20 md:py-24">
      <div className=" text-sm bg-gray-200 py-1 px-5 text-gray-600 rounded-2xl">
        Work
      </div>
      <p className="text-gray-600 text-base ">
        Some of the noteworthy projects I have built:
      </p>
      <div className="border border-gray-200 rounded-xl shadow-md lg:flex lg:justify-between lg:gap-0">
        <div className="flex justify-center bg-gray-50 rounded-t-xl p-8 lg:w-1/2 md:p-12 lg:rounded-l-xl ">
          <img className=" h-auto w-auto rounded-xl" src="fiskil.png" alt="" />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:w-1/2 md:gap-12">
          <div className="text-lg">Fiskil</div>
          <div className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </div>
          <div>{/* icons */}</div>
          <div>
            <RiShareBoxFill />
          </div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl shadow-md lg:flex lg:flex-row-reverse lg:justify-between lg:gap-0">
        <div className="flex justify-center bg-gray-50 rounded-t-xl p-8 lg:w-1/2 md:p-12 lg:rounded-l-xl ">
          <img className=" h-auto w-auto rounded-xl" src="fiskil.png" alt="" />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:w-1/2 md:gap-12">
          <div className="text-lg">Fiskil</div>
          <div className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </div>
          <div>{/* icons */}</div>
          <div>
            <RiShareBoxFill />
          </div>
        </div>
      </div>
    </div>
  );
};
