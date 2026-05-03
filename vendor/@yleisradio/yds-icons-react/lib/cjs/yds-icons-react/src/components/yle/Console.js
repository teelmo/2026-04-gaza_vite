"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Console = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M1.118 8.69a6 6 0 0 1 5.97-5.39h9.825a6 6 0 0 1 5.969 5.39l.677 6.634a4.88 4.88 0 0 1-4.856 5.376 3.91 3.91 0 0 1-3.111-1.543l-1.037-1.363a1 1 0 0 0-.796-.394h-3.58a1 1 0 0 0-.764.355l-1.341 1.59A3.82 3.82 0 0 1 5.157 20.7a4.755 4.755 0 0 1-4.73-5.237zm5.97-3.39a4 4 0 0 0-3.98 3.594l-.691 6.772a2.755 2.755 0 0 0 2.74 3.034c.535 0 1.043-.236 1.388-.645l1.341-1.59A3 3 0 0 1 10.18 15.4h3.58a3 3 0 0 1 2.387 1.183l1.037 1.363a1.91 1.91 0 0 0 1.52.754 2.88 2.88 0 0 0 2.866-3.173l-.677-6.633a4 4 0 0 0-3.98-3.594zM7.6 7.85c.47 0 .85.38.85.85v4.4a.85.85 0 0 1-1.7 0V8.7c0-.47.38-.85.85-.85M10.65 10.9c0 .47-.38.85-.85.85H5.4a.85.85 0 0 1 0-1.7h4.4c.47 0 .85.38.85.85M15.8 11.85a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0M18.8 9.85a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0" })] })));
};
exports.Console = Console;
