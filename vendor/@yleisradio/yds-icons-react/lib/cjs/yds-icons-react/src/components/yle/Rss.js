"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rss = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Rss = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 4a1 1 0 0 1 1-1 17 17 0 0 1 17 17 1 1 0 1 1-2 0A15 15 0 0 0 4 5a1 1 0 0 1-1-1m0 7a1 1 0 0 1 1-1 10 10 0 0 1 10 10 1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1m2 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4" })] })));
};
exports.Rss = Rss;
