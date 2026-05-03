"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIos = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ShareIos = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M11.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 4.414v10.72c0 .478-.448.866-1 .866s-1-.388-1-.867V4.414L8.707 6.707a1 1 0 0 1-1.414-1.414zM4 11a1 1 0 0 1 1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 1 1 2 0v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1" })] })));
};
exports.ShareIos = ShareIos;
