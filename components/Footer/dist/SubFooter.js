"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var bs_1 = require("react-icons/bs");
var fi_1 = require("react-icons/fi");
var link_1 = require("next/link");
var maindata_1 = require("@/data/maindata");
var navigation_1 = require("next/navigation");
var SubFooter = function (props) {
    var pathname = navigation_1.usePathname();
    return (react_1["default"].createElement("div", { className: "pt-8 pb-10 grid lg:grid-cols-[2fr_3.5fr] gap-8 lg:gap-16" },
        react_1["default"].createElement("div", { className: "flex flex-col gap-8" },
            react_1["default"].createElement("div", { className: "h-10 w-40" },
                react_1["default"].createElement("img", { className: "object-contain h-full w-full", src: "/homez-logo-light.svg", alt: "" })),
            react_1["default"].createElement("p", null, "Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly."),
            react_1["default"].createElement("div", { className: "flex gap-4 text-[1.6rem] md:text-[2rem]" },
                react_1["default"].createElement("div", { className: "text-white" },
                    react_1["default"].createElement(fa_1.FaFacebook, null)),
                react_1["default"].createElement("div", { className: "text-white" },
                    react_1["default"].createElement(fi_1.FiInstagram, null)),
                react_1["default"].createElement("div", { className: "text-white" },
                    react_1["default"].createElement(bs_1.BsPinterest, null)),
                react_1["default"].createElement("div", { className: "text-white" },
                    react_1["default"].createElement(bs_1.BsTwitter, null))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null,
                    "Designed by",
                    " ",
                    react_1["default"].createElement(link_1["default"], { href: "", className: "underline" }, "Webestica"),
                    ", Powered by",
                    " ",
                    react_1["default"].createElement(link_1["default"], { href: "", className: "underline" }, "Webflow")))),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 lg:flex lg:gap-8" },
            maindata_1.footer.map(function (footerItem) { return (react_1["default"].createElement("div", { key: footerItem.id, className: "flex flex-col gap-4" },
                react_1["default"].createElement("h1", { className: "text-2xl h-full sm:h-12 flex justify-start whitespace-nowrap items-center" }, footerItem.head),
                react_1["default"].createElement("ul", { className: "flex flex-col justify-center items-start gap-2" }, footerItem.footerItems.map(function (item) { return (react_1["default"].createElement("li", { key: item.id, className: (pathname === item.link ? "text-gray-400" : "text-white") + " hover:text-gray-300" },
                    react_1["default"].createElement(link_1["default"], { href: item.link, className: "whitespace-nowrap" },
                        " ",
                        item.head))); })))); }),
            react_1["default"].createElement("div", { className: "flex flex-col gap-4" },
                react_1["default"].createElement("h1", { className: "text-2xl h-full sm:h-12 flex justify-start items-center" }, "Subscribe to our newsletter"),
                react_1["default"].createElement("p", null, "Meant balls it if up doubt small purse. Required his you put the outlived answered position."),
                react_1["default"].createElement("div", { className: "border-2 border-white grid grid-cols-[2.5fr_1fr] justify-between items-center" },
                    react_1["default"].createElement("input", { className: "bg-black text-white py-3 px-2 outline-none", type: "text", placeholder: "your email" }),
                    react_1["default"].createElement("button", { className: "bg-white text-black py-3 px-3" }, "Submit"))))));
};
exports["default"] = SubFooter;
