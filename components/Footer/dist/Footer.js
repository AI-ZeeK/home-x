"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SubFooter_1 = require("./SubFooter");
var SupFooter_1 = require("./SupFooter");
var Footer = function (props) {
    return (react_1["default"].createElement("div", { className: "bg-black text-white p-2 py-4 sm:px-4 md:p-6" },
        react_1["default"].createElement(SupFooter_1["default"], null),
        react_1["default"].createElement("div", { className: "h-[2px] w-full bg-gray-700" }),
        react_1["default"].createElement(SubFooter_1["default"], null)));
};
exports["default"] = Footer;
