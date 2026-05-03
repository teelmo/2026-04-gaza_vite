"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshCcw = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const RefreshCcw = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M14.212 2.249a10 10 0 0 0-9.268 2.673L2 7.688V4a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.525l2.8-2.631a8 8 0 0 1 13.222 2.965 1 1 0 0 0 1.886-.668 10 10 0 0 0-7.22-6.417ZM22 16.312V20a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.475l-2.8 2.631-.009.009-.013.013a8 8 0 0 1-13.2-2.987 1 1 0 0 0-1.886.668 10 10 0 0 0 16.489 3.744z" })] })));
};
exports.RefreshCcw = RefreshCcw;
