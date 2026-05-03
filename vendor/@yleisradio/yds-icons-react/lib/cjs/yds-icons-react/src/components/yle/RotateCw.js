"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateCw = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const RotateCw = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M8.141 4.996a8 8 0 0 1 9.543 1.372L20.48 9H17a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v3.685l-2.934-2.763a10 10 0 1 0 2.367 10.411 1 1 0 0 0-1.886-.666 8 8 0 1 1-11.406-9.67Z" })] })));
};
exports.RotateCw = RotateCw;
