"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Favorite = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M16.95 1.998c-.854 0-1.7.169-2.488.495l-.292.13a6.5 6.5 0 0 0-1.817 1.28L12 4.256l-.353-.353a6.501 6.501 0 1 0-9.194 9.194l8.84 8.84a1 1 0 0 0 1.414 0l8.84-8.84a6.5 6.5 0 0 0 0-9.194 6.5 6.5 0 0 0-4.597-1.905m0 2a4.5 4.5 0 0 1 4.16 6.225l-.104.23a4.5 4.5 0 0 1-.873 1.23L12 19.815l-8.133-8.132a4.501 4.501 0 0 1 6.366-6.366l1.06 1.06a1 1 0 0 0 1.414 0l1.06-1.06a4.5 4.5 0 0 1 3.183-1.319" })] })));
};
exports.Favorite = Favorite;
