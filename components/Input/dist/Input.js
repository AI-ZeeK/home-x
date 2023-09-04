"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TextInput = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? "text" : _b;
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-1" },
        react_1["default"].createElement("label", { className: "text-gray-700" }, label),
        react_1["default"].createElement("input", { type: type, placeholder: placeholder, className: "outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all" })));
};
exports["default"] = TextInput;
