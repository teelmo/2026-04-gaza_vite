"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Umbrella = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Umbrella = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M3.894 4.134a12.05 12.05 0 0 1 20.101 7.771A1 1 0 0 1 23 13H13v6a2 2 0 0 0 4 0 1 1 0 1 1 2 0 4 4 0 1 1-8 0v-6H1a1 1 0 0 1-.995-1.095 12.05 12.05 0 0 1 3.89-7.771ZM21.84 11a10.05 10.05 0 0 0-19.68 0z", clipRule: "evenodd" })] })));
};
exports.Umbrella = Umbrella;
