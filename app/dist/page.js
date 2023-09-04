"use strict";
exports.__esModule = true;
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var io5_1 = require("react-icons/io5");
var ci_1 = require("react-icons/ci");
var fa6_1 = require("react-icons/fa6");
var pi_1 = require("react-icons/pi");
var go_1 = require("react-icons/go");
var maindata_1 = require("@/data/maindata");
var link_1 = require("next/link");
function Home() {
    return (React.createElement("main", { className: "flex flex-col gap-8" },
        React.createElement("section", { className: "p-2 pt-12 sm:p-6 flex flex-col gap-8" },
            React.createElement("div", { className: "flex flex-col justify-center items-center gap-8 lg:flex-row" },
                React.createElement("div", null,
                    React.createElement("div", { className: "text-[3rem] above-480:text-[3.6rem] sm:!text-[4rem] lg:!text-[4rem] leading-[1.2] font-semibold flex flex-wrap gap-2 justify-start items-end" },
                        React.createElement("span", { className: "font-nunito_sans" }, "Easiest way to find your"),
                        " ",
                        React.createElement("span", { className: "" },
                            React.createElement("img", { className: "h-16 sm:h-full above-480:w-40 w-[40rem] rounded-[3rem] object-cover", src: "/home/thumb_1.jpeg", alt: "" })),
                        " ",
                        React.createElement("span", { className: "font-nunito_sans" }, "dream place"))),
                React.createElement("div", { className: "flex justify-end items-center  w-full overflow-hidden" },
                    React.createElement(link_1["default"], { href: "/properties", className: "flex justify-end items-center relative w-full translate-x-12" },
                        React.createElement("div", { className: "h-36 w-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 md:h-44 md:w-44 rounded-full overflow-hidden z-10" },
                            React.createElement("img", { className: "h-full w-full object-cover", src: "/home/about-service-p-500.jpg", alt: "" })),
                        React.createElement("div", { className: "h-36 w-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 md:h-44 md:w-44 rounded-full text-rotate-block  transition-all hover:z-20 cursor-pointer translate-x-[-3rem] bg-black text-white flex justify-center items-center" },
                            React.createElement(bs_1.BsArrowRight, { className: "icon transition-all cursor-pointer", fontSize: 36, color: "#fff" }),
                            React.createElement("div", { className: "text-black cursor-pointer absolute top-[50%] transparent translate-x-[-50%] translate-y-[-50%] left-[50%] w-full h-full" },
                                React.createElement("fieldset", null,
                                    React.createElement("label", { "data-id": "Rosehip Oil", className: "rounded-full flex flex-col items-center justify-center focus:outline-none ring-pink-500" },
                                        React.createElement("svg", { className: "svg absolute translate-y-[50%] cursor-pointer transition-all duration-700", viewBox: "0 0 100 100", width: "100", height: "100" },
                                            React.createElement("defs", null,
                                                React.createElement("path", { id: "circle", d: "\n                        M 50, 50\n                        m -37, 0\n                        a 37,37 0 1,1 74,0\n                        a 37,37 0 1,1 -74,0" })),
                                            React.createElement("text", { "font-size": "10", className: "svg-text text-2" },
                                                React.createElement("textPath", { xlinkHref: "#circle", className: "text-white versailles relative font-thin transition-all duration-500" }, "View all Properties")))))))))),
            React.createElement("div", { className: "lg:grid lg:grid-cols-[2fr_2.5fr_1fr] lg:gap-8 grid gap-4  py-8" },
                React.createElement("div", { className: "flex flex-col gap-4 p-2 lg:gap-24" },
                    React.createElement("div", { className: "flex flex-col gap-4 p-2" },
                        React.createElement("p", null, "Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy."),
                        React.createElement("div", { className: "p-3 flex justify-between items-center border-2 border-black" },
                            React.createElement("input", { type: "text", className: "o outline-none p-3 w-full ", placeholder: "Enter keyword" }),
                            React.createElement("button", { className: "p-3 px-8 bg-black text-white " }, "Search")),
                        React.createElement("div", { className: "flex justify-start items-center gap-2" },
                            React.createElement(fa_1.FaGlobeEurope, null),
                            React.createElement("p", { className: "text-sm" }, "Globally integrated real estate platform"))),
                    React.createElement("div", { className: "flex justify-start items-start sm:items-center gap-2 lg:gap-4 flex-col sm:flex-row lg:flex-col lg:items-start" },
                        React.createElement("div", { className: "flex justify-start items-center" },
                            React.createElement("div", { className: "rounded-full h-16 w-16 overflow-hidden" },
                                React.createElement("img", { className: "h-full w-full object-cover", src: "/home/profile-1.jpg", alt: "" })),
                            React.createElement("div", { className: "rounded-full h-16 w-16 -translate-x-3 overflow-hidden" },
                                React.createElement("img", { className: "h-full w-full object-cover", src: "/home/profile-2.jpg", alt: "" })),
                            React.createElement("div", { className: "rounded-full h-16 w-16 -translate-x-6 overflow-hidden" },
                                React.createElement("img", { className: "h-full w-full object-cover", src: "/home/profile-3.jpg", alt: "" })),
                            React.createElement("div", { className: "rounded-full h-16 w-16 -translate-x-9 overflow-hidden bg-black text-white flex justify-center items-center" },
                                React.createElement("span", null, "20+"))),
                        React.createElement("div", null,
                            React.createElement("h3", { className: "whitespace-nowrap flex justify-start items-center gap-2 font-semibold text-2xl" },
                                "Rating ",
                                React.createElement(bs_1.BsFillStarFill, null),
                                " 5.0"),
                            React.createElement("p", { className: "text-sm" }, "Trusted by a client worldwide")))),
                React.createElement("div", { className: "p-2" },
                    React.createElement("div", { className: "relative" },
                        React.createElement("img", { src: "/home/hero-image-1.jpg", alt: "" }),
                        React.createElement("div", { className: "absolute -bottom-8 md:left-10 left-4 bg-black lg:w-auto md:!w-auto sm:!w-[95%] above-480:w-[94%] w-[90%] text-white sm:p-4 md:p-6 md:px-8 p-4 flex flex-col gap-4" },
                            React.createElement("p", { className: "text-xl" }, "Orchid Casel de Paradise"),
                            React.createElement("div", { className: "flex gap-4  justify-start items-center text-sm" },
                                React.createElement("div", { className: "flex gap-2 justify-start items-center" },
                                    React.createElement(fa_1.FaVectorSquare, null),
                                    React.createElement("p", null, "1145 Sq.ft")),
                                React.createElement("div", { className: "flex gap-2 justify-start items-center" },
                                    React.createElement(fa_1.FaBath, null),
                                    React.createElement("p", null, "3 Bath")),
                                React.createElement("div", { className: "flex gap-2 justify-start items-center" },
                                    React.createElement(io5_1.IoBed, null),
                                    React.createElement("p", null, "3 Bed"))),
                            React.createElement("div", { className: "bg-white text-black cursor-pointer hover:bg-[#262626] hover:text-white transition-all p-2 justify-center items-center w-full  text-center text-sm sm:text-lg" }, "View Details")))),
                React.createElement("div", { className: "lg:!grid-cols-1 above-480:grid-cols-3 grid-cols-2 grid gap-8 md:justify-center justify-between items-center lg:items-start p-8 pt-12 " },
                    React.createElement("div", { className: "flex flex-col justify-center items-start gap-2" },
                        React.createElement("h3", { className: "text-5xl" }, "99%"),
                        React.createElement("p", null, "Customer satisfaction")),
                    React.createElement("div", { className: "flex flex-col justify-center items-start gap-2" },
                        React.createElement("h3", { className: "text-5xl" }, "56+"),
                        React.createElement("p", null, "Experience agents")),
                    React.createElement("div", { className: "flex flex-col justify-center items-start gap-2" },
                        React.createElement("h3", { className: "text-5xl" }, "249"),
                        React.createElement("p", null, "Total property sell")))),
            React.createElement("div", { className: "grid lg:grid-cols-[2fr_3.5fr] lg:gap-8 lg:justify-end lg:items-end gap-4 md:gap-8 p-2" },
                React.createElement("div", null,
                    React.createElement("img", { src: "/home/about-image.jpg", alt: "" })),
                React.createElement("div", { className: "flex flex-col gap-8 " },
                    React.createElement("h1", { className: "lg:text-[3rem] sm:text-[2rem] text-[1.4rem] font-nunito_sans" }, "Our objective is to establish micro-communities that not only serve their residents but also contribute positively to the larger community. We believe that every space holds potential, and we endeavor to transform these spaces into vibrant and sustainable neighborhoods. Our approach to land planning."),
                    React.createElement("div", { className: "flex flex-col gap-8 lg:gap-32 lg:pb-16" },
                        React.createElement("div", { className: "flex flex-col gap-4" },
                            React.createElement("h3", { className: "font-semibold text-xl" }, "From search to buy:"),
                            React.createElement("div", { className: "flex justify-start flex-col above-480:flex-row items-start above-480:items-center gap-4 flex-wrap" },
                                React.createElement("div", { className: "flex justify-center   items-center gap-1" },
                                    React.createElement(bs_1.BsSearch, null),
                                    React.createElement("span", null, "Search")),
                                React.createElement("div", { className: "h-1 above-480:w-12 w-full bg-black" }),
                                React.createElement("div", { className: "flex justify-center   items-center gap-1" },
                                    React.createElement(ci_1.CiCalculator2, null),
                                    React.createElement("span", null, "Mortgage")),
                                React.createElement("div", { className: "h-1 above-480:w-12 w-full bg-black" }),
                                React.createElement("div", { className: "flex justify-center   items-center gap-1" },
                                    React.createElement(fa6_1.FaSpaceAwesome, null),
                                    React.createElement("span", null, "Tour")),
                                React.createElement("div", { className: "h-1 above-480:w-12 w-full bg-black" }),
                                React.createElement("div", { className: "flex justify-center   items-center gap-1" },
                                    React.createElement(pi_1.PiHandshakeDuotone, null),
                                    React.createElement("span", null, "Negotiate")),
                                React.createElement("div", { className: "h-1 above-480:w-12 w-full bg-black" }),
                                React.createElement("div", { className: "flex justify-center   items-center gap-1" },
                                    React.createElement(go_1.GoVerified, null),
                                    React.createElement("span", null, "Approval")),
                                React.createElement("div", { className: "h-1 above-480:w-12 w-full bg-black" }),
                                React.createElement("div", { className: "flex justify-center   items-center gap-1" },
                                    React.createElement(go_1.GoKey, null),
                                    React.createElement("span", null, "Buy")),
                                React.createElement("div", { className: "h-1 above-480:w-12 w-full bg-black" }))),
                        React.createElement("div", { className: "grid grid-cols-1 lg:!grid lg:grid-cols-4 above-480:flex flex-wrap above-480:justify-center place-items-center items-center " },
                            React.createElement("div", { className: "h-56 w-56 lg:w-52 lg:h-52  rounded-full border-2 border-black bg-black text-white text-center flex flex-col gap-2 justify-center items-center p-4" },
                                React.createElement("h4", { className: "text-2xl font-semibold" }, "25 Years"),
                                React.createElement("p", { className: "text-[14px]" }, "Of successful experience in trading")),
                            React.createElement("div", { className: "h-56 w-56 lg:w-52 lg:h-52 rounded-full border-2 border-black bg-white text-black text-center flex flex-col gap-2 justify-center items-center p-4 lg:translate-y-16" },
                                React.createElement("h4", { className: "text-2xl font-semibold" }, "Rent"),
                                React.createElement("p", { className: "text-[14px]" }, "Supposing so be resolving breakfast am or perfectly.")),
                            React.createElement("div", { className: "h-56 w-56 lg:w-52 lg:h-52 rounded-full border-2 border-black bg-white text-black text-center flex flex-col gap-2 justify-center items-center p-4" },
                                React.createElement("h4", { className: "text-2xl font-semibold" }, "Sell"),
                                React.createElement("p", { className: "text-[14px]" }, "Speedily say has suitable disposal add boy.")),
                            React.createElement("div", { className: "h-56 w-56 lg:w-52 lg:h-52 rounded-full border-2 border-black bg-white text-black text-center flex flex-col gap-2 justify-center items-center p-4 lg:translate-y-16" },
                                React.createElement("h4", { className: "text-2xl font-semibold" }, "Buy"),
                                React.createElement("p", { className: "text-[14px]" }, "Passage its ten led removal Preference any astonished")))))),
            React.createElement("div", { className: "p-2 flex flex-col gap-12" },
                React.createElement("h1", { className: "above-480:text-6xl text-4xl text-center font-nunito_sans" }, "Available Properties for Sell and Rent"),
                React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, maindata_1.properties.map(function (property) { return (React.createElement("div", { className: "flex flex-col gap-4 cursor-pointer", key: property.id },
                    React.createElement("div", { className: "relative overflow-hidden" },
                        React.createElement("div", { className: "absolute top-6 z-20 left-6 flex gap-4 w-full justify-start items-center" },
                            React.createElement("div", { className: "bg-black text-sm text-white p-2 px-3" }, property.listing_type),
                            React.createElement("div", { className: "text-sm text-black bg-white p-2 px-3" }, property.property_type)),
                        React.createElement("img", { src: property.img, alt: "", className: "h-full w-full object-cover hover:scale-110 transition-all duration-700" })),
                    React.createElement("div", { className: "flex flex-col gap-2" },
                        React.createElement("h4", { className: "font-nunito_sans font-semibold text-2xl" }, property.property_name),
                        React.createElement("div", { className: "flex gap-1 justify-start items-center" },
                            React.createElement(io5_1.IoLocation, { className: "text-lg" }),
                            React.createElement("p", { className: "text-sm" }, property.location)),
                        React.createElement("div", { className: "h-[2px] w-full bg-gray-300" }),
                        React.createElement("div", { className: "flex justify-between flex-wrap gap-4" },
                            React.createElement("div", { className: "flex gap-4  justify-start items-center" },
                                React.createElement("div", { className: "flex gap-2 justify-start items-center" },
                                    React.createElement(fa_1.FaVectorSquare, null),
                                    React.createElement("p", null,
                                        property.sqft,
                                        " Sq.ft")),
                                React.createElement("div", { className: "flex gap-2 justify-start items-center" },
                                    React.createElement(fa_1.FaBath, null),
                                    React.createElement("p", null,
                                        property.bath,
                                        " Bath")),
                                React.createElement("div", { className: "flex gap-2 justify-start items-center" },
                                    React.createElement(io5_1.IoBed, null),
                                    React.createElement("p", null,
                                        property.bed,
                                        " Bed"))),
                            React.createElement("div", { className: "text-2xl" },
                                "$",
                                property.price.toLocaleString("us-en"),
                                " USD /mo"))))); })),
                React.createElement("div", { className: "flex justify-center items-center w-full" },
                    React.createElement(link_1["default"], { href: "/properties", className: "p-2 px-4 transition-all bg-black hover:bg-white text-white hover:text-black hidden above-480:flex justify-center items-center h-10 border cursor-pointer border-black" }, "View All Properties")))),
        React.createElement("section", { className: "min-h-[20rem]" },
            React.createElement("img", { src: "/property-video-poster.jpg", className: "h-full object-cover w-full min-h-[20rem]", alt: "" })),
        React.createElement("section", { className: "p-2 pt-12 sm:p-6 flex flex-col gap-8" },
            React.createElement("div", { className: "p-2 flex flex-col gap-12" },
                React.createElement("h3", { className: "text-3xl above-480:text-4xl text-center font-nunito_sans" }, "Our Investors and Business Partners Are Our Strength"),
                React.createElement("div", { className: "grid grid-cols-2 above-480:grid-cols-3 md:!grid-cols-6 gap-4" }, maindata_1.partners.map(function (partner) { return (React.createElement("div", { className: "", key: partner.id },
                    React.createElement("img", { src: partner.img, className: "w-full h-full object-contain", alt: "" }))); }))),
            React.createElement("div", { className: "p-2 flex flex-col gap-12" },
                React.createElement("h1", { className: "above-480:text-6xl text-4xl text-center font-nunito_sans" }, "Our Availability in These Towns"),
                React.createElement("div", { className: "grid grid-cols-2 md:!grid-cols-3 lg:!grid-cols-6 gap-8" }, maindata_1.towns.map(function (town) { return (React.createElement("div", { className: "flex flex-col items-center gap-2 cursor-pointer" },
                    React.createElement("div", { className: "rounded-full overflow-hidden" },
                        React.createElement("img", { src: town.img, alt: "", className: "w-full h-full object-cover hover:scale-110 transition-all duration-700" })),
                    React.createElement("p", { className: "text-lg" }, town.city))); }))))));
}
exports["default"] = Home;