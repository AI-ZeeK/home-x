"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.setNavData = exports.closeSubNavOpen = exports.setSubNavOpen = exports.AppSlice = void 0;
var maindata_1 = require("@/data/maindata");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isSubNavOpen: false,
    navData: maindata_1.navData
};
exports.AppSlice = toolkit_1.createSlice({
    name: "APP",
    initialState: initialState,
    reducers: {
        setSubNavOpen: function (state) {
            state.isSubNavOpen = !state.isSubNavOpen;
        },
        closeSubNavOpen: function (state) {
            state.isSubNavOpen = false;
        },
        setNavData: function (state, _a) {
            var payload = _a.payload;
            var x = state.navData.map(function (navItem) {
                return payload.id === navItem.id
                    ? __assign(__assign({}, navItem), { state: true }) : __assign(__assign({}, navItem), { state: false });
            });
            state.navData = x;
        }
    }
});
exports.setSubNavOpen = (_a = exports.AppSlice.actions, _a.setSubNavOpen), exports.closeSubNavOpen = _a.closeSubNavOpen, exports.setNavData = _a.setNavData;
exports["default"] = exports.AppSlice.reducer;
