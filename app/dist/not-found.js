"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var NotFound = function (props) {
    return (react_1["default"].createElement("div", { className: "p-8 flex justify-center items-center" },
        react_1["default"].createElement("div", { className: "border-black border-2 p-8 flex flex-col gap-8 justify-center items-center max-w-[40rem]" },
            react_1["default"].createElement("h2", { className: "sm:text-8xl text-6xl" }, "404"),
            react_1["default"].createElement("h4", { className: "text-2xl sm:text-5xl" }, "Page Not Found"),
            react_1["default"].createElement("p", { className: "text-center" }, "The page you are looking for doesn't exist or has been moved"),
            react_1["default"].createElement(link_1["default"], { href: "/", className: "p-4 w-full transition-all bg-black hover:bg-white text-white hover:text-black flex justify-center items-center border-2 cursor-pointer border-black" }, "Back to home"))));
};
exports["default"] = NotFound;
