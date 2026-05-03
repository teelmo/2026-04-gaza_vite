"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Volume = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92z", clipRule: "evenodd" })] })));
};
exports.Volume = Volume;
