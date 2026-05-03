"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshCw = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const RefreshCw = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M10.229 4.2a8 8 0 0 1 7.446 2.169L20.475 9H17a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v3.688l-2.944-2.766A10 10 0 0 0 2.567 8.666a1 1 0 0 0 1.886.668A8 8 0 0 1 10.229 4.2M6.325 17.631 3.525 15H7a1 1 0 1 0 0-2H1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.688l2.944 2.766a10 10 0 0 0 16.489-3.744 1 1 0 0 0-1.886-.668 8 8 0 0 1-13.222 2.965" })] })));
};
exports.RefreshCw = RefreshCw;
