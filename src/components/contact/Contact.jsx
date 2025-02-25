import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
const email = "ganbatgantulga247@gmail.com";
const phone = "+976 95168240";

const handleCopyEmail = async () => {
  await navigator.clipboard.writeText(email);
};
const handleCopyPhone = async () => {
  await navigator.clipboard.writeText(phone);
};

export const Contact = () => {
  return (
    <div className=" py-16 px-4">
      <div className=" flex flex-col items-center gap-4">
        <div className=" py-1 px-5 bg-gray-200 rounded-xl">Get in touch</div>
        <div className="text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
        <div>
          <div className="flex justify-center items-center  gap-4 ">
            <TfiEmail className="w-6 h-6" onClick={handleCopyEmail} />
            ganbatgantulga247@gmail.com
            <FiCopy className="w-6 h-6" />
          </div>
          <div className="flex justify-center gap-4">
            <FiPhone className="w-6 h-6" />
            +976 95168240
            <FiCopy className="w-6 h-6" onClick={handleCopyPhone} />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-gray-600">
          <div>You may also find me on these platforms!</div>
          <div className="flex justify-center gap-1">
            <FiGithub className="w-9 h-9" />
            <FiTwitter className="w-9 h-9" />
            <FiFigma className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};
