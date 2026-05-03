"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingUp = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const TrendingUp = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M17 5a1 1 0 1 0 0 2h3.586L13.5 14.086 9.207 9.793a1 1 0 0 0-1.414 0l-7.5 7.5a1 1 0 1 0 1.414 1.414L8.5 11.914l4.293 4.293a1 1 0 0 0 1.414 0L22 8.414V12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" })] })));
};
exports.TrendingUp = TrendingUp;
