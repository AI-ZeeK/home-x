"use client";
"use strict";
exports.__esModule = true;
var AppSlice_1 = require("@/redux/features/AppSlice");
var hooks_1 = require("@/redux/hooks");
var react_1 = require("react");
var SubHeader_1 = require("./SubHeader");
var TopHeader_1 = require("./TopHeader");
var Header = function (props) {
    var headerRef = react_1.useRef(null);
    var dispatch = hooks_1.useAppDispatch();
    var handleClickOutside = function (event) {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            dispatch(AppSlice_1.closeSubNavOpen());
        }
    };
    react_1.useEffect(function () {
        document.addEventListener("click", handleClickOutside);
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (react_1["default"].createElement("header", { ref: headerRef, className: "sticky top-0 z-40" },
        react_1["default"].createElement("div", { className: "relative" },
            react_1["default"].createElement(TopHeader_1["default"], null),
            react_1["default"].createElement(SubHeader_1["default"], null))));
};
exports["default"] = Header;
