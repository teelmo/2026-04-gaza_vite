"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingDown = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const TrendingDown = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M1.707 5.293A1 1 0 0 0 .293 6.707l7.5 7.5a1 1 0 0 0 1.414 0L13.5 9.914 20.586 17H17a1 1 0 1 0 0 2h6.003a.996.996 0 0 0 .996-.952L24 18v-6a1 1 0 1 0-2 0v3.586l-7.793-7.793a1 1 0 0 0-1.414 0L8.5 12.086z" })] })));
};
exports.TrendingDown = TrendingDown;
