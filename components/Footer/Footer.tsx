import React from "react";
import SubFooter from "./SubFooter";
import SupFooter from "./SupFooter";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white p-2 py-4 sm:px-4 md:p-6">
      <SupFooter />
      <div className="h-[2px] w-full bg-gray-700" />
      <SubFooter />
    </div>
  );
};

export default Footer;
