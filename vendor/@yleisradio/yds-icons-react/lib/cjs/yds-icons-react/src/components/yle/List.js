"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const List = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M7 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M7 12a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M3 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM8 17a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zM3 11a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM3 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z" })] })));
};
exports.List = List;
