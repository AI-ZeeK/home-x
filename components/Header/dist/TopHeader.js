"use client";
"use strict";
exports.__esModule = true;
var AppSlice_1 = require("@/redux/features/AppSlice");
var hooks_1 = require("@/redux/hooks");
var link_1 = require("next/link");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var navigation_1 = require("next/navigation");
var TopHeader = function (props) {
    var _a = hooks_1.useAppSelector(function (state) { return state.AppReducer; }), isSubNavOpen = _a.isSubNavOpen, navData = _a.navData;
    var dispatch = hooks_1.useAppDispatch();
    var pathname = navigation_1.usePathname();
    var nav_pathname = pathname.split("/")[1];
    return (react_1["default"].createElement("nav", { className: "flex justify-between items-center p-2 sm:p-4 h-20 z-50 bg-white relative lg:px-6 " },
        react_1["default"].createElement("div", { className: "h-10 w-40" },
            react_1["default"].createElement("img", { className: "object-contain h-full w-full", src: "/homez-logo.svg", alt: "" })),
        react_1["default"].createElement("div", { className: "flex gap-6 justify-center items-center" },
            react_1["default"].createElement("ul", { className: "justify-center items-center gap-2 hidden md:flex" }, navData.map(function (data) { return (react_1["default"].createElement("li", { key: data.id, className: ("/" + nav_pathname === data.link ? "after:w-full" : "") + " cursor-pointer p-2 whitespace-nowrap relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-1  rounded-full after:bg-black after:content-[''] after:transition-all hover:after:w-full" },
                react_1["default"].createElement(link_1["default"], { href: data.link }, data.head))); })),
            react_1["default"].createElement(link_1["default"], { href: "/add-property", className: "p-2 px-4 transition-all bg-black hover:bg-white text-white hover:text-black hidden above-480:flex justify-center items-center h-10 border cursor-pointer border-black" }, "Add Property"),
            react_1["default"].createElement("button", { onClick: function () { return dispatch(AppSlice_1.setSubNavOpen()); }, className: "md:hidden p-2 px-3 transition-all flex justify-center items-center h-10 border cursor-pointer border-black " + (isSubNavOpen ? "bg-white text-black" : "bg-black text-white") + " " },
                react_1["default"].createElement(fa_1.FaBars, { fontSize: 22 }),
                " "))));
};
exports["default"] = TopHeader;
