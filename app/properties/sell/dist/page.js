"use strict";
exports.__esModule = true;
var maindata_1 = require("@/data/maindata");
var link_1 = require("next/link");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var io5_1 = require("react-icons/io5");
var SellProperties = function (props) {
    var sell_properties = maindata_1.properties.filter(function (property) { return property.listing_type.toLowerCase() === "sell"; });
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-8" },
        react_1["default"].createElement("div", { className: "px-2 above-480:px-4 p-16 bg-black lg:!py-20 text-white flex flex-col gap-4" },
            react_1["default"].createElement("h1", { className: "text-[2rem] above-480:text-[2.4rem] sm:!text-[3.4rem] lg:!text-[3.5rem] text-center" }, "Browse Properties"),
            react_1["default"].createElement("div", { className: "flex gap-4 justify-center items-center" },
                react_1["default"].createElement(link_1["default"], { href: "/properties", className: "p-2 px-4 transition-all bg-black hover:bg-white duration-300 text-white hover:text-black flex justify-center items-center h-10 border cursor-pointer border-white" }, "All"),
                react_1["default"].createElement(link_1["default"], { href: "/properties/rent", className: "p-2 px-4 transition-all bg-black hover:bg-white duration-300 text-white hover:text-black flex justify-center items-center h-10 border cursor-pointer border-white" }, "Rent"),
                react_1["default"].createElement(link_1["default"], { href: "/properties/sell", className: "p-2 px-4 transition-all bg-white hover:bg-[#A1A1A1] duration-300 text-black hover:text-black flex justify-center items-center h-10 border cursor-pointer border-white" }, "Sell"))),
        react_1["default"].createElement("div", { className: "p-4 sm:p-6 pb-16" },
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, sell_properties.map(function (property) { return (react_1["default"].createElement("div", { className: "flex flex-col gap-4 cursor-pointer", key: property.id },
                react_1["default"].createElement("div", { className: "relative overflow-hidden" },
                    react_1["default"].createElement("div", { className: "absolute top-6 z-20 left-6 flex gap-4 w-full justify-start items-center" },
                        react_1["default"].createElement("div", { className: "bg-black text-sm text-white p-2 px-3" }, property.listing_type),
                        react_1["default"].createElement("div", { className: "text-sm text-black bg-white p-2 px-3" }, property.property_type)),
                    react_1["default"].createElement("img", { src: property.img, alt: "", className: "h-full w-full object-cover hover:scale-110 transition-all duration-700" })),
                react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("h4", { className: "font-nunito_sans font-semibold text-2xl" }, property.property_name),
                    react_1["default"].createElement("div", { className: "flex gap-1 justify-start items-center" },
                        react_1["default"].createElement(io5_1.IoLocation, { className: "text-lg" }),
                        react_1["default"].createElement("p", { className: "text-sm" }, property.location)),
                    react_1["default"].createElement("div", { className: "h-[2px] w-full bg-gray-300" }),
                    react_1["default"].createElement("div", { className: "flex justify-between flex-wrap gap-4" },
                        react_1["default"].createElement("div", { className: "flex gap-4  justify-start items-center" },
                            react_1["default"].createElement("div", { className: "flex gap-2 justify-start items-center" },
                                react_1["default"].createElement(fa_1.FaVectorSquare, null),
                                react_1["default"].createElement("p", null,
                                    property.sqft,
                                    " Sq.ft")),
                            react_1["default"].createElement("div", { className: "flex gap-2 justify-start items-center" },
                                react_1["default"].createElement(fa_1.FaBath, null),
                                react_1["default"].createElement("p", null,
                                    property.bath,
                                    " Bath")),
                            react_1["default"].createElement("div", { className: "flex gap-2 justify-start items-center" },
                                react_1["default"].createElement(io5_1.IoBed, null),
                                react_1["default"].createElement("p", null,
                                    property.bed,
                                    " Bed"))),
                        react_1["default"].createElement("div", { className: "text-2xl" },
                            "$",
                            property.price.toLocaleString("us-en"),
                            " USD /mo"))))); })))));
};
exports["default"] = SellProperties;
