"use client";
"use strict";
exports.__esModule = true;
var hooks_1 = require("@/redux/hooks");
var react_1 = require("react");
var SubHeader = function (props) {
    var isSubNavOpen = hooks_1.useAppSelector(function (state) { return state.AppReducer; }).isSubNavOpen;
    return (react_1["default"].createElement("nav", { className: (isSubNavOpen ? "translate-y-0" : "translate-y-[-100%]") + " transition-all duration-300 bg-black text-white p-4 py-2 z-40 relative md:hidden" },
        react_1["default"].createElement("ul", { className: "justify-center items-start  flex flex-col w-full" },
            react_1["default"].createElement("li", { className: "cursor-pointer p-2 px-4 w-full" }, "Home"),
            react_1["default"].createElement("li", { className: "cursor-pointer p-2 px-4 w-full" }, "About"),
            react_1["default"].createElement("li", { className: "cursor-pointer p-2 px-4 w-full" }, "Properties"),
            react_1["default"].createElement("li", { className: "cursor-pointer p-2 px-4 w-full" }, "Contact Us"))));
};
exports["default"] = SubHeader;
