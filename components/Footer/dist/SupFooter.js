"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var SupFooter = function (props) {
    return (react_1["default"].createElement("div", { className: "pt-10 pb-8 grid grid-cols-1 gap-6 md:grid-cols-[2.5fr_1fr]" },
        react_1["default"].createElement("h1", { className: "sm:text-[2.8rem] text-[1.8rem] lg:text-[3rem]" }, "Looking to buy or sell the property? Homez is here for you!"),
        react_1["default"].createElement("div", { className: "flex flex-col  justify-center items-end gap-6" },
            react_1["default"].createElement("div", { className: "p-3 px-6 bg-white text-black cursor-pointer text-md" },
                react_1["default"].createElement("span", null, "Call us: +44 (445) 578 996")),
            react_1["default"].createElement(link_1["default"], { href: "", className: "underline cursor-pointer" },
                react_1["default"].createElement("span", null, "example@gmail.com")))));
};
exports["default"] = SupFooter;
