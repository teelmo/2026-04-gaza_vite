"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copy = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Copy = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3.293 3.293A1 1 0 0 1 4 3h9a1 1 0 0 1 1 1v1a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h1a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V4a1 1 0 0 1 .293-.707M11 8a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" })] })));
};
exports.Copy = Copy;
