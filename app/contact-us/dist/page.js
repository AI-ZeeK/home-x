"use client";
"use strict";
exports.__esModule = true;
var Input_1 = require("@/components/Input/Input");
var link_1 = require("next/link");
var react_1 = require("react");
var ContactUs = function (props) {
    return (react_1["default"].createElement("div", { className: "flex p-4 pt-8 pb-14 lg:pb-20 lg:pt-14 lg:p-8 flex-col gap-8" },
        react_1["default"].createElement("div", { className: "font-semibold px-2 p-12 lg:!py-16" },
            react_1["default"].createElement("h1", { className: "text-[3rem] above-480:text-[3.8rem] sm:!text-[4.4rem] lg:!text-[5.5rem] text-center" }, "Contact Us")),
        react_1["default"].createElement("div", { className: "grid sm:grid-cols-2 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-2 border-2 bg-black text-white border-black " },
            react_1["default"].createElement("div", { className: "py-8 p-4 md:p-8 md:py-12 flex flex-col gap-8 " },
                react_1["default"].createElement("h2", { className: "text-5xl" }, "Get In Touch"),
                react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("h5", { className: "text-2xl font-semibold" }, "Location"),
                    react_1["default"].createElement("p", { className: "text-sm" }, "Chicago HQ Estica Cop. Macomb, MI 48042")),
                react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("h5", { className: "text-2xl font-semibold" }, "Email"),
                    react_1["default"].createElement(link_1["default"], { href: "mailto:122", className: "underline" }, "example@gmail.com")),
                react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("h5", { className: "text-2xl font-semibold" }, "Phone"),
                    react_1["default"].createElement(link_1["default"], { href: "tel:+1455578996", className: "underline" }, "+1 (455) 578 996"))),
            react_1["default"].createElement("div", { className: "flex justify-center items-center overflow-hidden w-full h-[26rem] sm:h-[100%]" },
                react_1["default"].createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064841031!2d-0.4312470053939443!3d51.5286070085584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1693716917304!5m2!1sen!2sng", width: "600", height: "450", className: "h-full w-full", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }))),
        react_1["default"].createElement("div", { className: "flex flex-col gap-4" },
            react_1["default"].createElement("div", { className: "flex gap-2 " },
                react_1["default"].createElement("h2", { className: "above-480:text-4xl  text-2xl" }, "Write a Message")),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 above-480:grid-cols-2 gap-4 lg:gap-8" },
                react_1["default"].createElement(Input_1["default"], { label: "Name", placeholder: "Name" }),
                react_1["default"].createElement(Input_1["default"], { label: "Email", placeholder: "Email" }),
                react_1["default"].createElement(Input_1["default"], { label: "Phone Number", placeholder: "Phone Number", type: "tel" }),
                react_1["default"].createElement(Input_1["default"], { label: "Subject", placeholder: "Subject" }),
                react_1["default"].createElement("div", { className: "flex flex-col gap-1 col-span-2 " },
                    react_1["default"].createElement("label", { className: "text-gray-700" }, "Message"),
                    react_1["default"].createElement("textarea", { rows: 6, cols: 10, placeholder: "Message", className: "outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all" }))),
            react_1["default"].createElement("div", { className: "flex justify-start items-center" },
                react_1["default"].createElement("button", { className: "p-3 px-6 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-semibold" }, "Submit")))));
};
exports["default"] = ContactUs;
