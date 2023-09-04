"use client";
"use strict";
exports.__esModule = true;
var AppSlice_1 = require("@/redux/features/AppSlice");
var hooks_1 = require("@/redux/hooks");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var TopHeader = function (props) {
    var isSubNavOpen = hooks_1.useAppSelector(function (state) { return state.AppReducer; }).isSubNavOpen;
    var dispatch = hooks_1.useAppDispatch();
    return (react_1["default"].createElement("nav", { className: "flex justify-between items-center p-4 h-20 z-50 bg-white relative lg:px-6" },
        react_1["default"].createElement("div", { className: "h-10 w-48" },
            react_1["default"].createElement("img", { className: "object-contain h-full w-full", src: "/homez-logo.svg", alt: "" })),
        react_1["default"].createElement("div", { className: "flex gap-6 justify-center items-center" },
            react_1["default"].createElement("ul", { className: "justify-center items-center gap-1 hidden md:flex" },
                react_1["default"].createElement("li", { className: "cursor-pointer p-2 whitespace-nowrap" }, "Home"),
                react_1["default"].createElement("li", { className: "cursor-pointer p-2 whitespace-nowrap" }, "About"),
                react_1["default"].createElement("li", { className: "cursor-pointer p-2 whitespace-nowrap" }, "Properties"),
                react_1["default"].createElement("li", { className: "cursor-pointer p-2 whitespace-nowrap" }, "Contact Us")),
            react_1["default"].createElement("button", { className: "p-2 px-4 transition-all bg-black hover:bg-white text-white hover:text-black flex justify-center items-center h-10 border cursor-pointer border-black" }, "Add Property"),
            react_1["default"].createElement("button", { onClick: function () { return dispatch(AppSlice_1.setSubNavOpen()); }, className: "md:hidden p-2 px-3 transition-all flex justify-center items-center h-10 border cursor-pointer border-black " + (isSubNavOpen ? "bg-white text-black" : "bg-black text-white") + " " },
                react_1["default"].createElement(fa_1.FaBars, { fontSize: 22 }),
                " "))));
};
exports["default"] = TopHeader;
