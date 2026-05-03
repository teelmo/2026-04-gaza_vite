"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WifiOff = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const WifiOff = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M.293.293a1 1 0 0 1 1.414 0l5.107 5.106.027.028 3.947 3.947q.095.074.17.17l12.75 12.749a1 1 0 0 1-1.415 1.414l-6.617-6.617a1 1 0 0 1-.775-.165 5 5 0 0 0-5.792 0 1 1 0 0 1-1.158-1.63 7 7 0 0 1 4.663-1.267l-2.782-2.782a9.94 9.94 0 0 0-4.19 2.071 1 1 0 1 1-1.283-1.534A11.9 11.9 0 0 1 8.21 9.626L5.888 7.302a14.9 14.9 0 0 0-3.806 2.447A1 1 0 0 1 .758 8.251 17 17 0 0 1 4.386 5.8L.293 1.706a1 1 0 0 1 0-1.414ZM11 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4.821-9.379a1 1 0 0 1 1.338-.46c.893.437 1.73.983 2.488 1.627a1 1 0 1 1-1.294 1.524 10 10 0 0 0-2.072-1.353 1 1 0 0 1-.46-1.338m-5.03-4.574A15 15 0 0 1 21.918 9.75a1 1 0 0 0 1.323-1.5A17 17 0 0 0 10.63 4.053a1 1 0 0 0 .16 1.994Z" })] })));
};
exports.WifiOff = WifiOff;
