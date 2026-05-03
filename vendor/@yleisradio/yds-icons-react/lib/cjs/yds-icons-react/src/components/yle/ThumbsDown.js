"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbsDown = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const ThumbsDown = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M20.564 3.316A1.3 1.3 0 0 0 19.688 3H18v9h1.688A1.31 1.31 0 0 0 21 10.923V4.077a1.3 1.3 0 0 0-.436-.761M16 12.788l-3.608 8.118A2 2 0 0 1 11 19v-4a1 1 0 0 0-1-1H4.329a1 1 0 0 1-1-1.15l1.38-9a1 1 0 0 1 1-.85H16zM19.662 1a3.31 3.31 0 0 1 3.329 2.866Q23 3.933 23 4v7q0 .068-.009.134A3.31 3.31 0 0 1 19.662 14H17.65l-3.736 8.406A1 1 0 0 1 13 23a4 4 0 0 1-4-4v-3H4.345a3 3 0 0 1-2.994-3.45l1.38-9A3 3 0 0 1 5.725 1z", clipRule: "evenodd" })] })));
};
exports.ThumbsDown = ThumbsDown;
