"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronDown16 = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronDown16 = (_a) => {
    var { title = undefined, titleId = undefined, width = '16', height = '16', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 16 16", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m3 6 5 5 5-5" })] })));
};
exports.ChevronDown16 = ChevronDown16;
