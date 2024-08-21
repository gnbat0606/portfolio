import { Navigation } from "./Navigation";
import React from "react";

export const dropdown = () => {
  return (
    <div
      className=" cursor-pointer"
      onClick={() => {
        setOpen(false);
      }}
    >
      <Navigation />
    </div>
  );
};
