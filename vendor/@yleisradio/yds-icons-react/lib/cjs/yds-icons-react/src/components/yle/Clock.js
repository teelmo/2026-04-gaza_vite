"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Clock = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M7.29.386a1 1 0 0 1-.176 1.403l-4.5 3.5a1 1 0 0 1-1.228-1.578l4.5-3.5A1 1 0 0 1 7.29.386M13 7a1 1 0 1 0-2 0v5.25a1 1 0 0 0 .6.916l4 1.75a1 1 0 0 0 .8-1.832L13 11.596zm-1-5C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0M16.886 1.79A1 1 0 0 1 18.114.21l4.5 3.5a1 1 0 0 1-1.228 1.58z" })] })));
};
exports.Clock = Clock;
