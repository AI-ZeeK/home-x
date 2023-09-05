import Link from "next/link";
import React from "react";

type Props = {};

const SupFooter = (props: Props) => {
  return (
    <div className="pt-10 pb-8 grid grid-cols-1 gap-6 md:grid-cols-[2.5fr_1fr] overflow-hidden">
      <h1 className="sm:text-[2.8rem] text-[1.8rem] lg:text-[3rem]">
        Looking to buy or sell the property? Homez is here for you!
      </h1>
      <div className="flex flex-col  justify-center items-end gap-6">
        <div className="p-3 px-6 bg-white text-black cursor-pointer text-md">
          <span>Call us: +44 (445) 578 996</span>
        </div>

        <Link href={""} className="underline cursor-pointer">
          <span>example@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};

export default SupFooter;
