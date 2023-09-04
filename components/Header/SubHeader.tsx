"use client";

import {NavType} from "@/data/maindata";
import {useAppSelector} from "@/redux/hooks";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

type Props = {};

const SubHeader = (props: Props) => {
  const {isSubNavOpen, navData} = useAppSelector((state) => state.AppReducer);
  const pathname = usePathname();
  const nav_pathname = pathname.split("/")[1];

  return (
    <nav
      className={`${
        isSubNavOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-[-100%] opacity-0"
      } transition-all  duration-300 bg-black bottom left-0 w-full p-4 py-2 z-40 absolute md:hidden`}
    >
      <ul className="justify-center items-start  flex flex-col w-full">
        {navData.map((data: NavType) => (
          <li
            key={data.id}
            className={`${
                `/${nav_pathname}` === data.link ? "text-white" : "text-gray-400"
            } cursor-pointer p-2 px-4 w-full transition-all hover:text-gray-300`}
          >
            <Link href={data.link}>{data.head}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubHeader;
