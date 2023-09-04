"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var Footer_1 = require("@/components/Footer/Footer");
var Header_1 = require("@/components/Header/Header");
require("./globals.scss");
var google_1 = require("next/font/google");
var provider_1 = require("@/redux/provider");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Homez Apartments",
    description: "Get your holiday apartments",
    icons: [{ rel: "icon", url: "/homez-logo-light.ico" }]
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(provider_1.Providers, null,
                React.createElement(Header_1["default"], null),
                children,
                React.createElement("footer", null,
                    React.createElement(Footer_1["default"], null))))));
}
exports["default"] = RootLayout;
