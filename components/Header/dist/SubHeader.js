"use client";
"use strict";
exports.__esModule = true;
var hooks_1 = require("@/redux/hooks");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var SubHeader = function (props) {
    var _a = hooks_1.useAppSelector(function (state) { return state.AppReducer; }), isSubNavOpen = _a.isSubNavOpen, navData = _a.navData;
    var pathname = navigation_1.usePathname();
    var nav_pathname = pathname.split("/")[1];
    return (react_1["default"].createElement("nav", { className: (isSubNavOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0") + " transition-all  duration-300 bg-black bottom left-0 w-full p-4 py-2 z-40 absolute md:hidden" },
        react_1["default"].createElement("ul", { className: "justify-center items-start  flex flex-col w-full" }, navData.map(function (data) { return (react_1["default"].createElement("li", { key: data.id, className: ("/" + nav_pathname === data.link ? "text-white" : "text-gray-400") + " cursor-pointer p-2 px-4 w-full transition-all hover:text-gray-300" },
            react_1["default"].createElement(link_1["default"], { href: data.link }, data.head))); }))));
};
exports["default"] = SubHeader;
