"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadphonesActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const HeadphonesActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M6.343 6.343A8 8 0 0 1 20 12v1h-2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-7a10 10 0 0 0-20 0v7a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H4v-1a8 8 0 0 1 2.343-5.657" })] })));
};
exports.HeadphonesActive = HeadphonesActive;
