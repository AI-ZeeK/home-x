"use client";
import {closeSubNavOpen, setSubNavOpen} from "@/redux/features/AppSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import React, {useEffect, useRef} from "react";
import {FaBars} from "react-icons/fa";
import SubHeader from "./SubHeader";
import TopHeader from "./TopHeader";
type Props = {};

const Header = (props: Props) => {
  const headerRef: any = useRef(null);
  const dispatch = useAppDispatch();
  const handleClickOutside = (event: any) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      dispatch(closeSubNavOpen());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header ref={headerRef} className="sticky top-0 z-40">
      <div className="relative">
        <TopHeader />
        <SubHeader />
      </div>
    </header>
  );
};

export default Header;
