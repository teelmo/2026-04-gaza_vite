"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SettingsActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M19.286 15.96A1.65 1.65 0 0 1 19.4 15a1.65 1.65 0 0 1 1.51-1H21a2 2 0 0 0 0-4h-.17a1.65 1.65 0 0 1-1.51-1v-.08a1.65 1.65 0 0 1 .33-1.82l.06-.06a2 2 0 0 0 0-2.83 2 2 0 0 0-2.83 0l-.06.06A1.65 1.65 0 0 1 15 4.6a1.65 1.65 0 0 1-1-1.51V3a2 2 0 1 0-4 0v.17a1.65 1.65 0 0 1-1 1.51h-.08a1.65 1.65 0 0 1-1.82-.33l-.06-.06a2 2 0 1 0-2.83 2.83l.06.06A1.65 1.65 0 0 1 4.6 9a1.65 1.65 0 0 1-1.51 1.08H3a2 2 0 1 0 0 4h.17a1.65 1.65 0 0 1 1.51 1 1.65 1.65 0 0 1-.33 1.82l-.06.06a2 2 0 0 0 1.415 3.417 2 2 0 0 0 1.415-.587l.06-.06A1.65 1.65 0 0 1 9 19.4a1.65 1.65 0 0 1 1.08 1.51V21a2 2 0 0 0 4 0v-.17a1.65 1.65 0 0 1 1-1.51 1.65 1.65 0 0 1 1.82.33l.06.06a2 2 0 0 0 2.83 0 2 2 0 0 0 0-2.83l-.06-.06a1.65 1.65 0 0 1-.444-.86M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0", clipRule: "evenodd" })] })));
};
exports.SettingsActive = SettingsActive;
