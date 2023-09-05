"use client";
import {NavType} from "@/data/maindata";
import {setSubNavOpen} from "@/redux/features/AppSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import {FaBars} from "react-icons/fa";
import {usePathname, useRouter} from "next/navigation";

type Props = {};

const TopHeader = (props: Props) => {
  const {isSubNavOpen, navData} = useAppSelector((state) => state.AppReducer);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const nav_pathname = pathname.split("/")[1];

  return (
    <nav className="flex justify-between items-center p-2 sm:p-4 h-20 z-50 bg-white relative lg:px-6 ">
      <Link href="/" className="h-10 w-40">
        <img
          className="object-contain h-full w-full"
          src="/homez-logo.svg"
          alt=""
        />
      </Link>
      <div className="flex gap-6 justify-center items-center">
        <ul className="justify-center items-center gap-2 hidden md:flex">
          {navData.map((data: NavType) => (
            <li
              key={data.id}
              className={`${
                `/${nav_pathname}` === data.link ? "after:w-full" : ""
              } cursor-pointer p-2 whitespace-nowrap relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-1  rounded-full after:bg-black after:content-[''] after:transition-all hover:after:w-full`}
            >
              <Link href={data.link}>{data.head}</Link>
            </li>
          ))}
        </ul>
        <Link
          href="/add-property"
          className="p-2 px-4 transition-all bg-black hover:bg-white text-white hover:text-black hidden above-480:flex justify-center items-center h-10 border cursor-pointer border-black"
        >
          Add Property
        </Link>
        <button
          onClick={() => dispatch(setSubNavOpen())}
          className={`md:hidden p-2 px-3 transition-all flex justify-center items-center h-10 border cursor-pointer border-black ${
            isSubNavOpen ? "bg-white text-black" : "bg-black text-white"
          } `}
        >
          <FaBars fontSize={22} />{" "}
        </button>
      </div>
    </nav>
  );
};

export default TopHeader;
